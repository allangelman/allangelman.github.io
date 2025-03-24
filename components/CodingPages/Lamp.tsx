import Image from "next/image";
import { PageTemplate } from "../Shared/PageTemplate";
import { Vimeo } from "../Shared/Vimeo";

export const Lamp = () => {
  return (
    <PageTemplate title="Procedural Straw Lamp Tool" tools={["Houdini", "VEX"]}>
      <>
        <span>
          {`After taking the CGMA course Procedural Modeling for Production in Houdini,
            taught by Sean McEwan, I created my own procedural Houdini tool using the VEX expression language to create straw lampshades.`}
        </span>
        <span>
          {`I then created 3D render of an `}
          <a
            target="_blank"
            className="text-blue-500 hover:text-blue-700"
            href="https://allangelman.github.io/ThreeDArt"
            rel="noreferrer"
          >
            Antique Shop
          </a>
          {` to give my lamps a home, which can be seen in the 3D art section of this website!`}
        </span>
        <Vimeo videoID={"492857587"} />
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
