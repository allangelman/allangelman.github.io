import * as Slider from "@radix-ui/react-slider";
import Image from "next/image";
import { ReactElement } from "react";

interface ThreeDArtTemplateProps {
  title: string;
  children: ReactElement;
  tools: string[];
}

export const ThreeDArtTemplate = ({
  title,
  children,
  tools,
}: ThreeDArtTemplateProps) => {
  return (
    <div className="lg:mx-auto lg:max-w-[850px] flex flex-col">
      <div className="text-3xl flex flex-col font-extralight bg-slate-100 w-full h-full items-center py-4 pl-5">
        {title}
        <div className="space-x-2">
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
        <span>
          <Image
            src="/artstation.svg"
            alt="artstation"
            width={72}
            height={16}
          />
        </span>
      </div>
      <div className="p-8 space-y-8 items-center flex flex-col">{children}</div>
    </div>
  );
};
