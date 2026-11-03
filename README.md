# allangelman.github.io

My personal portfolio: software projects, 3D art, AR/VR work, and digital paintings.

**Live site:** https://allangelman.github.io

## Stack

- [Next.js](https://nextjs.org/) (static export) + React + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Radix UI](https://www.radix-ui.com/) primitives for accessible dialogs and sliders
- Images are served from [imgix](https://imgix.com/), which resizes each image to the
  rendered width and serves AVIF/WebP (see `components/Shared/imgixLoader.ts`)
- Deployed to GitHub Pages by GitHub Actions on every push to `master`

## Structure

```
pages/              one route per section (Coding, ThreeDArt, AR, Painting)
components/
  Shared/           Layout, Header, Footer, Thumbnail (card + project dialog), PageTemplate
  CodingPages/      write-ups for each coding project
  3DArtPages/       write-ups for each 3D art project
  ARPages/          write-ups for each AR/VR project
```

Each section is a grid of `Thumbnail` cards; clicking one opens a Radix dialog
with that project's page.

## Running locally

Requires Node 18 or 20.

```sh
npm ci
npm run dev        # http://localhost:3000
```

To build the same static site that is deployed:

```sh
npm run build && npm run export   # output in ./out
```
