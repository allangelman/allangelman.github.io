import Image from "next/image";
import { PageTemplate } from "../Shared/PageTemplate";

export const Gan = () => {
  return (
    <PageTemplate
      title="Gan XML Fixer"
      tools={["Python", "Tensorflow", "CoLab"]}
      githubLink="https://github.com/artBoffin/GAN-XML-Fixer"
    >
      <>
        <span className="text-left">
          {`This was a project I worked on during an internship at `}
          <a
            target="_blank"
            className="text-blue-500 hover:text-blue-700"
            href="https://stochasticlabs.org/"
            rel="noreferrer"
          >
            Stochastic Labs
          </a>
          {`. Please refer to the detailed `}
          <a
            target="_blank"
            className="text-blue-500 hover:text-blue-700"
            href="https://github.com/artBoffin/GAN-XML-Fixer"
            rel="noreferrer"
          >
            readme
          </a>
          {` on my github for implementation details.`}
        </span>
        <span className="text-left">
          {` This tool converts a txt file containing text generated by a neural network trained on Scalable Vector Graphics (svg files) into two directories, one containing the valid svg files produced, and one containing the invalid svg files produced. This tool's key feature is that it attempts to correct every invalid file, thereby producing more than 150% of the original number of valid files!`}
        </span>
        <Image
          className="image"
          src={"/coding/ganxmlfixer/gan1.png"}
          loader={myLoader}
          alt={"gan"}
          width={850}
          height={450}
          objectFit="cover"
        />
        <Image
          className="image"
          src={"/coding/ganxmlfixer/gan2.png"}
          loader={myLoader}
          alt={"gan"}
          width={850}
          height={450}
          objectFit="cover"
        />
        <Image
          className="image"
          src={"/coding/ganxmlfixer/gan.png"}
          loader={myLoader}
          alt={"gan"}
          width={850}
          height={450}
          objectFit="cover"
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
