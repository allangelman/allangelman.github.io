import Image from "next/image";
import { PageTemplate } from "../Shared/PageTemplate";
import { YouTube } from "../Shared/Youtube";

export const UMSurfaceProject = () => {
  return (
    <PageTemplate
      title="3D Visualization of Algebraic Surfaces (University of Miami)"
      tools={["C++", "OpenGL", "CUDA"]}
    >
      <>
        <span>
          {`Continued development on CPU and GPU approaches for a 3D software that visualizes intersections of algebraic surfaces, coding in C++, OpenGL, and CUDA`}
        </span>
        <span>
          {`Worked on triangulation of surfaces, refactored code to use MVP transformations, added functionality for rotation, scaling, and translation, implemented specular/ambient lighting in vertex/fragment shaders, and worked on "re-gridding" algorithm to display the surfaces with more precision for the CPU approach. Worked on implementation of Descartes rule of Signs for the GPU approach, using CUDA`}
        </span>
        <span>
          {`Presented poster comparing the CPU and GPU approaches at the Summer Undergraduate Research Symposium`}
        </span>
        <YouTube videoID={"K56ECncwFSQ"} />
        <YouTube videoID={"srq94t_JbNc"} />
        <YouTube videoID={"l9jEQMq44mQ"} />
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
