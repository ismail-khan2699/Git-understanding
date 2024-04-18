import React from 'react'
import dynamic from 'next/dynamic';
const MyClientSideComponent = dynamic(() => import('./smallComponents/ClintSlide'), { ssr: false });

function Clients() {
  return (
    <div className='w-full py-9 px-10' style={{ fontFamily: 'Montserrat, sans-serif' }}>
    <div className='flex flex-col justify-center items-center mb-2'>
      
        <p className='p-0 m-0 text-black font-semibold'>What Our Client Says About Us</p>
      <MyClientSideComponent/>
    </div>
  </div>
  
  )
}


export default Clients