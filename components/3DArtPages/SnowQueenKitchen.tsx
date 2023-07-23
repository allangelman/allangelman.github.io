/* eslint-disable @next/next/no-sync-scripts */
import Image from "next/image";
import { Layout } from "../Layout";
import cn from "classnames";
import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";

export const SnowQueenKitchen = () => {
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
                  src="/threeDArt/snowqueenkitchen/ao.png"
                  alt="final"
                  width={850}
                  height={450}
                  objectFit="cover"
                  loader={myLoader}
                />
              </div>
              <div
                className="w-full h-full  absolute"
                style={{ opacity: `${sliderValue}%` }}
              >
                <Image
                  src="/threeDArt/snowqueenkitchen/wire.png"
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
            <div
              className="w-full h-full"
              style={{
                padding: "56.25% 0 0 0",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://player.vimeo.com/video/512402836?h=2efc068be3&color=ff0179"
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
              src="/threeDArt/snowqueenkitchen/1_4.gif"
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
