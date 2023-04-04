import React, { useState } from "react";
import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav id="navbar" className="bg-[#070A41] flex flex-col items-center md:px-6 px-3 md:py-3 py-2  rounded-sm">
      <div className="flex w-full justify-between items-center">
      <div className="flex items-center">
        <img src={logo} className="md:h-[40px] h-[30px] rounded-full"  alt="" />
        <div id="brandname" className="text-white md:text-[27px] text-[22px] md:pt-[6px] pt-[7px] ml-[5px] md:ml-[10px]">
          BlackBull Academy
        </div>
      </div>

      {/* Collapse button for small screens */}
      <button
          className="block md:hidden text-white text-2xl"
          onClick={handleToggle}
        >
          {isCollapsed ? "×" : "☰"}
        </button>





      {/* Full menu for medium and large screens */}
      <div className="roboto hidden md:block ">
        <ul className="flex text-gray-100 text-lg">
          <li className="mr-6">
            <Link to="/" className="hover:border-b-2 border-[#576CBC] duration-150 ease-in-out">
              Features
            </Link>
          </li>
          <li className="mr-6">
            <Link to="/" className="hover:border-b-2 border-[#576CBC] duration-150 ease-in-out">
              Courses
            </Link>
          </li>
          <li className="mr-6">
            <Link to="/" className="hover:border-b-2 border-[#576CBC] duration-150 ease-in-out">
              Why Join Us
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:border-b-2 border-[#576CBC] duration-150 ease-in-out">
              About Us
            </Link>
          </li>
        </ul>
      </div>
      </div>



       {/* Collapsible menu for small screens */}
      <div
        id="menu"
        className={`roboto overflow-hidden flex md:hidden w-full mt-2 transition-all duration-500 ease-in-out ${
          isCollapsed ? "opacity-100 h-36" : "opacity-0 h-0"
        }`}
      >
        <ul className="text-gray-100 text-lg">
          <li className="mb-2">
            <Link to="/" className="hover:text-gray-400">
              Features
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/" className="hover:text-gray-400">
              Courses
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/" className="hover:text-gray-400">
              Why Join Us
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-400">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
