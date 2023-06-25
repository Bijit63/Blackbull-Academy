import React from 'react';
import CourseDetails from './CourseDetails';
import Footer from './Footer';
import HeroSection from './HeroSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <HeroSection/>

      {/* Main body */}
      <div className="container mx-auto md:px-4 md:py-8">
        <CourseDetails/>
        
      </div>

      

      

    </div>
  )
}

export default Home;  