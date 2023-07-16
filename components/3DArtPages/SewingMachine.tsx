/* eslint-disable @next/next/no-sync-scripts */
import Image from "next/image";
import { Layout } from "../Layout";
import cn from "classnames";
import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";

export const SewingMachine = () => {
  const [sliderValue, setSliderValue] = useState<number>(0);
  console.log(sliderValue);
  console.log(sliderValue);
  return (
    <>
      <Layout>
        <>
          <div className="lg:mx-auto lg:max-w-[850px] flex flex-col items-center space-y-8">
            <div
              className="w-full h-full"
              style={{
                padding: "56.25% 0 0 0",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://player.vimeo.com/video/460981218?h=2efc068be3&color=ff0179"
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
            <div className="space-y-4">
              <p>
                {`Modeled in Maya and Zbrush for creating displacement maps. Textured in Substance Painter and Photoshop.
              Procedurally shaded, lit, and rendered in Arnold.`}
              </p>

              <p>
                {`Modeled in Maya and Zbrush for creating displacement maps. Textured in Substance Painter and Photoshop.
              Procedurally shaded, lit, and rendered in Arnold.`}
              </p>
            </div>
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
