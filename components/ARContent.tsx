import { Layout } from "./Shared/Layout";
import { Grid } from "./Shared/Grid";
import { HouseOfAChild } from "./3DArtPages/HouseOfAChild";
import { AntiqueShop } from "./3DArtPages/AntiqueShop";
import { Thumbnail } from "./Shared/Thumbnail";

export const ARContent = () => {
  return (
    <>
      <Layout>
        <div className="space-y-4">
          {/* <Vimeo videoID={"534692300"} /> */}
          <Grid>
            <>
              <Thumbnail
                src={"/AR/borderline.png"}
                alt={"The Borderline @ MIT"}
                // href={"3DArt/HouseOfAChild"}
                name={"The Borderline @ MIT"}
                tools={[
                  "Photoshop",
                  "Adobe Animate",
                  "Unity",
                  "Vuforia",
                  "Artivive",
                ]}
              >
                <HouseOfAChild />
              </Thumbnail>
              <Thumbnail
                src={"/AR/google.png"}
                alt={"AR Murals Google Comission"}
                // href={"3DArt/AntiqueShop"}
                name={"AR Murals Google Comission"}
                tools={["Photoshop", "Artivive"]}
              >
                <AntiqueShop />
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
