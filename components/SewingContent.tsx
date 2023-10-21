import { Layout } from "./Shared/Layout";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";

import { useState } from "react";
import cn from "classnames";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Thumbnail } from "./Shared/Thumbnail";
import { Grid } from "./Shared/Grid";

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
      <Grid>
        <>
          <Thumbnail
            src={"/sewing/google_thumbnail.png"}
            alt={"google"}
            name={"Felt like Home"}
            tools={["Felt", "Thread"]}
          >
            <div>
              In Fall 2020, my brother Danny Gelman and I, were commisioned by
              Google (through Art_Works) to create a piece for their new office
              in Kendall Square, Cambridge, MA. We decided to create a 7 x 6
              piece in homage to the Galaxy: Earth Sphere Fountain, a fountain
              we walked by numerous times during college at MIT. This was the
              second and most ambitious work entirely created out of felt. The
              process took many months of planning and execution.
            </div>
          </Thumbnail>
          <Thumbnail
            src={"/sewing/full_thumbnail.jpg"}
            alt={"full"}
            name={"Stitched Together"}
            tools={["Felt", "Thread"]}
          >
            <div>
              Made in collaboration with Danny Gelman for the OpenMind::OpenArt
              project at MIT in Spring 2017. Responsible for 1st, 3rd, and 5th
              portrait (left to right, top to bottom)
            </div>
          </Thumbnail>

          <Thumbnail
            src={"/sewing/detail.jpg"}
            alt={"detail"}
            name={"Stitched Together (detail)"}
            tools={["Felt", "Thread"]}
          >
            <div>
              Here is a detail of one of the portraits I was responsible for. As
              you can see, it is made entirely of hand sewn pieces of felt.
            </div>
          </Thumbnail>
        </>
      </Grid>
    </Layout>
  );
};

interface SewingProps {
  src: string;
  secondSrc?: string;
  alt: string;
  title: string;
  body: string;
  priority?: boolean;
}

export const Sewing = ({
  src,
  secondSrc,
  alt,
  title,
  body,
  priority,
}: SewingProps) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div
          className={cn("mt-4", {
            "opacity-100 ": imageIsLoaded,
            "opacity-0": !imageIsLoaded,
          })}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            <div
              className="max-w-[1/2] max-h-[1/2] justify-center items-center flex hover:scale-[1.01] transition duration-300"
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                transition: "0.3s",
              }}
            >
              <Image
                src={src}
                loader={myLoader}
                alt={alt}
                width={800}
                height={450}
                onLoad={() => {
                  setImageIsLoaded(true);
                }}
              />
            </div>
            <div className="border-2 border-slate-500 border-dashed rounded p-4">
              <div className="max-w-[1/2] flex flex-wrap flex-col space-y-4">
                <h1 className="text-4xl font-bold">{title}</h1>
                <p>{body}</p>
              </div>
            </div>
          </div>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-white/90">
          <Dialog.Content className="fixed top-1/2 left-1/2 transform flex -translate-x-1/2 -translate-y-1/2 w-[93vw] h-[93vw] max-w-[93vw] max-h-[93vh] outline-none overflow-y-scroll">
            <Image
              src={secondSrc ? secondSrc : src}
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
