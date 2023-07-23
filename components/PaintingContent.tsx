import { Layout } from "./Layout";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";

import { useState } from "react";
import cn from "classnames";
import { Cross2Icon } from "@radix-ui/react-icons";

interface imageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

const myLoader = ({ src, width, quality }: imageLoaderProps): string => {
  return `https://allan-gelman.imgix.net/${src}?=${width}&q=${quality || 75}`;
};

export const PaintingContent = () => {
  return (
    <Layout>
      <>
        <div className="grid gap-4 grid-col-1 sm:grid-cols-1">
          <div>
            <Painting src={"/paintings/kaz.png"} alt={"max"} />
            <Painting src={"/paintings/inej.png"} alt={"inej"} />
            <Painting src={"/paintings/jesper.png"} alt={"jesper"} />
            <Painting src={"/paintings/sun.png"} alt={"sun"} />
            <Painting src={"/paintings/claudia.png"} alt={"claudia"} />
            <Painting src={"/paintings/push.png"} alt={"push"} />
            <Painting src={"/paintings/meilin.png"} alt={"meilin"} />
          </div>
        </div>
        <div className="grid gap-4 grid-col-1 sm:grid-cols-2">
          <div>
            <Painting src={"/paintings/bentaylor.png"} alt={"bentaylor"} />
            <Painting src={"/paintings/natasha.png"} alt={"natasha"} />
            <Painting src={"/paintings/kalamax.png"} alt={"kalamax"} />
          </div>
          <div>
            <Painting src={"/paintings/L.png"} alt={"L"} />
            <Painting src={"/paintings/Pavement.jpg"} alt={"pavement"} />
          </div>
        </div>
      </>
    </Layout>
  );
};

interface PainttingProps {
  src: string;
  alt: string;
}

export const Painting = ({ src, alt }: PainttingProps) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div
          className={cn("mt-4 hover:scale-[1.01] transition duration-300", {
            "opacity-100 transition duration-3000": imageIsLoaded,
            "opacity-0": !imageIsLoaded,
          })}
          style={{
            borderRadius: "8px",
            overflow: "hidden",
            transition: "0.3s",
          }}
        >
          <div
            className=""
            style={{
              transformOrigin: "center",
            }}
          >
            <Image
              src={src}
              loader={myLoader}
              alt={alt}
              width={1200}
              height={500}
              onLoad={() => {
                setImageIsLoaded(true);
              }}
            />
          </div>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-white/80">
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[93vw] h-[93vw] max-w-[93vw] max-h-[93vh] outline-none rounded-lg">
            <Image
              className="image"
              src={src}
              loader={myLoader}
              alt={alt}
              fill
              onLoad={() => {
                setImageIsLoaded(true);
              }}
              style={{ objectFit: "contain" }}
            />
          </Dialog.Content>
          <Dialog.Close asChild>
            <button
              className="text-black flex h-10 w-10 rounded-full absolute top-[10px] right-[10px] items-center  outline-none justify-center"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
