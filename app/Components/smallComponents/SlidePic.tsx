"use client"
import React, { useEffect, useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import './slidepic.css'

function SlidePic() {
  const cardData = [
    {
      imgSrc: "/assets/rectangular1.png",
      title: "REDESIGN OF B2B WEBSITE",
      category: "Web Design"
    },
    {
      imgSrc: "/assets/rectangular2.png",
      title: "MOBILE APPLICATION",
      category: "App Development"
    },
    {
      imgSrc: "/assets/rectangular3.png",
      title: "E-COMMERCE SHOP",
      category: "Web Development"
    },
    {
      imgSrc: "/assets/rectangular1.png",
      title: "REDESIGN OF B2B WEBSITE",
      category: "Web Design"
    },
    {
      imgSrc: "/assets/rectangular2.png",
      title: "MOBILE APPLICATION",
      category: "App Development"
    },
    {
      imgSrc: "/assets/rectangular3.png",
      title: "E-COMMERCE SHOP",
      category: "Web Development"
    },
    // Add more card objects as needed
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

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [instanceRef]);


      return (
        <div className=' w-full flex flex-col justify-center items-center overflow-hidden my-5'>
        <div ref={sliderRef} className="keen-slider" >
        {cardData.map((card, index) => (
        <div key={index} className="keen-slider__slide number-slide1" style={{maxWidth:'300px'}}>
          <div className=' flex flex-col justify-center'>
            <img src={card.imgSrc} alt="port" className="rounded-lg w-full h-96"  />
            <h2 className="text-xl text-black py-2">{card.title}</h2>
            <h3 className="text-xs text-gray-800 pt-2">{card.category}</h3>
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
export default SlidePic;

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