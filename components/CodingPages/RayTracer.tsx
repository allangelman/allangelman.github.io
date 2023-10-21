import Image from "next/image";
import { PageTemplate } from "../Shared/PageTemplate";

export const RayTracer = () => {
  return (
    <PageTemplate
      title="Ray Tracer"
      tools={["C++"]}
      githubLink="https://github.com/allangelman/ray-tracer"
    >
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
