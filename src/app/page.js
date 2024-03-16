import React from 'react'
import Header from '../components/Header'
import Footer from '@/components/Footer'
import CarouselComponent from '@/components/Carousel'
import CardProduct from '@/components/CardProduct'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <CarouselComponent />
        <div className="flex flex-wrap justify-center">
          {Array.from({ length: 10 }).map((_, index) => (
            <CardProduct
              key={index}
              src="https://img.freepik.com/fotos-gratis/produtos-de-venda-com-desconto_23-2150296287.jpg?w=826&t=st=1710627760~exp=1710628360~hmac=0f7ba4a79761dc13d4bd05abd4a747e234429920b0ada5304245f07af9a7dc78"
              title="Product Name"
              price="19.99"
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
