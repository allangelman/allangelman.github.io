import { Layout } from "./Layout";
import { Grid, Thumbnail } from "./Grid";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";

export const CodingContent = () => {
  return (
    <Layout>
      <Grid>
        <>
          <CodingContentThumbnail
            src={"/coding/mastermind/mastermindthumbnail.png"}
            alt={"mastermind"}
            href={"3DArt/HouseOfAChild"}
            name={"Mastermind"}
          />
          <CodingContentThumbnail
            src={"/coding/raytracer/raytracerthumbnail.png"}
            alt={"raytracer"}
            href={"3DArt/AntiqueShop"}
            name={"Ray Tracer with OBJ Loading"}
          />
          <CodingContentThumbnail
            src={"/coding/strawlamptool/lamp.png"}
            alt={"strawlamptool"}
            href={"3DArt/SewingMachine"}
            name={"Procedural Straw Lamp Tool"}
          />
          <CodingContentThumbnail
            src={"/coding/ganxmlfixer/gan.png"}
            alt={"ganxmlfixer"}
            href={"3DArt/SewingMachine"}
            name={"GAN XML Fixer"}
          />
          <CodingContentThumbnail
            src={"/coding/mushroomtool/mush.png"}
            alt={"mushroomtool"}
            href={"3DArt/SewingMachine"}
            name={"Procedural Mushroom Tool"}
          />
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

interface ThreeDArtThumbnailProps {
  src: string;
  alt: string;
  href: string;
  name: string;
}

export const CodingContentThumbnail = ({
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
