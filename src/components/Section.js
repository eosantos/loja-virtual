import React, { forwardRef } from 'react'

// eslint-disable-next-line react/display-name
const Section = forwardRef(({ title }, ref) => {
  return (
    <section ref={ref} className="my-8">
      <h2 className="text-3xl font-bold text-center mb-4 text-slate-950">
        {title}
      </h2>
      <div className="flex justify-center">
        <div className="w-16 h-1 bg-slate-950"></div>
      </div>
    </section>
  )
})

export default Section
