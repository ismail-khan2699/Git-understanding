import Link from 'next/link';
import React from 'react';

interface CardProps {
  imgSrc: string;
  heading: string;
  paragraph: string;
  buttonText: string;
  link: string;
}

const Overviewcard: React.FC<CardProps> = ({ imgSrc, heading, paragraph, buttonText, link }) => {
  return (
    <div className=' w-5/6 mx-3' style={{maxWidth:'400px', minWidth:'230px'}}>
      <div className='picTure rounded-lg overflow-hidden bg-black'>
        <img src={imgSrc} alt="img" className="object-cover h-full w-full" />
      </div>
      <h2 className='text-xl py-5 text-black font-semibold'>{heading}</h2>
      <h3 className='text-sm text-gray-700'>{paragraph}</h3>
      <Link href={link} className='flexbox butonOv mb-3 h-8' style={{ textDecoration: 'none' }}>
        <h3 className="text-xs text-black font-thin p-2">{buttonText}</h3>
        <div style={{ height: '20px', width: '20px' }}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
            <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
      </Link>
    </div>
  );
}

export default Overviewcard;
