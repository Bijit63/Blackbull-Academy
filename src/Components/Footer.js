import React from 'react'
import instagram from '../images/insta.png'
import gmail from '../images/gmail.png'
import telegram from '../images/telegram.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#060613c9] md:pt-10 pt-5">
      <div className="max-w-7xl m-auto text-gray-800 flex flex-wrap justify-left">



        {/* Column 1 */}
        <div className="p-5 w-full sm:w-5/12 md:w-5/12 ">
          <div className="text-xs uppercase text-gray-400 font-medium mb-4 md:mb-6">
            Contact Us
          </div>
                <hr className='w-full md:hidden block my-3 border-gray-400 '/>
          <Link
            to="https://web.telegram.org/k/#@Subrata_Malakar_1"
            target="_blank"  rel="noreferrer"
            className="my-3 block text-gray-300 hover:text-yellow-500 text-base font-medium duration-700"
          >
            <img
              src={telegram}
              className="h-7 md:my-[6px] my-[0px]  rounded-lg inline-block mr-2"
              alt=""
            />
            Subrata_Malakar_1
          </Link>
          <Link
            to="https://www.instagram.com/black_bull.3/"
            target="_blank"  rel="noreferrer"
            className="my-3 block text-gray-300 hover:text-yellow-500 text-base font-medium duration-700"
          >
            <img
              src={instagram}
              className="h-7 md:my-[6px] my-[0px]  rounded-lg inline-block mr-2"
              alt=""
            />
            black_bul.3
          </Link>

          <Link
            to="mailto:traderblackbull773@gmail.com"
            target="_blank"  rel="noreferrer"
            className="my-3 items-center flex  text-gray-300 hover:text-yellow-500 text-base font-medium duration-700"
          >
            <img
              src={gmail}
              className="h-7 md:my-[6px] my-[0px]  rounded-lg inline-block mr-2"
              alt=""
            />
            <p className=''>traderblackbull773@gmail.com</p> 
          </Link>
        </div>





        {/* Column 2 */}
        <div className="p-5  sm:w-3/12 md:w-3/12  hidden sm:block ">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            More Links
          </div>
          <ul className="my-3 ">
            <li className='md:my-3 my-2' >
              <a
                href="https://zerodha.com/open-account?c=CL0086" target='_blank'
                className="text-gray-300  hover:text-yellow-500 text-base font-medium duration-700"
              >
                Open a Demat Account
              </a>
            </li>
           
            <li className='md:my-3 my-2' >
              <Link
                to="/"
                className="text-gray-300  hover:text-yellow-500 text-base font-medium duration-700"
              >
                Privacy Policy
              </Link>
            </li>
            <li className='md:my-3 my-2' >
              <Link
                to="/"
                className="text-gray-300  hover:text-yellow-500 text-base font-medium duration-700"
              >
                About Us
              </Link>
            </li>
            
      </ul>
      </div>




        
        {/* Column 3 */}
        <div className="p-5 w-full sm:w-4/12 md:w-4/12  ">
          <div className="text-xs uppercase text-gray-400 font-medium md:mb-6 mb-4">
            BlackBull Academy
          </div>
        <hr className='w-full md:hidden block my-3 border-gray-400 '/>
          <p className="md:my-3 my-2 block text-gray-300  text-base font-medium duration-700">
            Chart is your best friend
          </p>
          <p className="md:my-3 my-2 block text-gray-300 text-base font-medium duration-700">
            Daily write your trading journal
          </p>
          <p className="md:my-3 my-2 block text-gray-300 text-base font-medium duration-700">
            Always be ready with the right entry-level, target, and stoploss
          </p>
        </div>
      



    </div>

    <div className='text-center py-2 md:py-3 md:text-lg text-base roboto bg-black'>
   <span className='md:text-xl text-lg'>&#169;</span>  2023 - All rights reserved | <span className='text-yellow-500'> BlackBull Academy</span>
    </div>
    </footer>
  )
}

export default Footer