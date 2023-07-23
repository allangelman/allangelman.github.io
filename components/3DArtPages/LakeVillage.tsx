/* eslint-disable @next/next/no-sync-scripts */
import Image from "next/image";
import { Layout } from "../Layout";
import cn from "classnames";
import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";

export const LakeVillage = () => {
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
                  src="/threeDArt/lakevillage/ao.jpg"
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
                  src="/threeDArt/lakevillage/wire.png"
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
              {`I wanted to model a city environment, so I was very excited when I
              found JC Jongwon Park's Lake Village concept art! It looked so magical,
              and I loved the hot air balloons in the distance. `}
            </span>
            <span>
              {`For this project, I started out by working on a procedural city population tool.
              I modeled variations of houses and imported them into Houdini to use the tool,
              and then imported everything back into Maya. I then modeled the rest of the scene in Maya. `}
            </span>
            <span>
              {`Modeled in Maya and Houdini. Foliage in Paint Effects. Rendered in Arnold.`}
            </span>
            <Image
              src="/threeDArt/lakevillage/closeup1.png"
              alt="final"
              width={850}
              height={450}
              objectFit="cover"
              loader={myLoader}
            />
            <Image
              src="/threeDArt/lakevillage/closeup2.png"
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
                src="https://player.vimeo.com/video/508947737?h=2efc068be3&color=ff0179"
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
              {`Here is a breakdown of the Houdini tool I worked in to create this project.`}
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
                src="https://player.vimeo.com/video/506303254?h=2efc068be3&color=ff0179"
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
              src="/threeDArt/lakevillage/1_1.gif"
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
