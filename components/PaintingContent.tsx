import { Layout } from './Layout'
import Image from 'next/image'


interface imageLoaderProps{
  src: string
  width: number
  quality?: number
}

const myLoader = ({ src, width, quality }: imageLoaderProps): string => {
  return `https://allan-gelman.imgix.net/${src}?=${width}&q=${quality || 75}`
}


export const PaintingContent = () => {
  return (
    <Layout>
      <div className="grid gap-4 grid-cols-2">
        <div>
          <div className="mt-4" style={{borderRadius: '8px', overflow: 'hidden'}}>
            <Image src="/paintings/kaz.png" loader={myLoader} alt="max" width={600} height={500} />
          </div>
          <div className="mt-4" style={{borderRadius: '8px', overflow: 'hidden'}}>
            <Image src="/paintings/natasha.png" loader={myLoader} alt="max" width={600} height={500} />
          </div>
          <div className="mt-4" style={{borderRadius: '8px', overflow: 'hidden'}}>
            <Image src="/paintings/sun.png" loader={myLoader} alt="max" width={600} height={500} />
          </div>
        </div>
        <div>
          <div className="mt-4" style={{borderRadius: '8px', overflow: 'hidden'}}>
            <Image src="/paintings/meilin.png" loader={myLoader} alt="max" width={600} height={500} />
          </div>
          <div className="mt-4" style={{borderRadius: '8px', overflow: 'hidden'}}>
            <Image src="/paintings/bentaylor.png" loader={myLoader} alt="max" width={600} height={500} />
          </div>
          <div className="mt-4" style={{borderRadius: '8px', overflow: 'hidden'}}>
            <Image src="/paintings/L.png" loader={myLoader} alt="max" width={600} height={500} />
          </div>
          <div className="mt-4" style={{borderRadius: '8px', overflow: 'hidden'}}>
            <Image src="/paintings/Pavement.jpg" loader={myLoader} alt="max" width={600} height={500} />
          </div>
        </div>
      </div>
    </Layout>
  )
}





