import Image from "next/image";
import { PageTemplate } from "../Shared/PageTemplate";

export const Gan = () => {
  return (
    <PageTemplate
      title="Gan XML Fixer"
      tools={["Python", "Tensorflow", "CoLab"]}
      githubLink="https://github.com/artBoffin/GAN-XML-Fixer"
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
