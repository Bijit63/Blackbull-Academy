import React from 'react';
import heroImage from '../images/hero.jpg';

const HeroSection = () => {
  const styles = {
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2rem',
  };

  const bgStyles = {
    position: 'absolute',
    
    top: 0,
    left: 0,
    // width: '100%',
    // height: '100%',
    zIndex: -1,
    opacity: 0.4,
    backgroundImage: `url(${heroImage})`,
    
  };

  return (
    <div id='hero' className='py-24 md:py-36 md:h-[430px] h-[340px]' style={styles}>
      <div style={bgStyles} className='md:h-[430px] h-[340px] w-[100vw]' id='heroimg'/>

      <h1 className='text-3xl md:text-6xl font-medium text-center text-white poppins  mx-auto'>
        Learn Trading From Beginning
      </h1>
      <p className='mt-6 text-xl  text-gray-300 text-semibold rubik text-center max-w-3xl mx-auto'>
        Our 2-month mentorship program will teach you everything you need to know about trading options
        in the stock market.
      </p>
    </div>
  );
};

export default HeroSection;