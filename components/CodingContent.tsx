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
            name={"Code Breaking Game"}
            tools={"TypeScript"}
          />
          <CodingContentThumbnail
            src={"/coding/raytracer/raytracerthumbnail.png"}
            alt={"raytracer"}
            href={"Coding/RayTracer"}
            name={"Ray Tracer with OBJ Loading"}
            tools={"C++"}
          />
          <CodingContentThumbnail
            src={"/coding/strawlamptool/lamp.png"}
            alt={"strawlamptool"}
            href={"3DArt/SewingMachine"}
            name={"Procedural Straw Lamp Tool"}
            tools={"Houdini"}
          />
          <CodingContentThumbnail
            src={"/coding/ganxmlfixer/gan.png"}
            alt={"ganxmlfixer"}
            href={"3DArt/SewingMachine"}
            name={"GAN XML Fixer"}
            tools={"Python"}
          />
          <CodingContentThumbnail
            src={"/coding/mushroomtool/mush.png"}
            alt={"mushroomtool"}
            href={"3DArt/SewingMachine"}
            name={"Procedural Mushroom Tool"}
            tools={"Python, Maya"}
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

interface CodingContentThumbnailProps {
  src: string;
  alt: string;
  href: string;
  name: string;
  tools: string;
}

export const CodingContentThumbnail = ({
  src,
  alt,
  href,
  name,
  tools,
}: CodingContentThumbnailProps) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <a href={href}>
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
    </a>
  );
};

/* <a href={href}>
<div
  className={cn(
    "aspect-5/3 hover:drop-shadow hover:scale-[1.01] transition duration-300",
    {
      "opacity-100 transition duration-3000": imageIsLoaded,
      "opacity-0": !imageIsLoaded,
    }
  )}
  style={{
    borderRadius: "8px",
    overflow: "hidden",
    transition: "0.3s",
  }}
>
  <div className="flex flex-col">
    <Image
      src={src}
      loader={myLoader}
      alt={alt}
      width={800}
      height={500}
      // objectFit="cover"
      onLoad={() => {
        setImageIsLoaded(true);
      }}
    />
    <div className="h-2 w-full bg-blue-500" />
  </div>
</div>
</a> */
