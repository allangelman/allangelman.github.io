import { Layout } from "./Shared/Layout";
import { Grid } from "./Shared/Grid";
import { HouseOfAChild } from "./3DArtPages/HouseOfAChild";
import { AntiqueShop } from "./3DArtPages/AntiqueShop";
import { SewingMachine } from "./3DArtPages/SewingMachine";
import { LakeVillage } from "./3DArtPages/LakeVillage";
import { FairyHouse } from "./3DArtPages/FairyHouse";
import { SnowQueenKitchen } from "./3DArtPages/SnowQueenKitchen";
import { CalliouJourney } from "./3DArtPages/CalliouJourney";
import { Hope } from "./3DArtPages/Hope";
import { Thumbnail } from "./Shared/Thumbnail";

export const ThreeDContent = () => {
  return (
    <>
      <Layout>
        <div className="space-y-4">
          <Grid>
            <>
              <Thumbnail
                src={"/threeDArt/houseofachild/sidebyside.png"}
                alt={"houseofachild"}
                name={"House of a Child"}
                tools={["Maya", "Substance Painter", "Arnold"]}
              >
                <HouseOfAChild />
              </Thumbnail>
              <Thumbnail
                src={"/threeDArt/antiqueshop/TheAntiqueShopThumbnail.png"}
                alt={"antiqueshop"}
                name={"The Antique Shop"}
                tools={["Maya", "Substance Painter", "Houdini", "Arnold"]}
              >
                <AntiqueShop />
              </Thumbnail>
              <Thumbnail
                src={"/threeDArt/sewingmachine/sewingmachinethumb.png"}
                alt={"sewingmachine"}
                name={"Vintage Sewing Machine"}
                tools={["Maya", "Substance Painter", "Zbrush", "Arnold"]}
              >
                <SewingMachine />
              </Thumbnail>
              <Thumbnail
                src={"/threeDArt/lakevillage/ao.jpg"}
                alt={"lakevillage"}
                name={"Lake Village"}
                tools={["Maya", "Houdini", "Arnold"]}
              >
                <LakeVillage />
              </Thumbnail>
              <Thumbnail
                src={"/threeDArt/fairyhouse/thumbnail.png"}
                alt={"fairyhouse"}
                name={"Fairy House"}
                tools={["Maya", "Arnold"]}
              >
                <FairyHouse />
              </Thumbnail>
              <Thumbnail
                src={"/threeDArt/snowqueenkitchen/ao.png"}
                alt={"snowqueenkitchen"}
                name={"Snow Queen Kitchen"}
                tools={["Maya", "Arnold"]}
              >
                <SnowQueenKitchen />
              </Thumbnail>
              <Thumbnail
                src={"/threeDArt/callioujourney/thumbnail.jpg"}
                alt={"callioujourney"}
                name={"Calliou's Journey"}
                tools={["Maya", "Substance Painter", "Arnold"]}
              >
                <CalliouJourney />
              </Thumbnail>
              <Thumbnail
                src={"/threeDArt/hope/thumbnail.png"}
                alt={"hope"}
                name={"Hope"}
                tools={["Maya", "Substance Painter", "Arnold"]}
              >
                <Hope />
              </Thumbnail>
            </>
          </Grid>
        </div>
      </Layout>
    </>
  );
};
