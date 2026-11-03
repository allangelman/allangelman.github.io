import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

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
      </Head>
      <Component {...pageProps} />
    </>
  );
}
