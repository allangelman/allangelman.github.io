import Image from "next/image";
import { PageTemplate } from "../Shared/PageTemplate";

export const CodeBreaking = () => {
  return (
    <PageTemplate
      title="Code Breaking Game"
      tools={[
        "TypeScript",
        "React",
        "Tailwind CSS",
        "PostgreSQL",
        "Next.js",
        "NestJS",
        "GraphQL",
      ]}
      githubLink="https://github.com/allangelman/mastermind"
    >
      <>
        <Image
          className="image" //why is this here?
          src={"/coding/mastermind/mastermindthumbnail2.png"}
          loader={myLoader}
          alt={"mastermind"}
          width={850}
          height={450}
          objectFit="cover"
        />
        <Image
          className="image" //why is this here?
          src={"/coding/mastermind/mastermindthumbnail2.png"}
          loader={myLoader}
          alt={"mastermind"}
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
