import { Layout } from "./Layout";
import { Grid } from "./Grid";
import { useState, ReactElement } from "react";
import cn from "classnames";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "../styles/Home.module.css";

export const CodingContent = () => {
  return (
    <Layout>
      <Grid>
        <>
          <CodingContentThumbnail
            src={"/coding/mastermind/mastermindthumbnail.png"}
            alt={"mastermind"}
            name={"Code Breaking Game"}
            tools={"TypeScript"}
          >
            <div className=" flex-col flex items-center">
              <div className="text-3xl items-center flex">
                Code Breaking Game
              </div>
              <Image
                className="image" //why is this here?
                src={"/coding/mastermind/mastermindthumbnail.png"}
                loader={myLoader}
                alt={"mastermind"}
                width={850}
                height={450}
                objectFit="cover"
              />
              <Image
                className="image" //why is this here?
                src={"/coding/mastermind/mastermindthumbnail.png"}
                loader={myLoader}
                alt={"mastermind"}
                width={850}
                height={450}
                objectFit="cover"
              />
            </div>
          </CodingContentThumbnail>

          <CodingContentThumbnail
            src={"/coding/raytracer/raytracerthumbnail.png"}
            alt={"raytracer"}
            name={"Ray Tracer with OBJ Loading"}
            tools={"C++"}
          >
            <></>
          </CodingContentThumbnail>
          <CodingContentThumbnail
            src={"/coding/strawlamptool/lamp.png"}
            alt={"strawlamptool"}
            name={"Procedural Straw Lamp Tool"}
            tools={"Houdini"}
          >
            <></>
          </CodingContentThumbnail>
          <CodingContentThumbnail
            src={"/coding/ganxmlfixer/gan.png"}
            alt={"ganxmlfixer"}
            name={"GAN XML Fixer"}
            tools={"Python"}
          >
            <></>
          </CodingContentThumbnail>
          <CodingContentThumbnail
            src={"/coding/mushroomtool/mush.png"}
            alt={"mushroomtool"}
            name={"Procedural Mushroom Tool"}
            tools={"Python, Maya"}
          >
            <></>
          </CodingContentThumbnail>
        </>
      </Grid>
    </Layout>
  );
};

interface imageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

const myLoader = ({ src, width, quality }: imageLoaderProps): string => {
  return `https://allan-gelman.imgix.net/${src}?=${width}&q=${quality || 75}`;
};

interface CodingContentThumbnailProps {
  src: string;
  alt: string;
  name: string;
  tools: string;
  children: ReactElement;
}

export const CodingContentThumbnail = ({
  src,
  alt,
  name,
  tools,
  children,
}: CodingContentThumbnailProps) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div
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
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            styles.DialogOverlay,
            "fixed inset-0 bg-white/50 backdrop-blur-sm"
          )}
        >
          <Dialog.Content
            className={cn(
              styles.DialogContent,
              "fixed top-1/2 left-1/2 transform border-2 border-slate-500 bg-white p-4 overflow-y-scroll -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[93vw] max-w-[55vw] max-h-[93vh] outline-none rounded-lg"
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
