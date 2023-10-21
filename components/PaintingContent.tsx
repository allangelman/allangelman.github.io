import { Layout } from "./Layout";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";

import { useState } from "react";
import cn from "classnames";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Grid } from "./Grid";
import { Thumbnail } from "./Thumbnail";
import { HouseOfAChild } from "./3DArtPages/HouseOfAChild";
import { ThumbnailNoLabel } from "./ThumbnailNoLabel";
import styles from "../styles/Home.module.css";

interface imageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

const myLoader = ({ src, width, quality }: imageLoaderProps): string => {
  return `https://allan-gelman.imgix.net/${src}?=${width}&q=${quality || 75}`;
};

export const PaintingContent = () => {
  return (
    <Layout>
      {/* <Grid>
        <>
          <ThumbnailNoLabel
            src={"/paintings/kaz.png"}
            alt={"houseofachild"}
            // href={"3DArt/HouseOfAChild"}
            name={"Film Study"}
            tools={"Photoshop"}
          >
            <HouseOfAChild />
          </ThumbnailNoLabel>
          <ThumbnailNoLabel
            src={"/paintings/inej.png"}
            alt={"houseofachild"}
            // href={"3DArt/HouseOfAChild"}
            name={"Film Study"}
            tools={"Photoshop"}
          >
            <HouseOfAChild />
          </ThumbnailNoLabel>
          <ThumbnailNoLabel
            src={"/paintings/jesper.png"}
            alt={"houseofachild"}
            // href={"3DArt/HouseOfAChild"}
            name={"Film Study"}
            tools={"Photoshop"}
          >
            <HouseOfAChild />
          </ThumbnailNoLabel>
          <ThumbnailNoLabel
            src={"/paintings/sun.png"}
            alt={"houseofachild"}
            // href={"3DArt/HouseOfAChild"}
            name={"Film Study"}
            tools={"Photoshop"}
          >
            <HouseOfAChild />
          </ThumbnailNoLabel>
          <ThumbnailNoLabel
            src={"/paintings/claudia.png"}
            alt={"houseofachild"}
            // href={"3DArt/HouseOfAChild"}
            name={"Film Study"}
            tools={"Photoshop"}
          >
            <HouseOfAChild />
          </ThumbnailNoLabel>
          <ThumbnailNoLabel
            src={"/paintings/push.png"}
            alt={"houseofachild"}
            // href={"3DArt/HouseOfAChild"}
            name={"Film Study"}
            tools={"Photoshop"}
          >
            <HouseOfAChild />
          </ThumbnailNoLabel>
          <ThumbnailNoLabel
            src={"/paintings/meilin.png"}
            alt={"houseofachild"}
            // href={"3DArt/HouseOfAChild"}
            name={"Film Study"}
            tools={"Photoshop"}
          >
            <HouseOfAChild />
          </ThumbnailNoLabel>
          <ThumbnailNoLabel
            src={"/paintings/bentaylor.png"}
            alt={"houseofachild"}
            // href={"3DArt/HouseOfAChild"}
            name={"Film Study"}
            tools={"Photoshop"}
          >
            <HouseOfAChild />
          </ThumbnailNoLabel>
          <ThumbnailNoLabel
            src={"/paintings/natasha.png"}
            alt={"houseofachild"}
            // href={"3DArt/HouseOfAChild"}
            name={"Film Study"}
            tools={"Photoshop"}
          >
            <HouseOfAChild />
          </ThumbnailNoLabel>
          <ThumbnailNoLabel
            src={"/paintings/kalamax.png"}
            alt={"houseofachild"}
            // href={"3DArt/HouseOfAChild"}
            name={"Film Study"}
            tools={"Photoshop"}
          >
            <HouseOfAChild />
          </ThumbnailNoLabel>
          <ThumbnailNoLabel
            src={"/paintings/L.png"}
            alt={"houseofachild"}
            // href={"3DArt/HouseOfAChild"}
            name={"Film Study"}
            tools={"Photoshop"}
          >
            <HouseOfAChild />
          </ThumbnailNoLabel>
          <ThumbnailNoLabel
            src={"/paintings/Pavement.jpg"}
            alt={"houseofachild"}
            // href={"3DArt/HouseOfAChild"}
            name={"Film Study"}
            tools={"Photoshop"}
          >
            <HouseOfAChild />
          </ThumbnailNoLabel>
        </>
      </Grid> */}
      <>
        {/* <div className="grid gap-4 grid-col-1 sm:grid-cols-1">
          <div>
            <Painting
              src={"/paintings/kaz.png"}
              alt={"max"}
              priority
              label={"Film study from Shadow and Bone (Painted in Photoshop)"}
            />
            <Painting
              src={"/paintings/inej.png"}
              alt={"inej"}
              label={"Film study from Shadow and Bone (Painted in Photoshop)"}
            />
            <Painting
              src={"/paintings/jesper.png"}
              alt={"jesper"}
              label={"Film study from Shadow and Bone (Painted in Photoshop)"}
            />
            <Painting
              src={"/paintings/sun.png"}
              alt={"sun"}
              label={"Film study from Sense8 (Painted in Photoshop)"}
            />
            <Painting
              src={"/paintings/claudia.png"}
              alt={"claudia"}
              label={
                "Film study from Interview with the Vampire (Painted in Photoshop)"
              }
            />
            <Painting
              src={"/paintings/push.png"}
              alt={"push"}
              label={"Film study from Push (Painted in Photoshop)"}
            />
            <Painting
              src={"/paintings/meilin.png"}
              alt={"meilin"}
              label={"Film study from Turning Red (Painted in Photoshop)"}
            />
          </div>
        </div> */}
        <div className="grid gap-4 grid-col-1 sm:grid-cols-2">
          <div>
            <Painting
              src={"/paintings/claudia.png"}
              alt={"claudia"}
              label={
                "Film study from Interview with the Vampire (Painted in Photoshop)"
              }
            />
            <Painting
              src={"/paintings/push.png"}
              alt={"push"}
              label={"Film study from Push (Painted in Photoshop)"}
            />
            <Painting
              src={"/paintings/bentaylor.png"}
              alt={"bentaylor"}
              label={
                "Portraits of Ben Levi Ross and Taylor Trensch (Painted in Photoshop)"
              }
            />
            <Painting
              src={"/paintings/natasha.png"}
              alt={"natasha"}
              label={"Portrait of Denee Benton (Painted in Photoshop)"}
            />
          </div>
          <div>
            <Painting
              src={"/paintings/push2.png"}
              alt={"push2"}
              label={"Film study from Push (Painted in Procreate)"}
            />
            <Painting
              src={"/paintings/kaz.png"}
              alt={"max"}
              priority
              label={"Film study from Shadow and Bone (Painted in Photoshop)"}
            />
            <Painting
              src={"/paintings/sun.png"}
              alt={"sun"}
              label={"Film study from Sense8 (Painted in Photoshop)"}
            />
            <Painting
              src={"/paintings/inej.png"}
              alt={"inej"}
              label={"Film study from Shadow and Bone (Painted in Photoshop)"}
            />
            <Painting
              src={"/paintings/meilin.png"}
              alt={"meilin"}
              label={"Film study from Turning Red (Painted in Photoshop)"}
            />
            <Painting
              src={"/paintings/jesper.png"}
              alt={"jesper"}
              label={"Film study from Shadow and Bone (Painted in Photoshop)"}
            />
          </div>
        </div>
      </>
    </Layout>
  );
};

interface PainttingProps {
  src: string;
  alt: string;
  priority?: boolean;
  label: string;
}

export const Painting = ({ src, alt, priority, label }: PainttingProps) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div
          className={cn(
            styles.painting,
            "mt-4 hover:scale-[1.01] relative group transition duration-300 outline-none border-none",
            {
              "opacity-100 transition duration-3000": imageIsLoaded,
              "opacity-0": !imageIsLoaded,
            }
          )}
          style={{
            borderRadius: "8px",
            overflow: "hidden",
            // transition: "0.3s",
          }}
        >
          <div className="w-full h-10 bottom-0 align-baseline absolute bg-transparent transition group-hover:bg-black/60 group-hover:text-white/80 text-transparent flex items-center pl-5">
            {label}
          </div>
          <div
            style={{
              transformOrigin: "center",
            }}
          >
            <Image
              src={src}
              priority={priority}
              loader={myLoader}
              alt={alt}
              width={1200}
              height={500}
              onLoad={() => {
                setImageIsLoaded(true);
              }}
            />
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
              "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[93vw] h-[93vw] max-w-[93vw] max-h-[93vh] outline-none rounded-lg"
            )}
          >
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
