import { Layout } from './Layout'
import Image from 'next/image'

export const PaintingContent = () => {
  return (
    <Layout>
    <div className="">
      <span >
        <Image src="/kaz.png" alt="Kaz" width={2880} height={1300} />
      </span>
      <span >
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
      <img src="/kaz.png" alt="Kaz" width={2880} height={1300} />
    </div>
  </Layout>
  )
}





