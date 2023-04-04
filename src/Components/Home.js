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
      <div className="container mx-auto px-4 py-8">
        <CourseDetails/>
        
      </div>

      <Footer/>

    </div>
  )
}

export default Home;  