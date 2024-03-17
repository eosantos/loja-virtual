'use client'

import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '@/components/Footer'
import CarouselComponent from '@/components/Carousel'
import { fetchProducts } from '../service/fetchProducts'
import Card from '@/components/CardProduct'

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts()
      setProducts(productsData)
      console.log(productsData) // Imprime os produtos no console
    }
    getProducts()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <CarouselComponent />
        <h1>Masculino</h1>
        <div className="flex flex-wrap justify-center">
          {products.map((product, index) => (
            <Card
              key={index}
              src={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
