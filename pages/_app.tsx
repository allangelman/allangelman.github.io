import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

// Link-preview image (Slack, LinkedIn, iMessage): portfolio screenshot cropped to 1200x630.
const OG_IMAGE =
  "https://allan-gelman.imgix.net/coding/portfolio/portfolio.png?w=1200&h=630&fit=crop";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Allan Gelman Portfolio</title>
        <meta
          name="description"
          content="Allan Gelman is a software engineer and artist. Projects in web development, computer graphics, 3D art, AR/VR, and painting."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://allangelman.github.io/" />
        <meta property="og:title" content="Allan Gelman Portfolio" />
        <meta
          property="og:description"
          content="Software engineer and artist. Projects in web development, computer graphics, 3D art, AR/VR, and painting."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
