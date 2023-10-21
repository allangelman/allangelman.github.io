import Image from "next/image";
import { PageTemplate } from "../Shared/PageTemplate";

export const FeltLikeHome = () => {
  return (
    <PageTemplate title="Felt Like Home" tools={["Felt", "Thread"]}>
      <>
        <div>
          In Fall 2020, my brother Danny Gelman and I, were commisioned by
          Google (through Art_Works) to create a piece for their new office in
          Kendall Square, Cambridge, MA. We decided to create a 7 x 6 piece in
          homage to the Galaxy: Earth Sphere Fountain, a fountain we walked by
          numerous times during college at MIT. This was the second and most
          ambitious work entirely created out of felt. The process took many
          months of planning and execution.
        </div>
        <div>
          Here is a detail of one of the portraits I was responsible for. As you
          can see, it is made entirely of hand sewn pieces of felt.
        </div>
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
