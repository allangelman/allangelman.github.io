/* eslint-disable @next/next/no-sync-scripts */
import { Layout } from "../Layout";
import { ImageSlider } from "../ImageSlider";
import { Vimeo } from "../Vimeo";
import { ThreeDArtTemplate } from "../ThreeDArtTemplate";

export const CalliouJourney = () => {
  return (
    <>
      <ThreeDArtTemplate
        title="Calliou Journey"
        tools={["Maya", "Substance Painter", "Arnold"]}
      >
        <>
          <ImageSlider
            firstImagePath="/threeDArt/callioujourney/callioujourney.png"
            secondImagePath="/threeDArt/callioujourney/callioujourney_ao.png"
            ratio="aspect-16/9"
          />
          <span>
            {`This piece is based on a beautiful concept art made by Suheb Zako. I loved the dramatic feeling of the concept,
              and was very excited to capture that in my 3D rendition.`}
          </span>
          <span>
            {`Modeled in Maya. Textured in Substance Painter. Hair/Fur in XGen. Lit and rendered in Arnold.`}
          </span>
          <Vimeo videoID={"534557526"} />
          <span>
            {`Here is a gif compilation of my test renders while I was working on this project!`}
          </span>
          <img
            src="/threeDArt/callioujourney/1_6.gif"
            alt="final"
            width={650}
            height={450}
          />
        </>
      </ThreeDArtTemplate>
    </>
  );
};
