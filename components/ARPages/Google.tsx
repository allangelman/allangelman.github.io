import Image from "next/image";
import { PageTemplate } from "../Shared/PageTemplate";

export const Google = () => {
  return (
    <PageTemplate
      title="AR Murals Commission"
      tools={["Photoshop", "Artivive"]}
    >
      <>
        <span className="text-left">
          {` After graduating, I had the oppurtunity to work on an AR commision project for Google with fellow MIT alumns Danny Gelman and Julia Rue. We created a 6' x 7' piece entirely created from felt, depicting a scene from Kendall Square in Cambridge, MA. Here is a gif of its accompanying animation.`}
        </span>
        <img
          className="image"
          src={"/AR/ar.gif"}
          alt="ar"
          width={850}
          height={450}
        />
      </>
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
