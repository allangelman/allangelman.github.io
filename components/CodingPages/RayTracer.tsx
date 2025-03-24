import Image from "next/image";
import { PageTemplate } from "../Shared/PageTemplate";

export const RayTracer = () => {
  return (
    <PageTemplate
      title="Ray Tracer"
      tools={["C++"]}
      githubLink="https://github.com/allangelman/ray-tracer"
    >
      <>
        <span>
          {`For this personal project, I decided to reference the `}
          <a
            target="_blank"
            className="text-blue-500 hover:text-blue-700"
            href="https://raytracing.github.io/"
            rel="noreferrer"
          >
            Ray Tracing in One Weekend series
          </a>
          {` to create my own ray tracer! I heavily referenced the first book, Ray Tracing in One Weekend, partially referenced the second book Ray Tracing: The Next Week, and then added my own extensions for OBJ mesh loading. Please refer to the detailed `}
          <a
            target="_blank"
            className="text-blue-500 hover:text-blue-700"
            href="https://github.com/allangelman/ray-tracer"
            rel="noreferrer"
          >
            readme
          </a>
          {` on my github for implementation details.`}
        </span>
        <Image
          className="image"
          src={"/coding/raytracer/raytracerthumbnail.png"}
          loader={myLoader}
          alt={"raytracer"}
          width={850}
          height={450}
          objectFit="cover"
        />
        <Image
          className="image"
          src={"/coding/raytracer/bunny.png"}
          loader={myLoader}
          alt={"raytracer"}
          width={850}
          height={450}
          objectFit="cover"
        />
        <Image
          className="image"
          src={"/coding/raytracer/samovar.png"}
          loader={myLoader}
          alt={"raytracer"}
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
