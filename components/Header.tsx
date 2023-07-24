import Link from "next/link";

export const Header = () => {
  return (
    <>
      <div className="flex flex-row items-end mb-8 py-4 bg-white top-0 max-md:flex-col max-md:items-center">
        <div className="text-5xl text-slate-800 grow whitespace-nowrap max-md:text-3xl max-md:pb-4">
          <Link href={"/"}>ALLAN GELMAN</Link>
        </div>

        <div className="flex flex-wrap justify-center space-x-4">
          <HeaderCategory name={"CODE"} href={"/Coding"} />
          <HeaderCategory name={"3D"} href={"/3DArt"} />
          <HeaderCategory name={"AR"} href={"/VRAR"} />
          <HeaderCategory name={"PAINTING"} href={"/Painting"} />
          <HeaderCategory name={"FABRIC"} href={"/Sewing"} />
          <HeaderCategory name={"ABOUT"} href={"/About"} />
        </div>
      </div>
    </>
  );
};

interface HeaderCategoryProps {
  name: string;
  href?: string;
}

const HeaderCategory = ({ name, href }: HeaderCategoryProps) => {
  return (
    <Link href={href ?? "/"}>
      <div className="text-lg whitespace-nowrap text-slate-800 hover:text-slate-500">
        {name}
      </div>
    </Link>
  );
};
