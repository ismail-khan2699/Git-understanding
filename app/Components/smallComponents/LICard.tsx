"use client"
import React, { useState, useEffect } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Link from 'next/link';

function LICard() {
  const insightCardsData = [
    {
      imgSrc: "/assets/weLI1.png",
      heading: "Website Accessibility And Why It Matters",
      paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, voluptatibus ea, ut sequi fugit impedit eveniet maiores, quas error atque ....",
      date: "25.01.2024",
      readMoreLink: "#"
    },
    {
      imgSrc: "/assets/webLi2.png",
      heading: "Website Accessibility And Why It Matters",
      paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, voluptatibus ea, ut sequi fugit impedit eveniet maiores, quas error atque ....",
      date: "25.01.2024",
      readMoreLink: "#"
    },
    {
      imgSrc: "/assets/webLi3.png",
      heading: "Website Accessibility And Why It Matters",
      paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, voluptatibus ea, ut sequi fugit impedit eveniet maiores, quas error atque ....",
      date: "25.01.2024",
      readMoreLink: "#"
    },
    // Add more card objects as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
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
      setLoaded(true);
    },
  });

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
      <div className='flex flex-col justify-center overflow-hidden h-auto w-11/12'>
      <div ref={sliderRef} className="keen-slider">
      {insightCardsData.map((cardData, index) => (
        <div key={index} className='keen-slider__slide flex justify-center'>
          <div key={index} style={{ width: '250px' }} className='Cradso'>
            <img src={cardData.imgSrc} alt="" className='bottom-0' />
            <h3 className='p-2 text-black font-semibold'>{cardData.heading}</h3>
            <h3 className='p-2 text-xs text-gray-600'>{cardData.paragraph}</h3>
            <div className="p-2 mb-2 flex w-full justify-between mt-3">
                <h2 className='text-xs'>{cardData.date}</h2>
                <Link href={cardData.readMoreLink} className=' text-black gradiantText text-xs'>Read More</Link>
            </div>
          </div>
        </div>
      ))}
      </div>

      {loaded && instanceRef.current && (
          <div className='my-5 justify-center block flex  lg:invisible'>
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
  );
}

export default LICard;

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