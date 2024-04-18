import Link from "next/link";
import "./2WelCome.css";
function WelCome() {
  return (
    <div id="root" className=" flex flex-col  md:flex-row pt-10 mb-3">
        <div className=" w-5/6 sm:w-1/2 md:w-2/6">
        <h1 className=" text-2xl text-black font-bold ml-2 inline-block">Welcome To Web Magnetism</h1>
        <p className=" text-xs text-justify text-gray-800" style={{minWidth:'265px'}}>Your hub for bespoke web design and digital marketing success. We seamlessly merge creativity and SEO expertise to craft visually stunning websites that magnetize audiences. <br /><br />
Our digital marketing, from SEO mastery to impactful campaigns, ensures your brand's resonance online. At Web Magnetism, we're not just designers; we're digital architects, sculpting unique online experiences that elevate your brand. <br /><br />
Navigate the digital landscape with confidence – choose Web Magnetism for tailored web design and strategic digital marketing, where innovation meets results for a compelling online journey.</p>
        <div>
        <Link href='#' className='flexbox button ml-2 mb-3 h-8' style={{textDecoration:'none',}}>
          <h3 className=" text-white text-xs font-thin p-2">ABOUT US</h3>
          <div style={{ height: '20px', width: '20px' }}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
        </Link>
        </div>
        </div>
        
        <div className=" md:ml-10 mt-10"  style={{width:'380px', height:'380px'}}>
            <img src="/assets/laptop.png" alt="Picture Missing" />
        </div>
    </div>
  )
}

export default WelCome