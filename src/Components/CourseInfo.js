import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import {BsFillCheckCircleFill} from 'react-icons/bs';

const CourseInfo = () => {
    const { id } = useParams();
    const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const [isCollapsed2, setIsCollapsed2] = useState(false);

  const handleToggle2 = () => {
    setIsCollapsed2(!isCollapsed2);
  };




  return (
    <div>
        {console.log(id)}
        
{id==="Live Market Trading"?
(  <div id="info" className="flex flex-col items-center py-7 md:py-12 overflow-hidden mx-auto md:w-[80vw] lg:w-[60vw]">


<h1 className='text-[20px] md:text-3xl poppins mb-[2px] md:mb-[4px]  '>{id.toUpperCase()}</h1>
<p className="bg-bold text-[17px] poppins text-gray-400 mb-[20px] md:mb-[30px]">(Limited seats - 25)</p>

<div className="w-full mb-3 md:mb-4 rounded-md border border-[#ffffff3b] bg-gradient-to-br from-black to-[#0b0b2e] ">
  <div className="flex justify-between items-center py-2 px-4 md:py-3 rounded-md ">
    <div className="font-medium text-lg text-white">Course Curriculum</div>
    <button
      className="block text-white font-medium md:text-lg focus:outline-none hover:text-gray-300"
      onClick={handleToggle}
    >
      {isCollapsed ? "Hide" : "Show"}
    </button>
  </div>

  <div
    className={`flex flex-col px-4  overflow-hidden transition-all duration-300 ease-in-out ${isCollapsed ? "max-h-[600px]" : "max-h-0"}`}
  >
    <ul className="text-gray-300 text-sm md:text-base md:my-3 my-2">
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> Price Action and Technical Analysis</li>
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> Draw Support and Resistance + Indicators</li>
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> Fibo Setup </li>
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> All Important  Chart  Pattern  </li>
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> Three Candlestick Pattern </li>
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> Theory Will Be Taught + Live Market  </li>
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> Entry, Exit, and Stop Loss Management</li>
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> All My Strategies + Planning For Entry </li>
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> Double Bottom &amp; Double Top Trading Plan</li>
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> Option Buying &amp; Trading with Sideways Market</li>
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> BankNifty &amp; Nifty Relationship</li>

      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> Risk Management and Money Management</li>
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> Psychology and Discipline of a Trader</li>
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> Option Strike Price Selection + Option Greeks</li>
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> Premium Chart Setup</li>
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> BTST SETUP ( WIN RATIO 70 : 30 )</li>

    </ul>
   
  </div>
</div>




      {/* Collapse Bar  2*/}
      <div  className="w-full my-3 md:my-4 rounded-md border-[#ffffff3b] border bg-gradient-to-br from-black to-[#0b0b2e] ">
      <div className="flex justify-between items-center py-2 px-4 md:py-3 rounded-md "> 
          <div className="font-medium text-lg text-white">Course Features</div>
          <button
      className="block text-white font-medium md:text-lg focus:outline-none hover:text-gray-300"
      onClick={handleToggle2}
    >
      {isCollapsed2 ? "Hide" : "Show"}
    </button>
        </div>

        <div
          className={`flex overflow-hidden w-full px-4 transition-all duration-300 ease-in-out ${
            isCollapsed2 ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
          }`}
        >
          <ul className="text-gray-300 text-sm md:text-base md:my-3 my-2">
          <li className='my-[2px] md:my-[3px] flex items-center ' > <BsFillCheckCircleFill className='mr-[5px] md:mr-[9px] bg-white rounded-full text-blue-500 ' /> Personalized Mentorship from Experienced Traders</li>
              <li className='my-[2px] md:my-[3px] flex items-center ' > <BsFillCheckCircleFill className='mr-[5px] md:mr-[9px] bg-white rounded-full text-blue-500 ' /> Live Trading Sessions and Q&A with Instructors</li>
              <li className='my-[2px] md:my-[3px] flex items-center ' > <BsFillCheckCircleFill className='mr-[5px] md:mr-[9px] bg-white rounded-full text-blue-500 ' /> Dedicated Online Community for Course Participants</li>

              <li className='my-[2px] md:my-[3px] flex items-center ' > <BsFillCheckCircleFill className='mr-[5px] md:mr-[9px] bg-white rounded-full text-blue-500 ' /> Access to Proprietary Trading Tools and Resources</li>

              <li className='my-[2px] md:my-[3px] flex items-center ' > <BsFillCheckCircleFill className='mr-[5px] md:mr-[9px] bg-white rounded-full text-blue-500 ' /> Optional One-on-One Coaching Sessions</li>
          </ul>
        </div>
      </div>















      


      <div className="text-center mt-8">
          <p className="text-lg text-gray-300 rubik">COURSE PRICE – <del>9999</del> 50% Discount</p>
          <p className="text-xl font-bold rubik">(COURSE PRICE – 4999/- ONLY)</p>
          <p className="text-sm md:text-base text-gray-500 mt-2 roboto">Refund Policy- Please make sure about the special facilities before taking the course. No claim of refund will be accepted whatsoever.</p>
          <p className="text-lg font-bold mt-4 rubik">PAYMENT- UPI ID- smalakar773-2@okaxis</p>
          <p className="text-sm md:text-base text-gray-500 mt-2 roboto">After Payment, send the payment screenshot and these details</p>
          <ul className="list-disc list-inside text-left mt-4 poppins">
            <li className="text-center">Full Name- XYZ</li>
            <li className="text-center">Mobile Number- 123456789</li>
            <li className="text-center">Email ID - abc@gmail.com</li>
          </ul>
          <p class="text-sm md:text-base text-gray-500 mt-4 roboto">Send the details and payment screenshot on Telegram:</p>
    <p class="text-sm md:text-base text-gray-500 mt-2 roboto">Telegram Username: <a href="https://web.telegram.org/k/#@Subrata_Malakar_1" target="_blank" rel="noreferrer" class="text-blue-400 font-bold">@Subrata_Malakar_1</a></p>
        </div>
        
        <a href={`/payforcourse/${id}`} className=" bg-blue-600 hover:bg-blue-700 px-2 py-2 rounded-xl mt-4 md:mt-5 font-semibold rubik">Join the Course</a>


        
    </div>)










:












(  <div id="info" className="flex flex-col items-center py-7 md:py-12 overflow-hidden mx-auto md:w-[80vw] lg:w-[60vw]">


<h1 className='text-[26px] md:text-3xl poppins mb-[3px] md:mb-[5px] '>{id.toUpperCase()}</h1>
<h1 className='text-md md:text-[18px] poppins text-gray-400 mb-[20px] md:mb-[30px] '>(Saturday & Sunday)</h1>

<div className="w-full mb-3 md:mb-4 rounded-md border-[#ffffff3b] border bg-gradient-to-br from-black to-[#0b0b2e] ">
  <div className="flex justify-between items-center py-2 px-4 md:py-3 rounded-md ">
    <div className="font-medium text-lg text-white">Course Curriculum</div>
    <button
      className="block text-white font-medium md:text-lg focus:outline-none hover:text-gray-300"
      onClick={handleToggle}
    >
      {isCollapsed ? "Hide" : "Show"}
    </button>
  </div>

  <div
    className={`flex flex-col px-4  overflow-hidden transition-all duration-300 ease-in-out ${isCollapsed ? "max-h-[600px]" : "max-h-0"}`}
  >
    <ul className="text-gray-300 text-sm md:text-base md:my-3 my-2">
    <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> Price Action and Technical Analysis</li>
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> Draw Support and Resistance + Indicators</li>
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> Fibo Setup </li>
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> All Important  Chart  Pattern  </li>
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> Three Candlestick Pattern </li>
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> Theory Will Be Taught  </li>
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> Entry, Exit, and Stop Loss Management</li>
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> All My Strategies + Planning For Entry </li>
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> Double Bottom &amp; Double Top Trading Plan</li>
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> Option Buying &amp; Trading with Sideways Market</li>
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> BankNifty &amp; Nifty Relationship</li>
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> Premium Chart Setup ( Win Ratio 80 : 20 )</li>
 
  
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> Risk Management and Money Management</li>
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> Psychology and Discipline of a Trader</li>
      <li className='my-[2px] md:my-[3px] flex items-center' > <BsFillCheckCircleFill className="mr-[5px] bg-white rounded-full text-blue-500 md:mr-[9px]" /> Option Strike Price Selection + Option Greeks</li>
      

    </ul>
   
  </div>
</div>




      {/* Collapse Bar  2*/}
      <div  className="w-full my-3 md:my-4 rounded-md border-[#ffffff3b] border bg-gradient-to-br from-black to-[#0b0b2e] ">
      <div className="flex justify-between items-center py-2 px-4 md:py-3 rounded-md "> 
          <div className="font-medium text-lg text-white">Course Features</div>
          <button
      className="block text-white font-medium md:text-lg focus:outline-none hover:text-gray-300"
      onClick={handleToggle2}
    >
      {isCollapsed2 ? "Hide" : "Show"}
    </button>
        </div>

        <div
          className={`flex overflow-hidden w-full px-4 transition-all duration-300 ease-in-out ${
            isCollapsed2 ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
          }`}
        >
          <ul className="text-gray-300 text-sm md:text-base md:my-3 my-2">
          <li className='my-[2px] md:my-[3px] flex items-center ' > <BsFillCheckCircleFill className='mr-[5px] md:mr-[9px] bg-white rounded-full text-blue-500 ' /> Classes On Saturday & Sunday</li>
          <li className='my-[2px] md:my-[3px] flex items-center ' > <BsFillCheckCircleFill className='mr-[5px] md:mr-[9px] bg-white rounded-full text-blue-500 ' /> Personalized Mentorship from Experienced Traders</li>
              <li className='my-[2px] md:my-[3px] flex items-center ' > <BsFillCheckCircleFill className='mr-[5px] md:mr-[9px] bg-white rounded-full text-blue-500 ' /> Live Trading Sessions and Q&A with Instructors</li>
              <li className='my-[2px] md:my-[3px] flex items-center ' > <BsFillCheckCircleFill className='mr-[5px] md:mr-[9px] bg-white rounded-full text-blue-500 ' /> Dedicated Online Community for Course Participants</li>

              <li className='my-[2px] md:my-[3px] flex items-center ' > <BsFillCheckCircleFill className='mr-[5px] md:mr-[9px] bg-white rounded-full text-blue-500 ' /> Access to Proprietary Trading Tools and Resources</li>

              <li className='my-[2px] md:my-[3px] flex items-center ' > <BsFillCheckCircleFill className='mr-[5px] md:mr-[9px] bg-white rounded-full text-blue-500 ' /> Optional One-on-One Coaching Sessions</li>
          </ul>
        </div>
      </div>















      


      <div className="text-center mt-8">
          <p className="text-lg text-gray-300 rubik">COURSE PRICE – <del>4999</del> 50% Discount</p>
          <p className="text-xl font-bold rubik">(COURSE PRICE – 2499/- ONLY)</p>
          <p className="text-sm md:text-base text-gray-500 mt-2 roboto">Refund Policy- Please make sure about the special facilities before taking the course. No claim of refund will be accepted whatsoever.</p>
          <p className="text-lg font-bold mt-4 rubik">PAYMENT- UPI ID- smalakar773-2@okaxis</p>
          <p className="text-sm md:text-base text-gray-500 mt-2 roboto">After Payment, send the payment screenshot and these details</p>
          <ul className="list-disc list-inside text-left mt-4 poppins">
            <li className="text-center">Full Name- XYZ</li>
            <li className="text-center">Mobile Number- 123456789</li>
            <li className="text-center">Email ID - abc@gmail.com</li>
          </ul>
          <p class="text-sm md:text-base text-gray-500 mt-4 roboto">Send the details and payment screenshot on Telegram:</p>
    <p class="text-sm md:text-base text-gray-500 mt-2 roboto">Telegram Username: <a href="https://web.telegram.org/k/#@Subrata_Malakar_1" target="_blank" rel="noreferrer" class="text-blue-400 font-bold">@Subrata_Malakar_1</a></p>
        </div>
        
        <a href={`/payforcourse/${id}`} className=" bg-blue-600 hover:bg-blue-700 px-2 py-2 rounded-xl mt-4 md:mt-5 font-semibold rubik">Join the Course</a>


        
    </div>)
}

  
    </div>
  )
}

export default CourseInfo