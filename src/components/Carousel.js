import { Carousel } from 'flowbite-react'
import Image from 'next/image'
import banners from '@/utils/bannerList'

const CarouselComponent = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {banners.map((banner, index) => (
          <div className="relative w-full h-full" key={banner}>
            <Image
              src={banner}
              alt={`Banner_00${index + 1}`}
              width={1800}
              height={1200}
              className="w-full h-full"
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselComponent
