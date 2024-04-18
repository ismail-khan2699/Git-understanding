import React from 'react'
import './BestSpoke.css'
import Bspoke from './smallComponents/BespokeCard'
import Link from 'next/link'

function BestSpoke() {
  return (
    <>
    <div id='roots'>
    <img src="/assets/waves.png" alt="" className='wavesd'/>
    <div className='flex justify-center items-center lg:justify-normal lg:items-start flex-col lg:flex-row  pt-20'>
      <div className=' w-11/12 lg:w-1/2 text-white'>
        <h1 className=' text-3xl font-bold'>Our bespoke website include the following</h1>
        <h3  className=' text-base w-11/12 lg:w-4/6 my-5'>Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsa</h3>
        <Link href='#' className='flexbox buttons mb-3 h-8' style={{textDecoration:'none',}}>
          <h3 className=" text-white text-xs py-2 font-semibold">CONTACT US</h3>
          <div style={{ height: '20px', width: '20px' }}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
        </Link>

      </div>
      <div className=' w-11/12 sm:w-8/12 md:w-7/12 lg:w-1/2 h-full'>
      <Bspoke imgSrc="/assets/globe.png" heading="BESPOKE DESIGN" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga porro alias sint provident nesciunt eligendi quam nihil, soluta molestias cum voluptatum corporis, dignissimos et exercitationem impedit architecto autem natus repudiandae?" />
      <Bspoke imgSrc="/assets/globe.png" heading="MOBILE OPTIMIZED" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga porro alias sint provident nesciunt eligendi quam nihil, soluta molestias cum voluptatum corporis, dignissimos et exercitationem impedit architecto autem natus repudiandae?" />
      <Bspoke imgSrc="/assets/globe.png" heading="SEO OPTIMIZED" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga porro alias sint provident nesciunt eligendi quam nihil, soluta molestias cum voluptatum corporis, dignissimos et exercitationem impedit architecto autem natus repudiandae?" />
      </div>
    </div>
    </div>
    </>
  )
}

export default BestSpoke