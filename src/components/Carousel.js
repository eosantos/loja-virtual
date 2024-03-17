import { Carousel } from 'flowbite-react'
import Image from 'next/image'

const CarouselComponent = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div className="relative w-full h-full">
          <Image
            src="https://img.freepik.com/fotos-gratis/imagem-de-uma-jovem-surpreendida-ofegando-espantada-segurando-a-mao-no-peito-e-sorrindo-atonita-com-a-venda_1258-121612.jpg?w=1800&t=st=1710707001~exp=1710707601~hmac=8239fac940cceb3acb236d6097a57a02bf33b6247f5fce53cdb542582f356c07"
            alt="Banner_001"
            width={1800}
            height={1200}
            className="w-full h-full"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src="https://img.freepik.com/fotos-gratis/mulher-asiatica-atraente-mostrando-aplicativo-de-smartphone-e-sacolas-de-compras-online-via-aplicativo-standi_1258-156867.jpg?w=1800&t=st=1710706595~exp=1710707195~hmac=f26dbb7b7ebfeffd639fc63098f6fd5f05e17ebc760cd8440c03f6aa5e46efc5"
            alt="Banner_002"
            width={1800}
            height={1200}
            className="w-full h-full"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src={
              'https://img.freepik.com/fotos-gratis/compradora-de-jovem-feliz-mostrando-sinal-de-ok-satisfeito-com-bons-descontos-comprando-pessoal-a-venda-segurando_1258-121112.jpg?w=1800&t=st=1710706980~exp=1710707580~hmac=3ed80217e42f1d28298feb46265ce00cfde44b3cd09202259f252849a8f0bfe0'
            }
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
