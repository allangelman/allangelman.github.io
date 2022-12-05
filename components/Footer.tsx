import { ReactElement } from "react"
import Link from "next/link"
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>allangelman4@gmail.com</div>
      <span className={styles.logo}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
      <div> ©2022 by Allan Gelman</div>
    </footer>
  )
}






