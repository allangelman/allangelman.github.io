import Artstation from "../icons/artstation";
import Github from "../icons/github";
import Vimeo from "../icons/vimeo";
import Linkedin from "../icons/linkedin";

export const Footer = () => {
  return (
    <footer className="items-center justify-center border-t-2 flex flex-col mt-16 py-4 space-y-2">
      <div className="space-x-2 items-center flex">
        <span className="text-slate-800 text-xs rounded bg-slate-300/50 p-1">
          {"allangelman4@gmail.com"}
        </span>
      </div>
      <div className="flex flex-row space-x-2">
        <a
          className="text-slate-500  hover:text-slate-800"
          target="_blank"
          href="https://github.com/allangelman"
          rel="noreferrer"
        >
          <Github />
        </a>
        <a
          className="text-slate-500  hover:text-slate-800"
          target="_blank"
          href="https://www.linkedin.com/in/allangelman/"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
        <a
          className="text-slate-500  hover:text-slate-800"
          target="_blank"
          href="https://www.artstation.com/allangelman"
          rel="noreferrer"
        >
          <Artstation />
        </a>
        <a
          className="text-slate-500  hover:text-slate-800"
          target="_blank"
          href="https://vimeo.com/user94929753"
          rel="noreferrer"
        >
          <Vimeo />
        </a>
      </div>
      <div>
        {"🎨 this site was"}
        <a
          target="_blank"
          className="text-blue-500 hover:text-blue-700"
          href="https://github.com/allangelman/allangelman.github.io"
          rel="noreferrer"
        >
          {" crafted"}
        </a>
        {" with pixels and code 🤖"}
      </div>
      <div> ©2025 Allan Gelman</div>
    </footer>
  );
};
