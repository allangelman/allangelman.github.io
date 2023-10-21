/* eslint-disable @next/next/no-sync-scripts */
import Image from "next/image";
import { Layout } from "../Layout";
import { ImageSlider } from "../ImageSlider";
import { Vimeo } from "../Vimeo";
import { ThreeDArtTemplate } from "../ThreeDArtTemplate";

export const AntiqueShop = () => {
  return (
    <>
      <ThreeDArtTemplate
        title="The Antique Shop"
        tools={["Maya", "Substance Painter", "Houdini", "Arnold"]}
      >
        <>
          <Vimeo videoID={"492851519"} />
          <ImageSlider
            firstImagePath="/threeDArt/antiqueshop/TheAntiqueShop.png"
            secondImagePath="/threeDArt/antiqueshop/AOwithwire.png"
            ratio="aspect-16/9"
          />
          <span>
            {`After taking the CGMA course Procedural Modeling for Production in Houdini,
              taught by Sean McEwan, I created my own procedural Houdini tool to create straw lampshades.
              I then created this fun personal project of an Antique Shop to give my lamps a home!`}
          </span>
          <span>
            {`
              Modeled in Maya and Houdini. Cloth in nCloth. Textured with Substance Painter and Photoshop.
              Procedural shading, lighting, and rendering done with Arnold.`}
          </span>
          <Image
            src="/threeDArt/antiqueshop/closeup.png"
            alt="final"
            width={850}
            height={450}
            objectFit="cover"
            loader={myLoader}
          />
          <Image
            src="/threeDArt/antiqueshop/closeup2.png"
            alt="final"
            width={850}
            height={450}
            objectFit="cover"
            loader={myLoader}
          />
          <Vimeo videoID={"492857587"} />
          <span>
            {`Here is a gif compilation of my test renders while I was working on this project!`}
          </span>
          <img
            src="/threeDArt/antiqueshop/1_8.gif"
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
