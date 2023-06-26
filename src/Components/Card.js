import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineInfoCircle, AiOutlinePlayCircle, AiOutlineCheck } from 'react-icons/ai';
import { FaMoneyBillWave } from 'react-icons/fa';

const CourseCard = ({ heading, price, detailss, courseId , topics }) => {
  const navigate = useNavigate();

  const handleMoreInfoClick = () => {
    window.location.pathname = `/CourseInfo/${heading}`;
  };

  const handleEnrollClick = () => {
    window.location.pathname = `/payforcourse/${heading}`
  };

  return (
    <div className="bg-gradient-to-br poppins xl:w-[285px] lg:w-[260px]  md:w-[270px] w-[265px] hover:shadow-lg hover:shadow-[#11118afe] my-[20px] border-[1px] border-[#ffffff55] via-[#0a033a63]   to-[#12055e63] from-black duration-300 transition-colors text-white shadow-md rounded-lg p-6 md:p-8  flex flex-col justify-between items-center">
    <div className="text-center w-[210px]">
      <h2 className="lg:text-2xl text-xl roboto ">{heading}</h2>
      <h2 className="lg:text-md text-sm text-gray-400 rubik mb-4">{detailss}</h2>
      <div className="flex items-center roboto font-bold  text-[#ffffffc7] lg:text-[26px] text-lg text-center justify-center  mb-[30px]">
        {price} 
      </div>
      <ul className="text-gray-300 mb-4 w-[100%]  ">

        {topics.map((topic,index)=>(


          <li key={index} className="flex  items-center">
             <span className='flex items-center  mx-auto'>
              {topic}
             </span>
        </li>
        ))}
      
       
      </ul>
    </div>
    <div className="text-center w-[210px] flex flex-col">
      <button
        className="flex items-center text-center text-blue-500 hover:text-blue-600 pyx` px-4 rounded-md mb-4 focus:outline-none"
        onClick={handleMoreInfoClick}
      >
        <span className='flex items-center  mx-auto'>

        <AiOutlineInfoCircle className="mr-[4px]" />
        More Info
        </span>
      </button>
      <button
        className="flex mt-[20px] items-center text-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md focus:outline-none"
        onClick={handleEnrollClick}
      >
        <span className='flex items-center  mx-auto'>

        <AiOutlinePlayCircle className="mr-2" />
        Enroll Now
        </span>
      </button>
    </div>
  </div>
  
  );
};

export default CourseCard;
