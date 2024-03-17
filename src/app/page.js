'use client'

import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '@/components/Footer'
import CarouselComponent from '@/components/Carousel'
import { fetchProducts } from '../service/fetchProducts'
import Card from '@/components/CardProduct'

export default function Home() {
  const [menProducts, setMenProducts] = useState([])
  const [womenProducts, setWomenProducts] = useState([])

  useEffect(() => {
    const getMenProducts = async () => {
      const menProductsData = await fetchProducts("men's clothing")
      setMenProducts(menProductsData)
    }

    const getWomenProducts = async () => {
      const womenProductsData = await fetchProducts("women's clothing")
      setWomenProducts(womenProductsData)
    }

    getMenProducts()
    getWomenProducts()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <CarouselComponent />
        <section>
          <h1>Masculino</h1>
          <div className="flex flex-wrap justify-center">
            {menProducts.map((product, index) => (
              <Card
                key={index}
                src={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        </section>
        <section>
          <h1>Feminino</h1>
          <div className="flex flex-wrap justify-center">
            {womenProducts.map((product, index) => (
              <Card
                key={index}
                src={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
