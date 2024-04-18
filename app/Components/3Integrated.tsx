import Image from 'next/image'
import React from 'react'

function IntegratedPart() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
    <div className=' w-5/6 sm:w-2/3 md:w-2/4 flex flex-col items-center justify-center'>
      <h1 className="text-center text-black  text-3xl font-semibold">An Integrated Team for unique Web design and strategic digital marketing </h1>
      <h2 className="text-center text-gray-800 m-4 w-4/5 text-xs justify-evenly">Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan.</h2>
      <div className=' w-3/5 h-56 sm:h-72 md:w-3/5 md:h-96 pb-5 mb-5 relative'>
      <Image layout="fill" objectFit='fill' className='relative' src="/assets/funnelfunnel.png" alt="not found" />
      </div>
    </div>
  </div>
  
  )
}

export default IntegratedPart