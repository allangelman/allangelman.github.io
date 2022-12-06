import { ReactElement } from "react"
import {Header} from "./Header"
import {Footer} from "./Footer"

interface GridProps {
  children: ReactElement
}
export const Grid = ({children}: GridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {children}
    </div>
  )
}

interface ThumbnailProps {
}
export const Thumbnail = ({}: ThumbnailProps) => {
  return (
    <div className="aspect-5/3 rounded-md bg-pink-500"/>
  )
}





