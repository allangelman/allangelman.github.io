import Image from "next/image";
import { PageTemplate } from "../Shared/PageTemplate";
import { YouTube } from "../Shared/Youtube";

export const Borderline = () => {
  return (
    <PageTemplate
      title="The Borderline @ MIT"
      tools={["Photoshop", "Adobe Animate", "Unity", "Vuforia", "Artivive"]}
      globeLink="http://borderline.mit.edu/"
    >
      <>
        <span className="text-left">
          {` The Borderline is a student organization at MIT started as a mural project, where students painted and AR animated murals in a 200 foot stretch of one of the underground MIT tunnels. Since then, The Borderline has expanded into a group of artists and technologists that create various public art and immersive experiences with and for the community.`}
        </span>
        <span className="text-left">
          {` After my first semester of involvement, I joined the executive team as Co-Animation/Augmented Reality Chair! This role involved organizing for new animations to be added to the tunnels every semester, communicating with our student animators, and holding Animation Office Hours to teach and help fellow students how to make their own AR animations! You can see me featured in this video.`}
        </span>
        <YouTube videoID={"yA6sr7_x6hQ"} />
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
