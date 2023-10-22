/* eslint-disable @next/next/no-sync-scripts */
import Image from "next/image";
import { PageTemplate } from "./Shared/PageTemplate";
import cn from "classnames";
import { useState } from "react";

export const AboutContent = () => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  return (
    <>
      <PageTemplate
        title="Hi there, I'm Allan"
        tools={["allangelman4@gmail.com"]}
        githubLink="https://github.com/allangelman"
        artstationLink="https://www.artstation.com/allangelman"
        vimeoLink="https://vimeo.com/user94929753"
        linkedinLink="https://www.linkedin.com/in/allangelman/"
      >
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            <div
              className={cn(
                "max-w-[1/2] max-h-[1/2] justify-center items-center flex",
                {
                  "opacity-100 transition duration-3000": imageIsLoaded,
                  "opacity-0": !imageIsLoaded,
                }
              )}
              style={{
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Image
                src={"/about/me.png"}
                priority
                loader={myLoader}
                alt={"alt"}
                width={1000}
                height={1000}
                onLoad={() => {
                  setImageIsLoaded(true);
                }}
              />
            </div>
            <div className="">
              <div className="max-w-[1/2] flex flex-wrap flex-col space-y-4">
                <p>
                  {
                    " I am a software engineer at LinkedIn and a lifelong artist with passions for painting, AR/VR, 3D modeling, and web development."
                  }
                </p>
                <p>
                  <a
                    target="_blank"
                    className="text-slate-400 font-bold"
                    rel="noreferrer"
                  >
                    2016 - 2020
                  </a>
                  {
                    " I graduated from MIT with a degree in Humanities and Engineering. My major combined Comparative Media Studies and Computer Science, with a focus on Computer Graphics and storytelling."
                  }
                </p>
                <p>
                  <a
                    target="_blank"
                    className="text-slate-400 font-bold"
                    rel="noreferrer"
                  >
                    2020 - 2021
                  </a>
                  {
                    " I spent a year developing my 3D modeling skills through courses at the vocational online art school CGMA (Computer Graphics Master Academy)"
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[1/2] flex flex-wrap flex-col space-y-4">
            <p>
              <a
                target="_blank"
                className="text-slate-400 font-bold"
                rel="noreferrer"
              >
                2021 - 2023
              </a>
              {
                " I worked as a software engineer at Clay, a startup building a web application for 3D modeling collaboration. At Clay, I was able combine my artistic and technical passions while learning web development!"
              }
            </p>
            <p>
              <a
                target="_blank"
                className="text-slate-400 font-bold"
                rel="noreferrer"
              >
                2023 - Present
              </a>
              {
                " I am working as a software engineering apprentice at LinkedIn, diving deeper into my passion for backend engineering on the Configurations 'cfg2' team!"
              }
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
