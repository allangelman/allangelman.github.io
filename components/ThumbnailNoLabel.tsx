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

interface ThumbnailNoLabelProps {
  src: string;
  alt: string;
  name: string;
  tools: string;
  children: ReactElement;
}

export const ThumbnailNoLabel = ({
  src,
  alt,
  name,
  tools,
  children,
}: ThumbnailNoLabelProps) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {/* <div
          className={cn(
            "rounded-lg hover:scale-[1.01] transition duration-300 drop-shadow-xl",
            {
              "opacity-100 transition duration-3000": imageIsLoaded,
              "opacity-0": !imageIsLoaded,
            }
          )}
          style={{
            overflow: "hidden",
            transition: "0.3s",
          }}
        >
          <div className="aspect-5/3 relative">
            <div className={cn("w-full h-full absolute")}>
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
          </div>
          <div className="h-20 w-full bg-white flex items-center justify-center text-black space-y-1 flex-col">
            <span className="text-lg font-bold">{name}</span>
            <span>{tools}</span>
          </div>
        </div> */}
        <div className="aspect-5/3 relative hover:scale-[1.01] transition duration-300">
          <div
            className={cn("w-full h-full absolute", {
              "opacity-100 transition duration-3000": imageIsLoaded,
              "opacity-0": !imageIsLoaded,
            })}
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              transition: "0.3s",
            }}
          >
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
          <div className="w-full h-full rounded-lg absolute bg-transparent flex items-center justify-center text-2xl font-semibold text-transparent">
            {name}
          </div>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-white/50 backdrop-blur-sm">
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[93vw] h-[93vw] max-w-[93vw] max-h-[93vh] outline-none rounded-lg">
            <Image
              className="image" //why is this here?
              src={src}
              loader={myLoader}
              alt={alt}
              fill
              onLoad={() => {
                setImageIsLoaded(true);
              }}
              style={{ objectFit: "contain" }}
            />
          </Dialog.Content>
          <Dialog.Close asChild>
            <button
              className="text-black flex h-10 w-10 rounded-full absolute top-[10px] right-[10px] items-center outline-none justify-center"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
