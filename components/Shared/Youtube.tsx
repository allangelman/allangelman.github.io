import * as Slider from "@radix-ui/react-slider";
import Image from "next/image";
import { useState } from "react";
import cn from "classnames";

interface YouTubeProps {
  videoID: string;
}

export const YouTube = ({ videoID }: YouTubeProps) => {
  return (
    <div
      className="w-full h-full"
      style={{
        padding: "56.25% 0 0 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoID}`}
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
  );
};
