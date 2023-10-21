import Image from "next/image";
import { PageTemplate } from "../Shared/PageTemplate";

export const Mushroom = () => {
  return (
    <PageTemplate
      title="Procedural Mushroom Tool"
      tools={["Python", "Maya"]}
      githubLink="https://github.com/allangelman/Mushroom-Generator"
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
