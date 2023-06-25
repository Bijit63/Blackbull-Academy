import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg"
import { FaInstagram, FaTelegram, FaYoutube, FaUser } from 'react-icons/fa';
import CourseCard from "./Card";

const CourseDetails = () => {
  

  return (
    <div id="info" className="flex flex-col items-center py-20 md:py-28 overflow-hidden mx-auto md:w-[80vw] lg:w-[60vw]">

      <h2 data-aos='fade-up' className="text-3xl md:text-5xl poppins text-center font-medium text-yellow-700 mb-4">
          Our Course 
        </h2>
        <hr data-aos='fade-up' className="md:w-full mb-8 border-slate-700 w-[90vw]"/>
        <div data-aos='fade-up' className=" text-lg text-gray-600 mb-8 text-center">
          Our Live mentorship program is designed to teach you everything you need to know about trading options in the stock market, regardless of your experience level. BlackBull Academy will guide you through each step of the process, from setting up your trading account to executing profitable trades.
     
        </div>
        


    <div data-aos='fade-up' className="flex flex-col items-center m-2 px-7 py-3  md:flex md:justify-center sm:w-[90vw] md:w-[80vw] lg:w-[60vw]">
      {/* Video */}
      {/* <div className="w-[380px] h-[250px] flex justify-center sm:w-[450px] sm:h-[280px] md:w-[520px] md:h-[310px]  bg-white">
        <img src={logo} alt="" className="w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] md:w-[310px] md:h-[310px]" />
      </div> */}

      {/* <hr className="border w-full"/>  */}




      {/* COURSE CARD  */}
      <div className="flex flex-col md:flex-row items-center md:justify-around  w-[100%]">

      <CourseCard
        heading="Weekend Batch"
        price="₹ 2499"
        courseId="123"
        detailss="( One Month Mentorship )"
        topics={["Fibo Setup"," Premium Chart Setup","Risk Management","Money Management"]}
        />
      <CourseCard
        heading="Live Market Trading"
        price="₹ 4999"
        courseId="123"
        detailss="( Two Month Mentorship )"
        topics={["Fibo Setup"," Premium Chart Setup","Live Market Info","BTST Setup"]}
        />
        </div>
      {/* COURSE CARD  */}





         {/* Collapse Bar  1*/}
       




      
      </div>










        <div className="container mx-auto mt-8 px-[20px] md:px-0">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="border border-[#ffffff3a] bg-[#070718] rounded-lg shadow-lg px-4 py-2 md:px-2 md:py-3 text-center text-white">
          <FaInstagram className="text-3xl mb-2 mx-auto" />
          <p className="md:text-[18px] text-[16px] font-semibold">Instagram</p>
          <p className="md:text-[18px] text-gray-300 text-[15px] mt-2">880 Followers</p>
        </div>
        <div className="border border-[#ffffff3a] bg-[#070718] rounded-lg shadow-lg px-4 py-2 md:px-2 md:py-3 text-center text-white">
          <FaTelegram className="text-3xl mb-2 mx-auto" />
          <p className="md:text-[18px] text-[16px] font-semibold">Telegram</p>
          <p className="md:text-[18px] text-gray-300 text-[15px] mt-2">240+ Members</p>
        </div>
        <div className="border border-[#ffffff3a] bg-[#070718] rounded-lg shadow-lg px-4 py-2 md:px-2 md:py-3 text-center text-white">
          <FaYoutube className="text-3xl mb-2 mx-auto" />
          <p className="md:text-[18px] text-[16px] font-semibold">YouTube</p>
          <p className="md:text-[18px] text-gray-300 text-[15px] mt-2">145 Subscribers</p>
        </div>
        <div className="border border-[#ffffff3a] bg-[#070718] rounded-lg shadow-lg px-4 py-2 md:px-2 md:py-3 text-center text-white">
          <FaUser className="text-3xl mb-2 mx-auto" />
          <p className="md:text-[18px] text-[16px] font-semibold">Student Mentored</p>
          <p className="md:text-[18px] text-gray-300 text-[15px] mt-2">6 Students</p>
        </div>
      </div>
    </div>

    </div>


  );
};

export default CourseDetails;