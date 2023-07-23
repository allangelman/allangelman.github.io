/* eslint-disable @next/next/no-sync-scripts */
import { Layout } from "../Layout";
import { useState } from "react";
import { ImageSlider } from "../ImageSlider";

export const CalliouJourney = () => {
  const [sliderValue, setSliderValue] = useState<number>(0);
  console.log(sliderValue);
  console.log(sliderValue);
  return (
    <>
      <Layout>
        <>
          <div className="lg:mx-auto lg:max-w-[850px] flex flex-col items-center space-y-8">
            <ImageSlider
              firstImagePath="/threeDArt/callioujourney/callioujourney.png"
              secondImagePath="/threeDArt/callioujourney/callioujourney_ao.png"
              ratio="16/9"
            />
            <span>
              {`This piece is based on a beautiful concept art made by Suheb Zako. I loved the dramatic feeling of the concept,
              and was very excited to capture that in my 3D rendition.`}
            </span>
            <span>
              {`Modeled in Maya. Textured in Substance Painter. Hair/Fur in XGen. Lit and rendered in Arnold.`}
            </span>
            <div
              className="w-full h-full"
              style={{
                padding: "56.25% 0 0 0",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://player.vimeo.com/video/534557526?h=2efc068be3&color=ff0179"
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
              src="/threeDArt/callioujourney/1_6.gif"
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
