import { Layout } from "./Shared/Layout";
import { Grid } from "./Shared/Grid";
import { Thumbnail } from "./Shared/Thumbnail";
import { Borderline } from "./ARPages/Borderline";
import { Google } from "./ARPages/Google";
import { VRProject } from "./ARPages/VRProject";

export const ARContent = () => {
  return (
    <>
      <Layout>
        <div className="space-y-4">
          <Grid>
            <>
              <Thumbnail
                src={"/AR/borderline.png"}
                alt={"The Borderline @ MIT"}
                name={"The Borderline @ MIT"}
                tools={[
                  "Photoshop",
                  "Adobe Animate",
                  "Unity",
                  "Vuforia",
                  "Artivive",
                ]}
              >
                <Borderline />
              </Thumbnail>
              <Thumbnail
                src={"/AR/google.png"}
                alt={"AR Murals Google Comission"}
                name={"AR Murals Google Comission"}
                tools={["Photoshop", "Artivive"]}
              >
                <Google />
              </Thumbnail>
              <Thumbnail
                src={"/AR/google.png"}
                alt={"Coral Reef VR Project"}
                name={"Coral Reef VR Expereince"}
                tools={["Python", "Maya", "Unity", "C#"]}
              >
                <VRProject />
              </Thumbnail>
            </>
          </Grid>
        </div>
      </Layout>
    </>
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
