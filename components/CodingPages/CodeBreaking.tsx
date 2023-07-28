import Image from "next/image";

export const CodeBreaking = () => {
  return (
    <div className=" flex-col flex items-center">
      <div className="text-3xl items-center flex">Code Breaking Game</div>
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
    </div>
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
