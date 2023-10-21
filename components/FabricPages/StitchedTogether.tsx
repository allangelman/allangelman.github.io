import Image from "next/image";
import { PageTemplate } from "../Shared/PageTemplate";

export const StitchedTogether = () => {
  return (
    <PageTemplate
      title="Stitched Together"
      tools={["Felt", "Thread"]}
      globeLink="https://vimeo.com/531403562"
    >
      <div>
        Made in collaboration with Danny Gelman for the OpenMind::OpenArt
        project at MIT in Spring 2017. Responsible for 1st, 3rd, and 5th
        portrait (left to right, top to bottom)
      </div>
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
