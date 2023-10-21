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
        <span>
          {`This was a project I worked on to get accepted to the Linkedin REACH engineering apprenticeship program! To learn how I build it, please refer to the detailed `}
          <a
            target="_blank"
            className="text-blue-500 hover:text-blue-700"
            href="https://github.com/allangelman/mastermind"
            rel="noreferrer"
          >
            readme
          </a>
          {` on my github.`}
        </span>
        <span className="text-left">
          {`To play, please visit this link:`}{" "}
          <a
            target="_blank"
            className="text-blue-500 hover:text-blue-700"
            href="https://mastermind-olive.vercel.app/"
            rel="noreferrer"
          >
            https://mastermind-olive.vercel.app/
          </a>
          <span>
            {`. From there you can play my implementation of the classic Mastermind game or my spin, Mastermind Race, where you can race others to see who can crack the code fastest!`}
          </span>
        </span>
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
