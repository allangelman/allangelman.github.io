/* eslint-disable @next/next/no-sync-scripts */
import Image from "next/image";
import { Layout } from "../Layout";
import cn from "classnames";
import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";

export const CalliouJourney = () => {
  const [sliderValue, setSliderValue] = useState<number>(0);
  console.log(sliderValue);
  console.log(sliderValue);
  return (
    <>
      <Layout>
        <>
          <div className="lg:mx-auto lg:max-w-[850px] flex flex-col items-center space-y-8">
            <div className="aspect-16/9 group relative w-full h-full">
              <div className="w-full h-full absolute">
                <Image
                  src="/threeDArt/callioujourney/callioujourney.png"
                  alt="final"
                  width={850}
                  height={450}
                  objectFit="cover"
                  loader={myLoader}
                />
              </div>
              <div
                className="w-full h-full absolute"
                style={{ opacity: `${sliderValue}%` }}
              >
                <Image
                  src="/threeDArt/callioujourney/callioujourney_ao.png"
                  alt="final"
                  width={850}
                  height={450}
                  objectFit="cover"
                  loader={myLoader}
                />
              </div>
            </div>
            <div className="w-full">
              <Slider.Root
                className="relative flex items-center select-none touch-none max-w-[450px] mx-auto h-10"
                defaultValue={[0]}
                value={[sliderValue]}
                onValueChange={(value) => setSliderValue(value[0])}
                max={100}
                step={1}
                aria-label="WireframeToColorSlider"
              >
                <Slider.Track className="bg-black relative flex-grow rounded-full h-1">
                  <Slider.Range
                    className={"absolute rounded-full h-full bg-blue-400"}
                  />
                </Slider.Track>
                <Slider.Thumb
                  className={
                    "block w-6 h-6 bg-yellow-500 rounded-full shadow-none focus:outline-none"
                  }
                />
              </Slider.Root>
            </div>
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
              src="/threeDArt/hope/1_6.gif"
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
