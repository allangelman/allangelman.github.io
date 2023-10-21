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
import { AntiqueShop } from "./3DArtPages/AntiqueShop";
import { SewingMachine } from "./3DArtPages/SewingMachine";
import { LakeVillage } from "./3DArtPages/LakeVillage";
import { FairyHouse } from "./3DArtPages/FairyHouse";
import { SnowQueenKitchen } from "./3DArtPages/SnowQueenKitchen";
import { CalliouJourney } from "./3DArtPages/CalliouJourney";
import { Hope } from "./3DArtPages/Hope";
import { Thumbnail } from "./Thumbnail";

export const ThreeDContent = () => {
  return (
    <>
      <Layout>
        <div className="space-y-4">
          <Grid>
            <>
              <Thumbnail
                src={"/threeDArt/houseofachild/sidebyside.png"}
                alt={"houseofachild"}
                name={"House of a Child"}
                tools={["Maya", "Substance Painter", "Arnold"]}
              >
                <HouseOfAChild />
              </Thumbnail>
              <Thumbnail
                src={"/threeDArt/antiqueshop/TheAntiqueShopThumbnail.png"}
                alt={"antiqueshop"}
                name={"The Antique Shop"}
                tools={["Maya", "Substance Painter", "Houdini", "Arnold"]}
              >
                <AntiqueShop />
              </Thumbnail>
              <Thumbnail
                src={"/threeDArt/sewingmachine/sewingmachinethumb.png"}
                alt={"sewingmachine"}
                name={"Vintage Sewing Machine"}
                tools={["Maya", "Substance Painter", "Zbrush", "Arnold"]}
              >
                <SewingMachine />
              </Thumbnail>
              <Thumbnail
                src={"/threeDArt/lakevillage/ao.jpg"}
                alt={"lakevillage"}
                name={"Lake Village"}
                tools={["Maya", "Houdini", "Arnold"]}
              >
                <LakeVillage />
              </Thumbnail>
              <Thumbnail
                src={"/threeDArt/fairyhouse/thumbnail.png"}
                alt={"fairyhouse"}
                name={"Fairy House"}
                tools={["Maya", "Arnold"]}
              >
                <FairyHouse />
              </Thumbnail>
              <Thumbnail
                src={"/threeDArt/snowqueenkitchen/ao.png"}
                alt={"snowqueenkitchen"}
                name={"Snow Queen Kitchen"}
                tools={["Maya", "Arnold"]}
              >
                <SnowQueenKitchen />
              </Thumbnail>
              <Thumbnail
                src={"/threeDArt/callioujourney/thumbnail.jpg"}
                alt={"callioujourney"}
                name={"Calliou's Journey"}
                tools={["Maya", "Substance Painter", "Arnold"]}
              >
                <CalliouJourney />
              </Thumbnail>
              <Thumbnail
                src={"/threeDArt/hope/thumbnail.png"}
                alt={"hope"}
                name={"Hope"}
                tools={["Maya", "Substance Painter", "Arnold"]}
              >
                <Hope />
              </Thumbnail>
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
