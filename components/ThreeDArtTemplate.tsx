import * as Slider from "@radix-ui/react-slider";
import Image from "next/image";
import { ReactElement } from "react";
import Artstation from "./icons/artstation";
import Vimeo from "./icons/vimeo";

interface ThreeDArtTemplateProps {
  title: string;
  children: ReactElement;
  tools: string[];
  artstationLink: string;
  vimeoLink: string;
}

export const ThreeDArtTemplate = ({
  title,
  children,
  tools,
  artstationLink,
  vimeoLink,
}: ThreeDArtTemplateProps) => {
  return (
    <div className="lg:mx-auto lg:max-w-[850px] flex flex-col">
      <div className="text-3xl flex flex-col font-extralight bg-slate-100 w-full h-full items-center space-y-4 py-4 pl-5">
        <div>{title}</div>
        <div className="space-x-2 items-center flex">
          <>
            {tools.map((tool: string) => {
              return (
                <span
                  key={tool}
                  className="text-slate-800 text-xs rounded bg-slate-300/50 p-1"
                >
                  {tool}
                </span>
              );
            })}
          </>
        </div>
        <div className="flex flex-row space-x-2">
          <a
            className="text-slate-500  hover:text-slate-800"
            target="_blank"
            href={artstationLink}
            rel="noreferrer"
          >
            <Artstation />
          </a>
          <a
            className="text-slate-500  hover:text-slate-800"
            target="_blank"
            href={vimeoLink}
            rel="noreferrer"
          >
            <Vimeo />
          </a>
        </div>
      </div>
      <div className="p-8 space-y-8 items-center flex flex-col">{children}</div>
    </div>
  );
};
