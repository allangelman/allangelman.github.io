import { ReactElement } from "react";
import Artstation from "../icons/artstation";
import Github from "../icons/github";
import Globe from "../icons/globe";
import Vimeo from "../icons/vimeo";

interface PageTemplateProps {
  title: string;
  children: ReactElement;
  tools: string[];
  artstationLink?: string;
  vimeoLink?: string;
  githubLink?: string;
  globeLink?: string;
}

export const PageTemplate = ({
  title,
  children,
  tools,
  artstationLink,
  vimeoLink,
  githubLink,
  globeLink,
}: PageTemplateProps) => {
  return (
    <div>
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
          {artstationLink && (
            <a
              className="text-slate-500  hover:text-slate-800"
              target="_blank"
              href={artstationLink}
              rel="noreferrer"
            >
              <Artstation />
            </a>
          )}
          {vimeoLink && (
            <a
              className="text-slate-500  hover:text-slate-800"
              target="_blank"
              href={vimeoLink}
              rel="noreferrer"
            >
              <Vimeo />
            </a>
          )}
          {githubLink && (
            <a
              className="text-slate-500  hover:text-slate-800"
              target="_blank"
              href={githubLink}
              rel="noreferrer"
            >
              <Github />
            </a>
          )}
          {globeLink && (
            <a
              className="text-slate-500  hover:text-slate-800"
              target="_blank"
              href={globeLink}
              rel="noreferrer"
            >
              <Globe />
            </a>
          )}
        </div>
      </div>
      <div className="p-8 space-y-8 items-center flex flex-col">{children}</div>
    </div>
  );
};
