import Link from 'next/link';
import { FaFacebook, FaInstagram, FaGithub, FaDribbble } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import React from 'react'
import Image from 'next/image';

function FooterContact() {
  const marketingServices = [
    { name: 'Email Nurture', href: '#' },
    { name: 'SEO', href: '#' },
    { name: 'Social Media Marketing', href: '#' },
    { name: 'Conversion Rate Optimization', href: '#' },
    { name: 'Copy Writing', href: '#' },
    { name: 'Email Marketing', href: '#' },
    { name: 'Remarketing', href: '#' },
    { name: 'PPC', href: '#' }
  ];

  const beSpokeWebDesign = [
    { name: 'Web Design', href: '#' },
    { name: 'Web Redesign', href: '#' },
    { name: 'UI/UX Design', href: '#' },
    { name: 'Brand Indentity and Logo', href: '#' },
  ];
  return (
    <div>
<footer style={{backgroundColor:'rgba(28, 12, 38, 1)'}} className=' text-white'>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className=' w-full flex justify-between mb-3'>
      <div>
      <Link href="#"  className='flexbox button ml-2 h-8' style={{ textDecoration: 'none', border:'none', borderRadius:'10px' }}>
          <Image src="/assets/logoe.png" alt="logo" width={110} height={50} className=' px-1' />
        </Link>
      </div>
      <div>
      <Link href="#"  className='flexbox button ml-2 h-8' style={{ textDecoration: 'none', border:'none' }}>
          <h3 className="text-white text-xs font-normal Link-2">CONTACT US</h3>
          <div style={{ height: '20px', width: '20px' }}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
        </Link>
      </div>
    </div>
    <div className=" h-px w-full bg-gradient-to-r rounded-2xl from-purple-500 via-purple-600 to-yellow-400" />
    <div className="lg:flex lg:items-start lg:gap-8">
    <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-16 mt-3">

<div className="lg:col-span-2">
  <div className="mb-8">
    <Link href="#"className="font-medium text-xl text-gray-100 mb-4">Services</Link>
    <div className="border-b-2 w-full bg-gradient-to-r rounded-2xl  bg-white" />
    <ul className="space-y-2 flex">
  <div>
    <h3 className="font-semibold text-lg pt-2 text-gray-200">Digital Marketing</h3>
    {marketingServices && marketingServices.map((service, index) => (
  <div key={index} className='mt-2'>
    <Link href={service.href} className="text-gray-400 font-extralight equal-height text-base">{service.name}</Link><br />
  </div>
))}

  </div>
  <div className='m-4'>
    <h3 className="font-semibold text-lg text-gray-200">Bespoke Web Design</h3>
    {beSpokeWebDesign && beSpokeWebDesign.map((service, index) => (
  <div key={index} className='my-2'>
    <Link href={service.href} className="text-gray-400 font-extralight equal-height text-base">{service.name}</Link><br />
  </div>
))}
    <Link href="#" className="font-semibold text-lg text-gray-200">App Development</Link>
  </div>
</ul>

  </div>
</div>

<div className="lg:col-span-1">
  <div className="mb-8">
    <Link href="#"className="font-medium text-xl text-gray-100 mb-4 items-center">Home</Link>
    <div className="border-b-2 w-full bg-gradient-to-r rounded-2xl  bg-white" /><br />
    <Link href="#"className="font-medium text-xl text-gray-100 mb-4 items-center ">About Us</Link>
    <div className="border-b-2 w-full bg-gradient-to-r rounded-2xl  bg-white" /><br />
    <Link href="#"className="font-medium text-xl text-gray-100 mb-4 items-center ">Contact Us</Link>
    <div className="border-b-2 w-full bg-gradient-to-r rounded-2xl  bg-white" />
    
    <div className='text-gray-400 font-thin equal-height text-base mt-14'>
    United Kington,TW4 7LULondon
    </div>
    
    </div>
</div>

<div className="lg:col-span-1">
  <div className="mb-8">
    <Link href="#"className="font-medium text-xl text-gray-100 mb-4">Resources</Link>
    <div className="border-b-2 w-full bg-gradient-to-r rounded-2xl  bg-white" /><br />
    <Link href="#" className="text-gray-400 font-thin equal-height text-base">Our Work</Link><br /><br />
    <Link href="#" className="text-gray-400 font-thin equal-height text-base">Insights</Link><br />
    
  </div>
</div>

<div className="lg:col-span-1">
  <div className="mb-8">
    <Link href="#"className="font-medium text-xl text-gray-100 mb-4">Social Media</Link>
    <div className="border-b-2 w-full bg-gradient-to-r rounded-2xl  bg-white" />
    <ul className="col-span-2 flex flex-col mt-3 justify-start gap-6 lg:col-span-5 ">
       
          <li >
            <Link
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-white transition hover:opacity-75 flex"
            >
              <FaFacebook className="h-6 w-6" />

              <span className=" mx-2">Facebook</span>
            </Link>
          </li> 

          <li>
            <Link
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-white transition hover:opacity-75 flex"
            >
              
              <FaInstagram className="h-6 w-6" />
              <span className=" mx-2">Instagram</span>
            </Link>
          </li>

          <li>
            <Link
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-white transition hover:opacity-75 flex"
            >
              

              <FaXTwitter className="h-6 w-6" />

              <span className=" mx-2">Twitter</span>
            </Link>
          </li>

          <li>
            <Link
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-white transition hover:opacity-75 flex"
            >

              <FaGithub className="h-6 w-6" />
              <span className=" mx-2">GitHub</span>
            </Link>
          </li>

          <li>
            <Link
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-white transition hover:opacity-75 flex"
            >

              <FaDribbble className="h-6 w-6" />
              <span className=" mx-2">Dribble</span>
            </Link>
          </li>
        </ul>

  </div>
</div>

<div className="col-span-1 lg:col-span-5 flex flex-col items-end justify-end">
  <span className='p-2'>Subscribe to our weekly newsletter today!</span>
  <form className=" rounded-lg " style={{border:'1px solid #5B53F9'}}>
    <div className="flex rounded-lg w-auto">
      <input
        type="email"
        id="UserEmail"
        placeholder="Enter your Email Address Here"
        className="w-64 border-none bg-transparent sm:text-sm focus:outline-none p-2"
      />
      <button
        className=" w-auto px-6 py-3 text-sm font-bold uppercase tracking-wide text-white sm:mt-0 sm:w-auto sm:shrink-0 rounded-r-lg"
        style={{backgroundImage:'linear-gradient(98.97deg, #5B53F9 -7.32%, #AC71D6 37.95%, #FF8E57 105.86%)'}}
      >
        Sign Up
      </button>
    </div>
  </form>
</div>


</div>

    </div>

    <div className="mt-8 border-t border-gray-100 pt-8">
      <div className="sm:flex sm:justify-between">
        <Link href="#" className="text-xs text-gray-500">&copy; 2022. Company Name. All rights reserved.</Link>

        <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
          <li>
            <Link href="#"  className="text-gray-500 transition text-sm  hover:opacity-75"> Terms & Conditions </Link>
          </li>

          <li>
            <Link href="#" className="text-gray-500 transition text-sm  hover:opacity-75"> Privacy Policy </Link>
          </li>

          <li>
            <Link href="#" className="text-gray-500 transition text-sm  hover:opacity-75"> Cookies </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default FooterContact