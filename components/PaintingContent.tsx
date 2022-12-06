import { Layout } from './Layout'
import Image from 'next/image'


interface imageLoaderProps{
  src: string
  width: number
  quality?: number
}

const myLoader = ({ src, width, quality }: imageLoaderProps): string => {
  return `https://allan-gelman.imgix.net/${src}?w=${width}&q=${quality || 75}`
}


export const PaintingContent = () => {
  return (
    <Layout>
    <div className="">
      <Image src="/paintings/kaz.png" loader={myLoader} alt="kaz" width={2880} height={1300} />
      <Image src="/paintings/natasha.png" loader={myLoader} alt="natasha" width={1409} height={1920} />
      <Image src="/paintings/max.JPG" loader={myLoader} alt="max" width={300} height={500} />
    </div>
  </Layout>
  )
}





