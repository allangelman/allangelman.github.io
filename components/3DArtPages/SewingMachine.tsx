/* eslint-disable @next/next/no-sync-scripts */
import { Vimeo } from "../Shared/Vimeo";
import { PageTemplate } from "../Shared/PageTemplate";

export const SewingMachine = () => {
  return (
    <>
      <PageTemplate
        title="Sewing Machine"
        tools={["Maya", "Substance Painter", "Zbrush", "Arnold"]}
        artstationLink="https://www.artstation.com/artwork/8e1gRn"
        vimeoLink="https://vimeo.com/460981218"
      >
        <>
          <Vimeo videoID={"460981218"} />
          <div className="space-y-4">
            <p>
              {`Modeled in Maya and Zbrush for creating displacement maps. Textured in Substance Painter and Photoshop.
              Procedurally shaded, lit, and rendered in Arnold.`}
            </p>
            <p>
              {`Modeled in Maya and Zbrush for creating displacement maps. Textured in Substance Painter and Photoshop.
              Procedurally shaded, lit, and rendered in Arnold.`}
            </p>
          </div>
        </>
      </PageTemplate>
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
