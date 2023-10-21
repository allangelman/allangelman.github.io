/* eslint-disable @next/next/no-sync-scripts */
import { Layout } from "../Layout";
import { useState } from "react";
import { Vimeo } from "../Vimeo";
import { ThreeDArtTemplate } from "../ThreeDArtTemplate";

export const SewingMachine = () => {
  return (
    <>
      <ThreeDArtTemplate
        title="Sewing Machine"
        tools={["Maya", "Substance Painter", "Zbrush", "Arnold"]}
      >
        <>
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
        </>
      </ThreeDArtTemplate>
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
