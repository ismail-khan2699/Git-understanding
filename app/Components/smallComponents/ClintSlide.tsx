"use client"
import React, { useEffect, useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import './slidepic.css'
import Image from 'next/image';
import Link from 'next/link'

function ClintSlide() {
  const cardsData = [
    {
      profilePicture: "/assets/p1.jpeg",
      starsImage: "/assets/stars.png",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, voluptatibus ea, ut sequi fugit impedit eveniet maiores, quas error atque iusto optio? Aperiam illum ab voluptatum architecto hic et laborum......",
      name: "Maria Bend, Director"
    },
    {
      profilePicture: "/assets/p2.jpeg",
      starsImage: "/assets/stars.png",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, voluptatibus ea, ut sequi fugit impedit eveniet maiores, quas error atque iusto optio? Aperiam illum ab voluptatum architecto hic et laborum......",
      name: "Another Person, Manager"
    },
    {
      profilePicture: "/assets/p3.jpeg",
      starsImage: "/assets/stars.png",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, voluptatibus ea, ut sequi fugit impedit eveniet maiores, quas error atque iusto optio? Aperiam illum ab voluptatum architecto hic et laborum.......",
      name: "John Doe, CEO"
    },
    {
      profilePicture: "/assets/p2.jpeg",
      starsImage: "/assets/stars.png",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, voluptatibus ea, ut sequi fugit impedit eveniet maiores, quas error atque iusto optio? Aperiam illum ab voluptatum architecto hic et laborum......",
      name: "Another Person, Manager"
    },
    {
      profilePicture: "/assets/p3.jpeg",
      starsImage: "/assets/stars.png",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, voluptatibus ea, ut sequi fugit impedit eveniet maiores, quas error atque iusto optio? Aperiam illum ab voluptatum architecto hic et laborum.......",
      name: "John Doe, CEO"
    },
  ];
  
    const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [Perviewchange, setPerviewchange] = useState(3)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
        perView: Perviewchange,
        spacing: 10,
      },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setPerviewchange(3)
      } else if(window.innerWidth>=700) {
        setPerviewchange(2)
      } else{
        setPerviewchange(1)
      }
    };

    handleResize(); // Call once to set initial perView value based on screen width

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [instanceRef]);


      return (
        <div className=' w-full flex flex-col justify-center items-center overflow-hidden my-5'>
        <div ref={sliderRef} className="keen-slider" >
        {cardsData.map((card, index) => (
        <div key={index} className="keen-slider__slide number-slide1 border-2 rounded-lg">
          <div className='p-3 rounded-lg shadow-md flex flex-col justify-center items-center'>
            <div className='profile-picture'>
              <div className='face-image relative z-30'>
                <Image src={card.profilePicture} alt={`person${index}`} layout="fill" objectFit="fill" className='relative' />
              </div>
            </div>
            <div className='h-5 w-32 relative my-5'>
              <Image src={card.starsImage} alt="rating" layout="fill" objectFit='fill' className='relative' />
            </div>
            <h3 className='text-xs text-gray-600'>{card.text}</h3>
            <div className="flex w-full justify-between mt-3">
              <h2 className='text-xs'>{card.name}</h2>
              <Link href='#' className='gradiantText text-xs'>Read More</Link>
            </div>
          </div>
        </div>
      ))}

        </div>

        {loaded && instanceRef.current && (
          <div className='flex my-5'>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

        <div className="dots mx-5">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </div>
        )}


</div>
      )
}
export default ClintSlide;

function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
  }) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabled}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    )
  }