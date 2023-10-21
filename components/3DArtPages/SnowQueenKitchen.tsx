/* eslint-disable @next/next/no-sync-scripts */
import Image from "next/image";
import { Layout } from "../Layout";
import { ImageSlider } from "../ImageSlider";
import { Vimeo } from "../Vimeo";
import { ThreeDArtTemplate } from "../ThreeDArtTemplate";

export const SnowQueenKitchen = () => {
  return (
    <>
      <ThreeDArtTemplate
        title="Snow Queen Kitchen"
        tools={["Maya", "Substance Painter", "Arnold"]}
      >
        <>
          <ImageSlider
            firstImagePath="/threeDArt/snowqueenkitchen/ao.png"
            secondImagePath="/threeDArt/snowqueenkitchen/wire.png"
            ratio="aspect-16/9"
          />
          <span>
            {`One of my favorite 3D animated movies is Frozen,
              so when I found Marcelo Vignali's concept art for the cancelled 2001 Disney movie Snow Queen
              (the project that later became Frozen), I knew I had to model it. Not to mention that everything
              in the concept looked so appealing and whimsical! The oven/stovetop area was my favorite part to
              translate to 3D.`}
          </span>
          <span>
            {`Modeled in Maya. Foliage in Paint Effects. Cloth in nCloth. Rendered in Arnold.`}
          </span>
          <Image
            src="/threeDArt/snowqueenkitchen/closeup.png"
            alt="final"
            width={850}
            height={450}
            objectFit="cover"
            loader={myLoader}
          />
          <Image
            src="/threeDArt/snowqueenkitchen/closeup2.png"
            alt="final"
            width={850}
            height={450}
            objectFit="cover"
            loader={myLoader}
          />
          <Vimeo videoID={"512402836"} />
          <span>
            {`Here is a gif compilation of my test renders while I was working on this project!`}
          </span>
          <img
            src="/threeDArt/snowqueenkitchen/1_4.gif"
            alt="final"
            width={650}
            height={450}
          />
        </>
      </ThreeDArtTemplate>
    </>
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
