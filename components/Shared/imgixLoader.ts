import type { ImageLoaderProps } from "next/image";

// Images live in the imgix source bucket; imgix resizes to `w` and picks
// the best format (AVIF/WebP) the browser supports.
export const imgixLoader = ({ src, width, quality }: ImageLoaderProps) =>
  `https://allan-gelman.imgix.net/${src}?w=${width}&auto=format&q=${
    quality || 75
  }`;
