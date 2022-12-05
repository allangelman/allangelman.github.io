import { ReactElement } from "react"
import Link from "next/link"

export const Header = () => {
  return (
    <>
    <div className="flex flex-row items-center pb-4">
      <div className="text-5xl grow">Allan Gelman</div>
      <div className="flex space-x-3">
        <HeaderCategory name={"Coding"} href={"Coding"}/>
        <HeaderCategory name={"3D Art"} href={"3DArt"} />
        <HeaderCategory name={"VR/AR"}/>
        <HeaderCategory name={"Painting"}/>
        <HeaderCategory name={"Fibers"}/>
        <HeaderCategory name={"About"}/>
      </div>
    </div>
    </>
  )
}

interface HeaderCategoryProps {
  name: string
  href?: string
}

const HeaderCategory = ({name, href}: HeaderCategoryProps) => {
  return (
    <Link href={href ?? "/"}>
      <div className="text-lg">{name}</div>
    </Link>

  )
}





