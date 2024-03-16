import { Carousel } from 'flowbite-react'
import Image from 'next/image'

const CarouselComponent = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div className="relative w-full h-full">
          <Image
            src="https://img.freepik.com/fotos-gratis/senhora-alegre-de-pe-com-sacolas-de-compras-sorrindo-e-olhando-fundo-rosa-feliz_1258-122868.jpg?w=1800&t=st=1710603251~exp=1710603851~hmac=f04226153456f201454d92c9ac3b257c4ebc77490a66a4909165400f7bc57efa"
            alt="..."
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src="https://img.freepik.com/fotos-gratis/homem-devidamente-feliz-mostrando-cartao-de-credito-e-sacolas-de-compras-em-pe-contra-fundo-turquesa_1258-155233.jpg?w=1800&t=st=1710603326~exp=1710603926~hmac=f7248d7f6a955c283c07de75566d70eaeffcdf12bd6c326532d1c850918a4746"
            alt="..."
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src="https://img.freepik.com/fotos-gratis/garota-se-escondendo-do-frio-do-inverno-em-seu-sueter-quente-e-macio-ruiva-bonita-puxando-o-colarinho-no-nariz-e_1258-126381.jpg?w=1800&t=st=1710603397~exp=1710603997~hmac=8c29a6ed3586f29bb985ed7e7544d7ca212cc71a5ecf5591967fd4f253065f9d"
            alt="..."
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselComponent
