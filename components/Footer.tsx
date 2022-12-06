import { ReactElement } from "react"
import Link from "next/link"
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export const Footer = () => {
  return (
    <footer className="items-center justify-center border-t-2 flex flex-col mt-16 py-4 space-y-2">
      <div className="flex break-all">allangelman4@gmail.com</div>
      <div> ©2022 by Allan Gelman</div>
    </footer>
  )
}






