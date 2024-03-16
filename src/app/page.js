import React from 'react'
import Header from '../components/Header'
import Footer from '@/components/Footer'
import CarouselComponent from '@/components/Carousel'

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <Footer />
        <CarouselComponent />
      </div>
    </main>
  )
}
