import Image from "next/image";
import { Layout } from "../Layout";

export const HouseOfAChild = () => {
  return (
    <Layout>
      <div className="lg:mx-auto lg:max-w-[850px] flex flex-col items-center space-y-8">
        <iframe
          src="https://player.vimeo.com/video/535617212?h=2efc068be3&color=c9ff23"
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
        <Image
          src="/threeDArt/houseofachild/final.png"
          alt="final"
          width={850}
          height={450}
          objectFit="cover"
          loader={myLoader}
        />
        <iframe
          src="https://player.vimeo.com/video/496322257?h=b9b873041a"
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
        <span>
          {`I modeled the central house of this scene for my Production Modeling
          course from CGMA (Computer Graphics Master Academy), taught by Vidya
          Vinnakota. I was immediately drawn to the "House of a Child" concept
          art when I stumbled upon it, because I envisioned my childhood-self
          trying to build it. That, along with my nostalgia for Boston's often
          foggy sky, is what inspired the creation of this scene! Concept art by
          Lena Kroshilina. Modeled in Maya. Foliage in PaintEffects and MASH.
          Fog using Maya Fluid's FX. Textured in Substance Painter. Procedural
          shading, lighting, and rendering with Arnold.`}
        </span>
        <Image
          src="/threeDArt/houseofachild/closeup.png"
          alt="final"
          width={850}
          height={450}
          objectFit="cover"
          loader={myLoader}
        />
        <span>
          {`Here is a gif compilation of my test renders while I was working on this project!`}
        </span>
        <img
          src="/threeDArt/houseofachild/wip.gif"
          alt="final"
          width={650}
          height={450}
        />
      </div>
    </Layout>
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
