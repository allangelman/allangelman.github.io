import { Layout } from "./Layout";
import { Grid } from "./Grid";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";

export const ThreeDContent = () => {
  return (
    <Layout>
      <Grid>
        <>
          <ThreeDArtThumbnail
            src={"/threeDArt/houseofachild/final.png"}
            alt={"houseofachild"}
          />
          <ThreeDArtPinkThumbnail />
          <ThreeDArtPinkThumbnail />
          <ThreeDArtPinkThumbnail />
          <ThreeDArtPinkThumbnail />
          <ThreeDArtPinkThumbnail />
          <ThreeDArtPinkThumbnail />
          <ThreeDArtPinkThumbnail />
        </>
      </Grid>
    </Layout>
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

interface ThreeDArtThumbnailProps {
  src: string;
  alt: string;
}

interface imageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

const myLoader = ({ src, width, quality }: imageLoaderProps): string => {
  return `https://allan-gelman.imgix.net/${src}?=${width}&q=${quality || 75}`;
};

export const ThreeDArtThumbnail = ({ src, alt }: ThreeDArtThumbnailProps) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <div className="aspect-5/3 relative">
      <div
        className={cn("w-full h-full absolute object-cover", {
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
          width={400}
          height={500}
          onLoad={() => {
            setImageIsLoaded(true);
          }}
        />
      </div>
      <div className="w-full h-full rounded-lg absolute bg-transparent flex items-center justify-center text-2xl text-transparent hover:text-black hover:bg-white/30">
        Backyard of a Child
      </div>
    </div>
  );
};
