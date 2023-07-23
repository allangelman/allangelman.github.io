/* eslint-disable @next/next/no-sync-scripts */
import Image from "next/image";
import { Layout } from "../Layout";
import cn from "classnames";
import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";

export const FairyHouse = () => {
  return (
    <>
      <Layout>
        <>
          <div className="lg:mx-auto lg:max-w-[1100px] flex flex-col items-center space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Image
                src="/threeDArt/fairyhouse/ao.png"
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
            <div
              className="w-full h-full"
              style={{
                padding: "56.25% 0 0 0",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://player.vimeo.com/video/503873374?h=2efc068be3&color=ff0179"
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
              src="/threeDArt/fairyhouse/1_2.gif"
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
