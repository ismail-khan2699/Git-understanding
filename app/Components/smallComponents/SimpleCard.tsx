import React from 'react';

interface CardProps {
  imgSrc: string;
  heading: string;
  paragraph: string;
}

const Cards: React.FC<CardProps> = ({ imgSrc, heading, paragraph }) => {
  return (
    <div className='bg-white mx-2 p-8 flex flex-col justify-center items-center rounded-lg z-10 hover:scale-105' style={{ height: '275px', width:'275px' }}>
      <div className='flex w-full mt-4'>
        <div className='bg-purple-600 flex justify-center items-center rounded-lg z-40' style={{ height: '70px', width: '70px' }}>
          <img src={imgSrc} alt={heading} />
        </div>
        <div className='ml-5 align-middle text-black text-sm w-3/5 font-semibold'>{heading}</div>
      </div>
      <div className='m-5 text-xs w-full text-gray-800 pt-5'>{paragraph}</div>
    </div>
  );
}

export default Cards;
