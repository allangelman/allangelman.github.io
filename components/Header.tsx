import Link from "next/link";

export const Header = () => {
  return (
    <>
      <div className="flex flex-row items-end mb-8 py-4 bg-white top-0 max-md:flex-col max-md:items-center">
        <div className="text-5xl grow whitespace-nowrap max-md:text-3xl max-md:pb-4">
          <Link href={"/"}>allan gelman</Link>
        </div>

        <div className="flex flex-wrap justify-center space-x-4">
          <HeaderCategory name={"coding"} href={"/Coding"} />
          <HeaderCategory name={"3d art"} href={"/3DArt"} />
          <HeaderCategory name={"immersive"} href={"/VRAR"} />
          <HeaderCategory name={"painting"} href={"/Painting"} />
          <HeaderCategory name={"sewing"} href={"/Sewing"} />
          <HeaderCategory name={"about"} href={"/About"} />
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
      <div className="text-lg whitespace-nowrap hover:text-blue-500">
        {name}
      </div>
    </Link>
  );
};
