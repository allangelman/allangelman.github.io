import * as Slider from "@radix-ui/react-slider";
import Image from "next/image";
import { useState } from "react";
import cn from "classnames";

interface VimeoProps {
  videoID: string;
}

export const Vimeo = ({ videoID }: VimeoProps) => {
  return (
    <>
      <div
        className="w-full h-full"
        style={{
          padding: "56.25% 0 0 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* &color=ff0179 */}
        <iframe
          src={`https://player.vimeo.com/video/${videoID}?autoplay=1&loop=1&autopause=0`}
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
    </>
  );
};
