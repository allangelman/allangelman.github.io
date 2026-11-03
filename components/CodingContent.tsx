import { Layout } from "./Shared/Layout";
import { Grid } from "./Shared/Grid";
import { CodeBreaking } from "./CodingPages/CodeBreaking";
import { Thumbnail } from "./Shared/Thumbnail";
import { RayTracer } from "./CodingPages/RayTracer";
import { Lamp } from "./CodingPages/Lamp";
import { Mushroom } from "./CodingPages/Mushroom";
import { Gan } from "./CodingPages/Gan";
import { UMSurfaceProject } from "./CodingPages/UMSurfaceProject";
import { Portfolio } from "./CodingPages/Portfolio";

export const CodingContent = () => {
  return (
    <Layout>
      <Grid>
        <>
          <Thumbnail
            src={"/coding/mastermind/mastermindthumbnail2.png"}
            alt={"mastermind"}
            name={"Code Breaking Game"}
            tools={["TypeScript", "React", "PostgreSQL", "Next.js", "GraphQL"]}
          >
            <CodeBreaking />
          </Thumbnail>
          <Thumbnail
            src={"/coding/raytracer/raytracerthumbnail.png"}
            alt={"raytracer"}
            name={"Ray Tracer with OBJ Loading"}
            tools={["C++"]}
          >
            <RayTracer />
          </Thumbnail>
          <Thumbnail
            src={"/coding/ganxmlfixer/gan.png"}
            alt={"ganxmlfixer"}
            name={"GAN XML Fixer"}
            tools={["Python", "Tensorflow", "Colab"]}
          >
            <Gan />
          </Thumbnail>
          <Thumbnail
            src={"/coding/surface/surfacethumb.png"}
            alt={"umsurfaceproject"}
            name={
              "3D Visualization of Algebraic Surfaces (University of Miami)"
            }
            tools={["C++", "OpenGL", "CUDA"]}
          >
            <UMSurfaceProject />
          </Thumbnail>
          <Thumbnail
            src={"/coding/portfolio/portfolio.png"}
            alt={"portfolio"}
            name={"Portfolio"}
            tools={["TypeScript", "React", "Next.js"]}
          >
            <Portfolio />
          </Thumbnail>
          <Thumbnail
            src={"/coding/strawlamptool/lamp.png"}
            alt={"strawlamptool"}
            name={"Procedural Straw Lamp Tool"}
            tools={["Houdini", "VEX"]}
          >
            <Lamp />
          </Thumbnail>
          <Thumbnail
            src={"/coding/mushroomtool/mush.png"}
            alt={"mushroomtool"}
            name={"Procedural Mushroom Tool"}
            tools={["Python", "Maya"]}
          >
            <Mushroom />
          </Thumbnail>
        </>
      </Grid>
    </Layout>
  );
};
