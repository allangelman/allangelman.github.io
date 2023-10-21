/* eslint-disable @next/next/no-sync-scripts */
import Image from "next/image";
import { Layout } from "../Layout";
import { ImageSlider } from "../ImageSlider";
import { Vimeo } from "../Vimeo";
import { ThreeDArtTemplate } from "../ThreeDArtTemplate";

export const HouseOfAChild = () => {
  return (
    <>
      <ThreeDArtTemplate
        title="House of a Child"
        tools={["Maya", "Substance Painter", "Arnold"]}
      >
        <>
          <Vimeo videoID={"535617212"} />
          <ImageSlider
            firstImagePath="/threeDArt/houseofachild/final.png"
            secondImagePath="/threeDArt/houseofachild/wireframe1.png"
            ratio="aspect-16/9"
          />
          <span>
            {`I modeled the central house of this scene for my Production Modeling
          course from CGMA (Computer Graphics Master Academy), taught by Vidya
          Vinnakota. I was immediately drawn to the "House of a Child" concept
          art when I stumbled upon it, because I envisioned my childhood-self
          trying to build it. That, along with my nostalgia for Boston's often
          foggy sky, is what inspired the creation of this scene! Concept art by
          Lena Kroshilina.`}
          </span>
          <span>
            {`Modeled in Maya. Foliage in PaintEffects and MASH.
          Fog using Maya Fluid's FX. Textured in Substance Painter. Procedural
          shading, lighting, and rendering with Arnold.`}
          </span>
          <Image
            src="/threeDArt/houseofachild/closeup.png"
            alt="final"
            width={850}
            height={450}
            objectFit="cover"
            loader={myLoader}
          />
          <span>
            {`Here is a gif compilation of my test renders while I was working on this project!`}
          </span>
          <img
            src="/threeDArt/houseofachild/wip.gif"
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
