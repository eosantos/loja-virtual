import { Carousel } from 'flowbite-react'
import Image from 'next/image'
import banner1 from '../assets/images/banner_001.jpg'
import banner2 from '../assets/images/banner_002.jpg'
import banner3 from '../assets/images/banner_003.jpg'

const CarouselComponent = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div className="relative w-full h-full">
          <Image
            src={banner1}
            alt="Banner_001"
            width={1800}
            height={1200}
            className="w-full h-full"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src={banner2}
            alt="Banner_002"
            width={1800}
            height={1200}
            className="w-full h-full"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src={banner3}
            alt="Banner_003."
            width={1800}
            height={1200}
            className="w-full h-full"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselComponent
