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
      <>
      <div className ="flex space-x-4">
        <div className="w-1/2">
          <div className="mt-4">
            <Image src="/paintings/kaz.png" loader={myLoader} alt="max" width={600} height={500} />
          </div>
          <div className="mt-4">
            <Image src="/paintings/bentaylor.png" loader={myLoader} alt="max" width={600} height={500} />
          </div>
          <div className="mt-4">
            <Image src="/paintings/natasha.png" loader={myLoader} alt="max" width={600} height={500} />
          </div>
        </div>
        <div className="w-1/2">
          <div className="mt-4">
            <Image src="/paintings/meilin.png" loader={myLoader} alt="max" width={600} height={500} />
          </div>
          <div className="mt-4">
            <Image src="/paintings/sun.png" loader={myLoader} alt="max" width={600} height={500} />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <div className="mt-4">
                <Image src="/paintings/kala.jpg" loader={myLoader} alt="max" width={600} height={500} />
              </div>
            </div>
            <div className="w-1/2">
              <div className="mt-4">
                <Image src="/paintings/max.JPG" loader={myLoader} alt="max" width={600} height={500} />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-1/3">
          <div className="mt-4">
            <Image src="/paintings/bentaylor.png" loader={myLoader} alt="max" width={400} height={500} />
          </div>
          <div className="mt-4">
            <Image src="/paintings/max.JPG" loader={myLoader} alt="max" width={400} height={500} />
          </div>
        </div> */}

      </div>
      </>
    </Layout>
  )
}





