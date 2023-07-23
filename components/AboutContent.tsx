import { Layout } from "./Layout";
import Image from "next/image";

import { useState } from "react";

interface imageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

const myLoader = ({ src, width, quality }: imageLoaderProps): string => {
  return `https://allan-gelman.imgix.net/${src}?=${width}&q=${quality || 75}`;
};

export const AboutContent = () => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  return (
    <Layout>
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div className="max-w-[1/2] max-h-[1/2] justify-center items-center flex">
            <Image
              src={"/about/me.jpg"}
              loader={myLoader}
              alt={"alt"}
              width={500}
              height={450}
              onLoad={() => {
                setImageIsLoaded(true);
              }}
            />
          </div>
          <div className="">
            <div className="max-w-[1/2] flex flex-wrap flex-col space-y-4">
              <h1 className="text-4xl font-bold">Hi there!</h1>
              <p>
                My name is Allan Gelman. I am an software engineer and artist
                with passions for web development, AR/VR, and 3D modeling.
              </p>
              <p>
                I graduated from MIT in 2020, where I completed an
                interdisciplinary major called Humanities and Engineering
                (combining Comparative Media Studies and Computer Science).
              </p>
              <p>
                Afterwards, I spent a year developing my 3D modeling skills
                through courses at the vocational online art school CGMA
                (Computer Graphics Master Academy), which lead me to working as
                a software engineer at Clay, a startup building a web
                application for 3D modeling collaboration. At Clay, I was able
                combine my artistic and technical passions while learning web
                development!
              </p>
              <p>
                Now, I am working as a software engineer apprentice at LinkedIn,
                diving deeper into my passion for backend engineering on the
                Infrastructure as Code team!
              </p>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};
