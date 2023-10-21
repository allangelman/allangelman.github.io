import { Layout } from "./Shared/Layout";
import { Grid } from "./Shared/Grid";

export const VRARContent = () => {
  return (
    <Layout>
      <Grid>
        <>
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </>
      </Grid>
    </Layout>
  );
};

interface ThumbnailProps {}
export const Thumbnail = ({}: ThumbnailProps) => {
  return <div className="aspect-5/3 rounded-md bg-pink-500" />;
};
