import Image from "next/image";
import { PageTemplate } from "../Shared/PageTemplate";

export const Lamp = () => {
  return (
    <PageTemplate title="Procedural Straw Lamp Tool" tools={["Houdini", "VEX"]}>
      <></>
    </PageTemplate>
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
