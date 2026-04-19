import Image from "next/image";
import { PageTemplate } from "../Shared/PageTemplate";
import { YouTube } from "../Shared/Youtube";

export const VRProject = () => {
  return (
    <PageTemplate
      title="Coral Reef VR Expereince"
      tools={["Python", "Maya", "Unity", "C#"]}
    >
      <>
        <span className="text-left">
          {` My final project for my VR and Immersive Media Production course was this VR experience to raise awareness for Global Warming, and its effects on coral reefs. `}
        </span>
        <span className="text-left">
          {` Over the semester, my teammates and I worked collaboratively on all aspects of the project, but also divided tasks. My role was Lead 3D Modeler, so I made tools in Maya using python scripting to make various corals. The tools I made generated coral fans, coral polyps, coral tables, and brain corals! `}
        </span>
        <span className="text-left">
          {` Another one of my contributions was making the final scene of our project. We wanted to drive the message home that our coral reefs are in danger, so we decided to make the phrase "Save Our Reefs" fade in slowly at the end of the experience in very large letters, to loom over the user, conveying the urgency of the matter. I created a script in C# in Unity to do this. `}
        </span>
        <YouTube videoID={"pkQ4XjiK1b8"} />
        <YouTube videoID={"6y-gjIY2j1Q"} />
        <YouTube videoID={"gD85ZvfrPQA"} />
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
