import React from 'react';

interface CardProps {
  imgSrc: string;
  heading: string;
  paragraph: string;
}

const Bspoke: React.FC<CardProps> = ({ imgSrc, heading, paragraph }) => {
  return (
    <div className='card bg-white hover:scale-105 w-full block rounded-lg p-10 mb-7'>
      <div className='bg-purple-600 flex justify-center items-center rounded-lg overflow-hidden mb-4' style={{ height: '70px', width: '70px' }}>
        <img src={imgSrc} alt={heading} />
      </div>
      <h2 className='mb-3 font-semibold text-black text-xl'>{heading}</h2>
      <h3 className='text-justify text-sm text-gray-700'>{paragraph}</h3>
    </div>
  );
}

export default Bspoke;
