import { Layout } from "./Layout";
import { Grid } from "./Grid";
import { ReactElement, useState } from "react";
import cn from "classnames";
import Image from "next/image";
import { Vimeo } from "./Vimeo";
import * as Dialog from "@radix-ui/react-dialog";
import styles from "../styles/Home.module.css";
import { Cross2Icon } from "@radix-ui/react-icons";
import { HouseOfAChild } from "./3DArtPages/HouseOfAChild";

export const ThreeDContent = () => {
  return (
    <>
      <Layout>
        <div className="space-y-4">
          <Vimeo videoID={"534692300"} />
          <Grid>
            <>
              <ThreeDArtThumbnail
                src={"/threeDArt/houseofachild/sidebyside.png"}
                alt={"houseofachild"}
                href={"3DArt/HouseOfAChild"}
                name={"House of a Child"}
              >
                <HouseOfAChild />
              </ThreeDArtThumbnail>
              <ThreeDArtThumbnail
                src={"/threeDArt/antiqueshop/TheAntiqueShopThumbnail.png"}
                alt={"antiqueshop"}
                href={"3DArt/AntiqueShop"}
                name={"The Antique Shop"}
              >
                <></>
              </ThreeDArtThumbnail>
              <ThreeDArtThumbnail
                src={"/threeDArt/sewingmachine/sewingmachinethumb.png"}
                alt={"sewingmachine"}
                href={"3DArt/SewingMachine"}
                name={"Vintage Sewing Machine"}
              >
                <></>
              </ThreeDArtThumbnail>
              <ThreeDArtThumbnail
                src={"/threeDArt/lakevillage/ao.jpg"}
                alt={"lakevillage"}
                href={"3DArt/LakeVillage"}
                name={"Lake Village"}
              >
                <></>
              </ThreeDArtThumbnail>
              <ThreeDArtThumbnail
                src={"/threeDArt/fairyhouse/thumbnail.png"}
                alt={"fairyhouse"}
                href={"3DArt/FairyHouse"}
                name={"Fairy House"}
              >
                <></>
              </ThreeDArtThumbnail>
              <ThreeDArtThumbnail
                src={"/threeDArt/snowqueenkitchen/ao.png"}
                alt={"snowqueenkitchen"}
                href={"3DArt/SnowQueenKitchen"}
                name={"Snow Queen Kitchen"}
              >
                <></>
              </ThreeDArtThumbnail>
              <ThreeDArtThumbnail
                src={"/threeDArt/callioujourney/thumbnail.jpg"}
                alt={"callioujourney"}
                href={"3DArt/CalliouJourney"}
                name={"Calliou's Journey"}
              >
                <></>
              </ThreeDArtThumbnail>
              <ThreeDArtThumbnail
                src={"/threeDArt/hope/thumbnail.png"}
                alt={"hope"}
                href={"3DArt/Hope"}
                name={"Hope"}
              >
                <></>
              </ThreeDArtThumbnail>
            </>
          </Grid>
        </div>
      </Layout>
    </>
  );
};

export const ThreeDArtPinkThumbnail = () => {
  return (
    <div className="aspect-5/3 relative">
      <div className="w-full h-full absolute bg-yellow-500" />
      <div className="w-full h-full absolute bg-transparent hover:bg-pink-500" />
    </div>
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

interface ThreeDArtThumbnailProps {
  src: string;
  alt: string;
  href: string;
  name: string;
  children: ReactElement;
}

export const ThreeDArtThumbnail = ({
  src,
  alt,
  href,
  name,
  children,
}: ThreeDArtThumbnailProps) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
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
          <div className="w-full h-full rounded-lg absolute bg-transparent flex items-center justify-center text-2xl font-semibold text-transparent hover:bg-white/20">
            {name}
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
