import { useState, ReactElement } from "react";
import cn from "classnames";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "../styles/Home.module.css";

interface imageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

const myLoader = ({ src, width, quality }: imageLoaderProps): string => {
  return `https://allan-gelman.imgix.net/${src}?=${width}&q=${quality || 75}`;
};

interface ThumbnailProps {
  src: string;
  alt: string;
  name: string;
  tools: string[];
  children: ReactElement;
}

export const Thumbnail = ({
  src,
  alt,
  name,
  tools,
  children,
}: ThumbnailProps) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div
          className={cn(styles.thumbnail, "relative", {
            "opacity-100": imageIsLoaded,
            "opacity-0": !imageIsLoaded,
          })}
        >
          <div className="aspect-5/3 relative">
            <Image
              src={src}
              loader={myLoader}
              alt={alt}
              layout="fill"
              objectFit="cover"
              onLoad={() => {
                setImageIsLoaded(true);
              }}
            />
          </div>
          <div className="h-20 w-full bg-slate-100 flex items-center justify-center text-black space-y-2 flex-col pb-2">
            <span className="text-lg font-bold">{name}</span>
            <div className="space-x-2">
              <>
                {tools.map((tool: string) => {
                  return (
                    <span
                      key={tool}
                      className="text-slate-800 text-xs rounded bg-slate-300/50 p-1"
                    >
                      {tool}
                    </span>
                  );
                })}
              </>
            </div>
          </div>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            styles.DialogOverlay,
            "fixed inset-0 bg-slate-600/50 backdrop-blur-sm"
          )}
        >
          <Dialog.Content
            className={cn(
              styles.DialogContent,
              "fixed top-1/2 left-1/2 transform bg-white overflow-y-scroll -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[55vw] h-[93vh] max-w-[90vw] md:max-w-[55vw] max-h-[93vh] outline-none rounded-lg"
            )}
          >
            {children}
            <Dialog.Close asChild>
              <button
                className="text-white flex h-6 w-6 rounded-full absolute top-[10px] bg-black/40 hover:bg-black/60 right-[10px] items-center outline-none justify-center"
                aria-label="Close"
              >
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
