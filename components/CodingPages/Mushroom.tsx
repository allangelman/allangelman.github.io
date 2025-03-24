import Image from "next/image";
import { PageTemplate } from "../Shared/PageTemplate";

export const Mushroom = () => {
  return (
    <PageTemplate
      title="Procedural Mushroom Tool"
      tools={["Python", "Maya"]}
      githubLink="https://github.com/allangelman/Mushroom-Generator"
    >
      <>
        <span>
          {`I created a tool that procedurally generates mushrooms using python scripting in Maya. The user can adjust the height and radius of the mushroom stem, the radius and compression of the mushroom cap. The user can also adjust the subdivisions of both the cap and stem, and the mushroom will remain quaded. Code from my Quaded Sphere tool was used in this tool.`}
        </span>
        <span>
          {`Please refer to the `}
          <a
            target="_blank"
            className="text-blue-500 hover:text-blue-700"
            href="https://github.com/artBoffin/GAN-XML-Fixer"
            rel="noreferrer"
          >
            repo
          </a>
          {` on my github for code.`}
        </span>
        <Image
          className="image"
          src={"/coding/mushroomtool/mushroom.gif"}
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
