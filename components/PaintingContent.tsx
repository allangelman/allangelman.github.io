import { Layout } from "./Layout";
import Image from "next/image";

import { useState } from "react";
import cn from "classnames";

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
      <div className="grid gap-4 grid-col-1 sm:grid-cols-2">
        <div>
          <Painting src={"/paintings/kaz.png"} alt={"max"} />
          <Painting src={"/paintings/bentaylor.png"} alt={"bentaylor"} />
          <Painting src={"/paintings/natasha.png"} alt={"natasha"} />
          <Painting src={"/paintings/kalamax.png"} alt={"kalamax"} />
        </div>
        <div>
          <Painting src={"/paintings/meilin.png"} alt={"meilin"} />
          <Painting src={"/paintings/sun.png"} alt={"sun"} />
          <Painting src={"/paintings/L.png"} alt={"L"} />
          <Painting src={"/paintings/Pavement.jpg"} alt={"pavement"} />
        </div>
      </div>
    </Layout>
  );
};

interface PainttingProps {
  src: string;
  alt: string;
}

export const Painting = ({ src, alt }: PainttingProps) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <div
      className={cn("mt-4", {
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
        width={600}
        height={500}
        onLoad={() => {
          setImageIsLoaded(true);
        }}
      />
    </div>
  );
};
