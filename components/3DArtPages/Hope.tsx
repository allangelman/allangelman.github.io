/* eslint-disable @next/next/no-sync-scripts */
import { Layout } from "../Layout";
import { ImageSlider } from "../ImageSlider";
import { Vimeo } from "../Vimeo";

export const Hope = () => {
  return (
    <>
      <Layout>
        <>
          <div className="lg:mx-auto lg:max-w-[850px] flex flex-col items-center space-y-8">
            <ImageSlider
              firstImagePath="/threeDArt/hope/hope_shaded.png"
              secondImagePath="/threeDArt/hope/hope_ao.png"
              ratio="12/5"
            />
            <span>
              {`As soon as I found Rayner Alencar's concept art, I knew I wanted to recreate it in 3D.
              I loved the magical fish in the backpack, and was drawn to this character's story.
              I had so much fun modeling/texturing this piece and matching the beautiful lighting of
              the concept.`}
            </span>
            <span>
              {`Modeled in Maya. Textured in Substance Painter. XGen for Hair. Rendered and lit with Arnold.`}
            </span>
            <Vimeo videoID={"531403562"} />
            <Vimeo videoID={"531406167"} />
            <span>
              {`Here is a gif compilation of my test renders while I was working on this project!`}
            </span>
            <img
              src="/threeDArt/hope/hope.gif"
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
