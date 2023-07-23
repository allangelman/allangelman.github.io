/* eslint-disable @next/next/no-sync-scripts */
import { Layout } from "../Layout";
import { useState } from "react";
import { Vimeo } from "../Vimeo";

export const SewingMachine = () => {
  const [sliderValue, setSliderValue] = useState<number>(0);
  console.log(sliderValue);
  console.log(sliderValue);
  return (
    <>
      <Layout>
        <>
          <div className="lg:mx-auto lg:max-w-[850px] flex flex-col items-center space-y-8">
            <Vimeo videoID={"460981218"} />
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
