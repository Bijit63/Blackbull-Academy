import React, { useState } from "react";
import { Link } from "react-router-dom";

const CourseDetails = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const [isCollapsed2, setIsCollapsed2] = useState(false);

  const handleToggle2 = () => {
    setIsCollapsed2(!isCollapsed2);
  };

  return (
    <div id="info" className="flex flex-col items-center py-20 md:py-32  mx-auto md:w-[80vw] lg:w-[60vw]">

<h2 data-aos='fade-up' className="text-3xl md:text-5xl poppins text-center font-medium text-yellow-700 mb-4">
          Course Details
        </h2>
        <hr data-aos='fade-up' className="w-full mb-8 border-slate-700"/>
        <p data-aos='fade-up' className=" text-lg text-gray-700 mb-8 text-center">
          Our 2-month mentorship program is designed to teach you everything you need to know about trading options in the stock market, regardless of your experience level. BlackBull Academy will guide you through each step of the process, from setting up your trading account to executing profitable trades.
          <p className="bg-bold  poppins text-gray-400">(Limited seats - 25)</p>
        </p>
        


    <div data-aos='fade-up' className="flex flex-col items-center m-2 px-7 py-3  md:flex md:justify-center sm:w-[90vw] md:w-[80vw] lg:w-[60vw]">
      {/* Video */}
      <div className="w-[380px] h-[250px] sm:w-[450px] sm:h-[280px] md:w-[520px] md:h-[310px]  bg-gray-600"></div>

      {/* <hr className="border w-full"/>  */}





         {/* Collapse Bar  1*/}
      <div  className="w-full my-3 md:my-4 rounded-md">
        <div className="flex justify-between items-center py-1 px-2 md:px-4 md:py-2 rounded-md bg-slate-800">
          <div className="font-medium text-lg text-white">Course Curriculum</div>
          <button
            className="block text-white font-medium md:text-lg"
            onClick={handleToggle}
          >
            {isCollapsed ? "Hide" : "Show"}
          </button>
        </div>

        <div  className={`flex overflow-hidden w-full mt-2 transition-all duration-300 ease-in-out ${ isCollapsed ? "opacity-100 max-h-[600px]" : "opacity-0 max-h-0"}`}  >
          <ul  className="text-[#ffffff8f] md:ml-4 ml-1 text-sm md:text-base">
            <li>- Price Action and Technical Analysis</li>
            <li>- Draw Support and Resistance + What Indicator Do I Use</li>
            <li>- Fibo Setup</li>
            <li>- All Important Chart Pattern + Candlestick</li>
            <li>- Theory Will Be Taught + Live Market</li>
            <li>- Entry + Exit + Trailing Stoploss + Putting the Stoploss</li>
            <li>- All My Strategies + Planning for Entry</li>
            <li>- Double Bottom &amp; Double Top Trading Plan</li>
            <li>- Option (FNO) &amp; Equity Trading</li>
            <li>- Option Buying &amp; Option Selling Theory Class</li>
            <li>- Trading with Sideways Market + How to Hedge the Market</li>
            <li>- BankNifty &amp; Nifty Relationship</li>
            <li>- Risk Management + Money Management</li>
            <li>- Psychology &amp; Discipline of a Trader</li>
            <li>- Option Strike Price Selection + Option Greeks</li>
          </ul>
        </div>
      </div>




      {/* Collapse Bar  2*/}
      <div  className="w-full my-3 md:my-4 rounded-md">
        <div className="flex justify-between items-center py-1 px-2 md:px-4 md:py-2 rounded-md bg-slate-800">
          <div className="font-medium text-lg text-white">Course Features</div>
          <button
            className="block text-white font-medium md:text-lg"
            onClick={handleToggle2}
          >
            {isCollapsed2 ? "Hide" : "Show"}
          </button>
        </div>

        <div
          className={`flex overflow-hidden w-full mt-2 transition-all duration-300 ease-in-out ${
            isCollapsed2 ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
          }`}
        >
          <ul  className="text-[#ffffff8f] md:ml-4 ml-1 text-sm md:text-base">
          <li> - Personalized Mentorship from Experienced Traders</li>
              <li> - Live Trading Sessions and Q&A with Instructors</li>
              <li> - Dedicated Online Community for Course Participants</li>
              <li> - Access to Proprietary Trading Tools and Resources</li>
              <li> - Optional One-on-One Coaching Sessions</li>
          </ul>
        </div>
      </div>

      </div>


      <div className="text-center mt-8">
          <p className="text-lg font-bold rubik">COURSE PRICE – 4999/- ONLY</p>
          <p className="text-sm md:text-base text-gray-500 mt-2 roboto">Refund Policy- Please make sure about the special facilities before taking the course. No claim of refund will be accepted whatsoever.</p>
          <p className="text-lg font-bold mt-4 rubik">PAYMENT- UPI ID- smalakar773-2@okaxis</p>
          <p className="text-sm md:text-base text-gray-500 mt-2 roboto">After Payment, send the payment screenshot and these details</p>
          <ul className="list-disc list-inside text-left mt-4 poppins">
            <li className="text-center">Full Name- XYZ</li>
            <li className="text-center">Mobile Number- 123456789</li>
            <li className="text-center">Email ID</li>
          </ul>
          <p className="text-sm md:text-base text-gray-500 mt-4 roboto">Send On Details TELEGRAM - <Link target="_blank" className="text-blue-400"  rel="noreferrer" to="https://web.telegram.org/k/#@Subrata_Malakar_1">@Subrata_Malakar_1</Link> </p>
        </div>
    </div>
  );
};

export default CourseDetails;