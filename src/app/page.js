'use client'

import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import Footer from '@/components/Footer'
import CarouselComponent from '@/components/Carousel'
import { fetchProducts } from '../service/fetchProducts'
import Card from '@/components/CardProduct'
import Section from '@/components/Section'

export default function Home() {
  const [menProducts, setMenProducts] = useState([])
  const [womenProducts, setWomenProducts] = useState([])

  // Criando referências para as seções
  const menSectionRef = useRef(null)
  const womenSectionRef = useRef(null)

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
      <Header menSectionRef={menSectionRef} womenSectionRef={womenSectionRef} />
      <main className="flex-grow">
        <CarouselComponent />
        {/* Passando as referências para as seções */}
        <Section ref={menSectionRef} title="Masculino" />
        <div className="flex flex-wrap justify-center mb-10">
          {menProducts.map((product, index) => (
            <Card
              key={index}
              src={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
        <Section ref={womenSectionRef} title="Feminino" />
        <div className="flex flex-wrap justify-center mb-10">
          {womenProducts.map((product, index) => (
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
