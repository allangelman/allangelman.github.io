/* eslint-disable @next/next/no-sync-scripts */
import Image from "next/image";
import { Layout } from "../Layout";
import { ThreeDArtTemplate } from "../ThreeDArtTemplate";
import { Vimeo } from "../Vimeo";

export const FairyHouse = () => {
  return (
    <>
      <ThreeDArtTemplate title="Fairy House" tools={["Maya", "Arnold"]}>
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Image
              src="/threeDArt/fairyhouse/ao.png"
              priority
              alt="final"
              width={500}
              height={450}
              loader={myLoader}
            />
            <Image
              src="/threeDArt/fairyhouse/concept.jpg"
              alt="final"
              width={500}
              height={450}
              loader={myLoader}
            />
          </div>
          <span>
            {`I was mesmerized when I found Gorg Artist's Fairy House concept painting series on ArtStation.
              I knew I had to recreate it in 3D! It was both challenging and fun, and my favorite part was modeling the wacky windows!`}
          </span>
          <span>
            {`Modeled in Maya. Foliage in Paint Effects. Cloth using nCloth. Clouds using Paint Fluids Tool. Rendering with Arnold.`}
          </span>
          <Vimeo videoID={"503873374"} />
          <span>
            {`Here is a gif compilation of my test renders while I was working on this project!`}
          </span>
          <img
            src="/threeDArt/fairyhouse/1_2.gif"
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
