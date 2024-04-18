import React from 'react'
import Overviewcard from './smallComponents/OverviewCard';

function ServiceOv() {
    const FontClass = {
        fontFamily: 'Montserrat, sans-serif'
        
      };
      
  return (
    <div style={FontClass} className='flex justify-center text-black items-center flex-col my-7'>
        <p>Overview Of Services</p>
        <div className='flex justify-center items-center'>
        <div className='flex justify-center items-center'>
        <Overviewcard
        imgSrc="/assets/laptop2.png"
        heading="Bespoke Web Design"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi alias laborum itaque facere libero ipsam, aperiam ad veniam qui, perspiciatis illum voluptas sapiente aliquid quaerat vero cumque assumenda maxime aspernatur?"
        buttonText="Bespoke Web Design"
        link="#"
        />
        </div>
        <div className=' hidden md:block  justify-center items-center'>
        <Overviewcard
        imgSrc="/assets/Mobile.png"
        heading="App Development"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi alias laborum itaque facere libero ipsam, aperiam ad veniam qui, perspiciatis illum voluptas sapiente aliquid quaerat vero cumque assumenda maxime aspernatur?"
        buttonText="App Development"
        link="#"
        />
        </div>
        <div className=' hidden sm:block justify-center items-center'>

        <Overviewcard
        imgSrc="/assets/laptop3.png"
        heading="Digital Marketing"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi alias laborum itaque facere libero ipsam, aperiam ad veniam qui, perspiciatis illum voluptas sapiente aliquid quaerat vero cumque assumenda maxime aspernatur?"
        buttonText="Digital Marketing"
        link="#"
        />  
        </div>
        </div>

    </div>
  )
}

export default ServiceOv