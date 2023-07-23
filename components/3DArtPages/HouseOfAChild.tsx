/* eslint-disable @next/next/no-sync-scripts */
import Image from "next/image";
import { Layout } from "../Layout";
import { ImageSlider } from "../ImageSlider";

export const HouseOfAChild = () => {
  return (
    <>
      <Layout>
        <>
          <div className="lg:mx-auto lg:max-w-[850px] flex flex-col items-center space-y-8">
            <ImageSlider
              firstImagePath="/threeDArt/houseofachild/final.png"
              secondImagePath="/threeDArt/houseofachild/wireframe1.png"
              ratio="16/9"
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
            <div
              className="w-full h-full"
              style={{
                padding: "56.25% 0 0 0",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://player.vimeo.com/video/535617212?h=2efc068be3&color=ff0179"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <span>
              {`Here is a gif compilation of my test renders while I was working on this project!`}
            </span>
            <img
              src="/threeDArt/houseofachild/wip.gif"
              alt="final"
              width={650}
              height={450}
            />
          </div>
        </>
      </Layout>
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
