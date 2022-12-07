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
            src={"/threeDArt/houseofachild/sidebyside.png"}
            alt={"houseofachild"}
            href={"3DArt/HouseOfAChild"}
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
}

export const ThreeDArtThumbnail = ({
  src,
  alt,
  href,
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
    </a>
  );
};
