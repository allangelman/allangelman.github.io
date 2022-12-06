import { ReactElement } from "react"
import {Header} from "./Header"
import {Footer} from "./Footer"

interface LayoutProps {
  children: ReactElement
}
export const  Layout = ({children}: LayoutProps) => {
  return (
      <div className="px-4 md:px-12 lg:px-32 pb-8">
        <Header/>
        {children}
        <Footer/>
      </div>
  )
}





