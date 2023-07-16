/* eslint-disable @next/next/no-sync-scripts */
import Image from "next/image";
import { Layout } from "../Layout";
import cn from "classnames";
import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";

export const AntiqueShop = () => {
  const [sliderValue, setSliderValue] = useState<number>(0);

  return (
    <>
      <Layout>
        <>
          <div className="lg:mx-auto lg:max-w-[850px] flex flex-col items-center space-y-8">
            <div className="aspect-16/9 group relative w-full h-full">
              <div className="w-full h-full absolute">
                <Image
                  src="/threeDArt/antiqueshop/TheAntiqueShop.png"
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
                  src="/threeDArt/antiqueshop/AOwithwire.png"
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
              {`After taking the CGMA course Procedural Modeling for Production in Houdini,
              taught by Sean McEwan, I created my own procedural Houdini tool to create straw lampshades.
              I then created this fun personal project of an Antique Shop to give my lamps a home!
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
            <div
              className="w-full h-full"
              style={{
                padding: "56.25% 0 0 0",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://player.vimeo.com/video/492851519?h=2efc068be3&color=ff0179"
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

            <div
              className="w-full h-full"
              style={{
                padding: "56.25% 0 0 0",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://player.vimeo.com/video/492857587?h=2efc068be3&color=ff0179"
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
              src="/threeDArt/houseofachild/1_8.gif"
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
