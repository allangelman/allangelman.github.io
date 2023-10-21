import Artstation from "../icons/artstation";
import Github from "../icons/github";
import Vimeo from "../icons/vimeo";
import Linkedin from "../icons/linkedin";

export const Footer = () => {
  return (
    <footer className="items-center justify-center border-t-2 flex flex-col mt-16 py-4 space-y-2">
      <div className="flex break-all">allangelman4@gmail.com</div>

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
        {""}
        <a
          target="_blank"
          className="text-blue-500 hover:text-blue-700"
          href="https://github.com/allangelman/allangelman.github.io"
          rel="noreferrer"
        >
          Crafted
        </a>
        {" with pixels and code"}
      </div>
      <div> ©2023 Allan Gelman</div>
    </footer>
  );
};
