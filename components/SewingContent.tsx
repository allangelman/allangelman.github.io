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

export const SewingContent = () => {
  return (
    <Layout>
      <>
        <div className="grid gap-4 grid-col-1 sm:grid-cols-1">
          <div>
            <Sewing
              src={"/sewing/google.png"}
              secondSrc={"/sewing/scale.jpg"}
              alt={"google"}
              title={"Felt like Home"}
              body={
                "In Fall 2020, my brother Danny Gelman and I, were commisioned by Google (through Art_Works) to create a piece for their new office in Kendall Square, Cambridge, MA. We decided to create a 7' x 6' piece in homage to the Galaxy: Earth Sphere Fountain, a fountain we walked by numerous times during college at MIT. This was the second and most ambitious work entirely created out of felt. The process took many months of planning and execution."
              }
            />
            <Sewing
              src={"/sewing/full.jpg"}
              alt={"full"}
              title={"Stitched Together"}
              body={
                "Made in collaboration with Danny Gelman for the OpenMind::OpenArt project at MIT in Spring 2017. Responsible for 1st, 3rd, and 5th portrait (left to right, top to bottom)"
              }
            />
            <Sewing
              src={"/sewing/detail.jpg"}
              alt={"detail"}
              title={"Stitched Together (detail)"}
              body={
                "Here is a detail of one of the portraits I was responsible for. As you can see, it is made entirely of hand sewn pieces of felt."
              }
            />
          </div>
        </div>
      </>
    </Layout>
  );
};

interface SewingProps {
  src: string;
  secondSrc?: string;
  alt: string;
  title: string;
  body: string;
}

export const Sewing = ({ src, secondSrc, alt, title, body }: SewingProps) => {
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
        <Dialog.Overlay className="fixed inset-0 bg-white/90">
          <Dialog.Content className="fixed top-1/2 left-1/2 transform flex -translate-x-1/2 -translate-y-1/2 w-[93vw] h-[93vw] max-w-[93vw] max-h-[93vh] outline-none overflow-y-scroll">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <div className="max-w-[1/2] max-h-[1/2] justify-center items-center flex">
                <Image
                  src={secondSrc ? secondSrc : src}
                  loader={myLoader}
                  alt={alt}
                  width={500}
                  height={450}
                  onLoad={() => {
                    setImageIsLoaded(true);
                  }}
                />
              </div>
              <div className="">
                <div className="max-w-[1/2] flex flex-wrap flex-col space-y-4">
                  <h1 className="text-4xl font-bold">{title}</h1>
                  <p>{body}</p>
                </div>
              </div>
            </div>
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
