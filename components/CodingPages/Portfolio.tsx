import Image from "next/image";
import { PageTemplate } from "../Shared/PageTemplate";

export const Portfolio = () => {
  return (
    <PageTemplate
      title="Portfolio"
      tools={["Python", "Tensorflow", "CoLab"]}
      githubLink="https://github.com/allangelman/allangelman.github.io"
    >
      <>
        <span>
          {`I created this portfolio site using React, Typescript, and the Next.js framework, and it is hosted on githube pages! Have fun poking around my site and feel free to check out the code in the `}
          <a
            target="_blank"
            className="text-blue-500 hover:text-blue-700"
            href="https://github.com/allangelman/allangelman.github.io"
            rel="noreferrer"
          >
            repo
          </a>
          {` on my github.`}
        </span>
        <Image
          className="image"
          src={"/coding/portfolio/portfolio.png"}
          loader={myLoader}
          alt={"portfolio"}
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
