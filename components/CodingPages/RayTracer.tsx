import Image from "next/image";
import { CodingTemplate } from "../CodingTemplate";

export const RayTracer = () => {
  return (
    <CodingTemplate
      title="Ray Tracer"
      tools={["C++"]}
      githubLink="https://www.artstation.com/artwork/ea4WXJ"
    >
      <>
        <Image
          className="image" //why is this here?
          src={"/coding/mastermind/mastermindthumbnail.png"}
          loader={myLoader}
          alt={"mastermind"}
          width={850}
          height={450}
          objectFit="cover"
        />
        <Image
          className="image" //why is this here?
          src={"/coding/mastermind/mastermindthumbnail.png"}
          loader={myLoader}
          alt={"mastermind"}
          width={850}
          height={450}
          objectFit="cover"
        />
      </>
    </CodingTemplate>
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
