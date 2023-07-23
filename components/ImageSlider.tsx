import * as Slider from "@radix-ui/react-slider";
import Image from "next/image";
import { useState } from "react";
import cn from "classnames";

interface ImageLoaderProps {
  firstImagePath: string;
  secondImagePath: string;
  ratio: string;
}

export const ImageSlider = ({
  firstImagePath,
  secondImagePath,
  ratio,
}: ImageLoaderProps) => {
  const [sliderValue, setSliderValue] = useState<number>(0);
  return (
    <>
      <div className={cn(`group relative w-full h-full`, ratio)}>
        <div className="w-full h-full absolute">
          <Image
            src={firstImagePath}
            alt="final"
            width={850}
            height={450}
            style={{ objectFit: "cover" }}
            loader={myLoader}
          />
        </div>
        <div
          className="w-full h-full absolute"
          style={{ opacity: `${sliderValue}%` }}
        >
          <Image
            src={secondImagePath}
            alt="final"
            width={850}
            height={450}
            style={{ objectFit: "cover" }}
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
