import Link from 'next/link';
import './intro.css';

const IntroSection = () => {
  return (
    <div className='intro'>
      <div className='navbar'>
       <Link href="#" style={{textDecoration:'none',}}>
        <div className='flexbox'>
          <img src="/assets/logo.png" alt="Logo" style={{ height: 35, width: 35 }} />
          <p style={{color:'black', fontSize:'25px'}}>WEB MAGNETISM</p>
        </div>
       </Link>
        <Link href="#" style={{textDecoration:'none',}}><img src="/assets/menu.svg" alt="menu" /></Link>
      </div>
      <div className='centers'>
        <h1>WEB MAGNETISM</h1>
        <h3>Transforming Business With Unique Web Design And <br /> Strategic Digital Marketing For Impactful Online Visibility</h3>
        <Link href='#' className='flexbox buttons' style={{textDecoration:'none',}}>
          <h3>GET A PROPOSAL</h3>
          <div style={{ height: '20px', width: '20px' }}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
        </Link>
      </div>
      <div className='wave'></div>
    </div>
  );
}

export default IntroSection;
