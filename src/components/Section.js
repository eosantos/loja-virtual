import React from 'react'

const Section = ({ title }) => {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
      <div className="flex justify-center">
        <div className="w-16 h-1 bg-black"></div>
      </div>
    </section>
  )
}

export default Section
