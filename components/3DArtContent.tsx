import { Layout } from "./Layout";
import { Grid } from "./Grid";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";
import { Vimeo } from "./Vimeo";

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
              />
              <ThreeDArtThumbnail
                src={"/threeDArt/antiqueshop/TheAntiqueShopThumbnail.png"}
                alt={"antiqueshop"}
                href={"3DArt/AntiqueShop"}
                name={"The Antique Shop"}
              />
              <ThreeDArtThumbnail
                src={"/threeDArt/sewingmachine/sewingmachinethumb.png"}
                alt={"sewingmachine"}
                href={"3DArt/SewingMachine"}
                name={"Vintage Sewing Machine"}
              />
              <ThreeDArtThumbnail
                src={"/threeDArt/lakevillage/ao.jpg"}
                alt={"lakevillage"}
                href={"3DArt/LakeVillage"}
                name={"Lake Village"}
              />
              <ThreeDArtThumbnail
                src={"/threeDArt/fairyhouse/thumbnail.png"}
                alt={"fairyhouse"}
                href={"3DArt/FairyHouse"}
                name={"Fairy House"}
              />
              <ThreeDArtThumbnail
                src={"/threeDArt/snowqueenkitchen/ao.png"}
                alt={"snowqueenkitchen"}
                href={"3DArt/SnowQueenKitchen"}
                name={"Snow Queen Kitchen"}
              />
              <ThreeDArtThumbnail
                src={"/threeDArt/callioujourney/thumbnail.jpg"}
                alt={"callioujourney"}
                href={"3DArt/CalliouJourney"}
                name={"Calliou's Journey"}
              />
              <ThreeDArtThumbnail
                src={"/threeDArt/hope/thumbnail.png"}
                alt={"hope"}
                href={"3DArt/Hope"}
                name={"Hope"}
              />
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
}

export const ThreeDArtThumbnail = ({
  src,
  alt,
  href,
  name,
}: ThreeDArtThumbnailProps) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <a href={href}>
      <div className="aspect-5/3 relative">
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
        <div className="w-full h-full rounded-lg absolute bg-transparent flex items-center justify-center text-2xl text-transparent hover:text-black hover:bg-white/70">
          {name}
        </div>
      </div>
    </a>
  );
};
