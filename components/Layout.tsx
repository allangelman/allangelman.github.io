import { ReactElement } from "react"
import {Header} from "./Header"
import {Footer} from "./Footer"

interface LayoutProps {
  children: ReactElement
}
export const  Layout = ({children}: LayoutProps) => {
  return (
    <div className="px-32 py-8">
      <Header/>
      {children}
      <Footer/>
    </div>

  )
}





