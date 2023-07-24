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
            <Painting
              src={"/paintings/kaz.png"}
              alt={"max"}
              priority
              label={"Film study from Shadow and Bone (Painted in Photoshop)"}
            />
            <Painting
              src={"/paintings/inej.png"}
              alt={"inej"}
              label={"Film study from Shadow and Bone (Painted in Photoshop)"}
            />
            <Painting
              src={"/paintings/jesper.png"}
              alt={"jesper"}
              label={"Film study from Shadow and Bone (Painted in Photoshop)"}
            />
            <Painting
              src={"/paintings/sun.png"}
              alt={"sun"}
              label={"Film study from Sense8 (Painted in Photoshop)"}
            />
            <Painting
              src={"/paintings/claudia.png"}
              alt={"claudia"}
              label={
                "Film study from Interview with the Vampire (Painted in Photoshop)"
              }
            />
            <Painting
              src={"/paintings/push.png"}
              alt={"push"}
              label={"Film study from Push (Painted in Photoshop)"}
            />
            <Painting
              src={"/paintings/meilin.png"}
              alt={"meilin"}
              label={"Film study from Turning Red (Painted in Photoshop)"}
            />
          </div>
        </div>
        <div className="grid gap-4 grid-col-1 sm:grid-cols-2">
          <div>
            <Painting
              src={"/paintings/bentaylor.png"}
              alt={"bentaylor"}
              label={
                "Portraits of Ben Levi Ross and Taylor Trensch (Painted in Photoshop)"
              }
            />
            <Painting
              src={"/paintings/natasha.png"}
              alt={"natasha"}
              label={"Portrait of Denee Benton (Painted in Photoshop)"}
            />
            <Painting
              src={"/paintings/kalamax.png"}
              alt={"kalamax"}
              label={"Portraits from Sense8 (Painted with acrylic on paper)"}
            />
          </div>
          <div>
            <Painting
              src={"/paintings/L.png"}
              alt={"L"}
              label={"Portrait of a freind (Painted in Photoshop)"}
            />
            <Painting
              src={"/paintings/Pavement.jpg"}
              alt={"pavement"}
              label={"Photo study (Painted with oil paint on board)"}
            />
          </div>
        </div>
      </>
    </Layout>
  );
};

interface PainttingProps {
  src: string;
  alt: string;
  priority?: boolean;
  label: string;
}

export const Painting = ({ src, alt, priority, label }: PainttingProps) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div
          className={cn(
            "mt-4 hover:scale-[1.01] relative group transition duration-300",
            {
              "opacity-100 transition duration-3000": imageIsLoaded,
              "opacity-0": !imageIsLoaded,
            }
          )}
          style={{
            borderRadius: "8px",
            overflow: "hidden",
            transition: "0.3s",
          }}
        >
          <div className="w-full h-10 bottom-0 align-baseline absolute bg-transparent transition group-hover:bg-black/60 group-hover:text-white/80 text-transparent flex items-center pl-5">
            {label}
          </div>
          <div
            style={{
              transformOrigin: "center",
            }}
          >
            <Image
              src={src}
              priority={priority}
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
              className="image" //why is this here?
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
