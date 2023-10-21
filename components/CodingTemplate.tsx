import { ReactElement } from "react";
import Artstation from "./icons/artstation";

interface CodingTemplateProps {
  title: string;
  children: ReactElement;
  tools: string[];
  githubLink: string;
}

export const CodingTemplate = ({
  title,
  children,
  tools,
  githubLink,
}: CodingTemplateProps) => {
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
            href={githubLink}
            rel="noreferrer"
          >
            <Artstation />
          </a>
        </div>
      </div>
      <div className="p-8 space-y-8 items-center flex flex-col">{children}</div>
    </div>
  );
};
