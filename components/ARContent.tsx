import { Layout } from "./Layout";
import { Grid } from "./Grid";
import { HouseOfAChild } from "./3DArtPages/HouseOfAChild";
import { AntiqueShop } from "./3DArtPages/AntiqueShop";
import { Thumbnail } from "./Thumbnail";

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
                alt={"borderline"}
                // href={"3DArt/HouseOfAChild"}
                name={"Borderline"}
                tools={"AR"}
              >
                <HouseOfAChild />
              </Thumbnail>
              <Thumbnail
                src={"/AR/google.png"}
                alt={"antiqueshop"}
                // href={"3DArt/AntiqueShop"}
                name={"Google comission"}
                tools={"AR"}
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
