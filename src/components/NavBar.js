import React from "react";
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import {mindset_nav,technology_nav,travel_nav,animal_nav } from './Const'; // Import the items from Const.js

// import { FaDog, FaCat, FaFish, FaPaw, FaRecycle, FaLeaf, FaFlask, FaCamera, FaHandsHelping, FaHeartbeat } from 'react-icons/fa';
// import { FaPlane, FaGlobe, FaHotel, FaTree, FaUserAlt, FaUsers, FaMoneyBillAlt, FaCar, FaLaptop, FaShip, FaSpa, FaPen } from 'react-icons/fa';

// import {
//   Lightbulb,Users,Briefcase,Layers,DollarSign,BookOpen,Handshake,AlertTriangle,Heart,
// } from "lucide-react";

import {
  // Smartphone,Cpu, Code, Bug,
} from "lucide-react"; // install with: npm install lucide-react

function NavBar({toggleDarkMode, darkMode }) {
    
   
  
  

  return (
    <>
<nav className="hidden md:flex space-x-6 font-semibold absolute left-1/2 transform -translate-x-1/2">
          <div className="relative group">
  {/* Hover zone around the title */}
  <div className="h-[70px] w-full absolute top-0 left-0 z-[220px]"></div>
  {/* Main Title */}
  <Link
    to=""
    className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-black" : "text-gray-100"}`}
    >
    Mind-Set
  </Link>
  {/* Dropdown */}
  <div
    className={`
      absolute left-0 mt-3 w-[520px]
      bg-white border border-gray-200
 dark:border-red-600 
       rounded-md shadow-md
      opacity-0 pointer-events-none
      group-hover:opacity-100 group-hover:pointer-events-auto
      transition-all duration-300 z-50
      cursor-pointer hover:text-red-600 
      ${darkMode ? "bg-gray-100" : "dark:bg-[#1f1f1f]"}
    `}
  >
    {/* Arrow pointing to the title */}
    <div
      className={`
        absolute -top-2 left-6 w-4 h-4
        bg-white border-l border-t border-gray-200
 dark:border-red-600 
        transform rotate-45 transition-colors duration-300
        ${darkMode ? "" : "dark:bg-[#1f1f1f]"}
      `}
    ></div>
    <ul className="grid grid-cols-2 gap-3 p-6 ml-[12px] text-sm font-medium">
      {
     mindset_nav.map(({ icon: Icon, text, link }) => (
        <li
          key={link}
          className={`
            flex items-center gap-3
            p-2 transition-colors duration-300
            ${darkMode ? "" : "dark:bg-[#1f1f1f]"}
          `}
        >
          <Icon className="w-5 h-5 text-red-500" />
          <Link 
            to={link} 
            className={`
              block text-gray-800 transition-colors duration-300
              ${darkMode ? "" : "dark:text-gray-100"}
            `}
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
</div>

<Link
  to=""
  // smooth={true}
  // duration={500}
  className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-black" : "text-gray-100"}`}
>
  Childrens
</Link>


<div className="relative group">
  {/* Hover zone around the title */}
  <div className="h-[70px] w-full absolute top-[70px] left-0 z-[221px]"></div>

  {/* Main Title */}
  <Link
    to=""
    // className="relative z-50 cursor-pointer text-gray-100 hover:text-red-600 dark:text-gray-100 dark:hover:text-red-600 transition-colors duration-300"
    className={`cursor-pointer z-20 hover:text-red-600 ${darkMode ? "text-black" : "text-gray-100"}`}

  >
    Technology
  </Link>

  {/* Dropdown */}
  <div
className={`         
absolute left-0 mt-3 w-[520px] 
                bg-white border border-gray-200 
                dark:border-red-600 
                rounded-md shadow-md 
                opacity-0 pointer-events-none 
                group-hover:opacity-100 group-hover:pointer-events-auto 
                transition-all duration-300 z-50"
                cursor-pointer hover:text-red-600 ${darkMode ? " bg-black" : "dark:bg-[#1f1f1f]"}`}
  >
    {/* Arrow pointing to the title */}
  <div
      
                 className={`
                  dark:border-red-600 

                  absolute -top-2 left-6 w-4 h-4 
                 bg-white border-l border-t border-gray-200 
                  dark:border-gray-700 
                 transform rotate-45 transition-colors duration-300
                  ${darkMode ? "" : "dark:bg-[#1f1f1f]"}`}


                 
    ></div>
<ul className="grid grid-cols-2 gap-3 p-6 ml-[12px] text-sm font-medium">
  {technology_nav.map(({ icon: Icon, text, link }) => (
    <li
      key={link}
      // className="flex items-center gap-1 
      //            bg-gray-50 dark:bg-gray-100
      //            dark:hover:bg-[#2c2c2c]   
      //            p-2 rounded-md transition-colors duration-300"

                 className={`
                 flex items-center gap-3 
                  p-2 transition-colors duration-300"
                  ${darkMode ? "" : "dark:bg-[#1f1f1f]"}`}

    >
      <Icon className="w-15 h-5 text-red-500" />
      <Link to={link} 
      // className="
      // block text-gray-800 dark:text-gray-900 transition-colors duration-300 "
      
      className={`
         block text-gray-800  transition-colors duration-300 "
         ${darkMode ? "" : "dark:text-gray-100"}`}
      >
        {text}
      </Link>
    </li>
  ))}
</ul>

  </div>
</div>

<div className="relative group">
  {/* Hover zone around the title */}
  <div className="h-[70px] w-full absolute top-[350px] left-0 z-[225px]"></div>

  {/* Main Title */}
  <Link
    to=""
    className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-black" : "text-gray-100"}`}
  >
    Travel
  </Link>

  {/* Dropdown */}
  <div
    className={`absolute left-0 mt-3 w-[520px] 
                bg-white border border-gray-200 
                dark:border-red-600 
                rounded-md shadow-md 
                opacity-0 pointer-events-none 
                group-hover:opacity-100 group-hover:pointer-events-auto 
                transition-all duration-300 z-50"
                cursor-pointer hover:text-red-600 ${darkMode ? " bg-gray-100" : "dark:bg-[#1f1f1f]"}`}
  >
    {/* Arrow pointing to the title */}
    <div
      className={`
        absolute -top-2 left-6 w-4 h-4 
        bg-white border-l border-t border-gray-200 
                  dark:border-red-600 
        transform rotate-45 transition-colors duration-300
        ${darkMode ? "" : "dark:bg-[#1f1f1f]"}
      `}
    ></div>

    <ul className="grid grid-cols-2 gap-3 p-6 ml-[12px] text-sm font-medium">
      {travel_nav.map(({ icon: Icon, text, link }) => (
        <li
          key={link}
          className={`
            flex items-center gap-3 
            p-2 transition-colors duration-300"
            ${darkMode ? "" : "dark:bg-[#1f1f1f]"}
          `}
        >
          <Icon className="w-5 h-5 text-red-500" />
          <Link
            to={link}
            className={`
              block text-gray-800 transition-colors duration-300"
              ${darkMode ? "" : "dark:text-gray-100"}
            `}
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
</div>


<Link
  to=""
  // smooth={true}
  // duration={500}
  className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-black" : "text-gray-100"}`}
>
  Health
</Link>
<div className="relative group">
  {/* Hover zone around the title */}
  <div className="h-[70px] w-full absolute top-[420px] left-0 z-[226px]"></div>

  {/* Main Title */}
  <Link
    to="/animals"
    className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-black" : "text-gray-100"}`}
  >
    Animals
  </Link>

  {/* Dropdown */}
  <div
    className={`
      absolute left-0 mt-3 w-[520px] 
      bg-white border border-gray-200 
                dark:border-red-600 
      rounded-md shadow-md 
      opacity-0 pointer-events-none 
      group-hover:opacity-100 group-hover:pointer-events-auto 
      transition-all duration-300 z-50
      cursor-pointer hover:text-red-600 ${darkMode ? "bg-gray-100" : "dark:bg-[#1f1f1f]"}`}
  >
    {/* Arrow pointing to the title */}
    <div
      className={`
        absolute -top-2 left-6 w-4 h-4 
        bg-white border-l border-t border-gray-200 
                  dark:border-red-600 
        transform rotate-45 transition-colors duration-300
        ${darkMode ? "" : "dark:bg-[#1f1f1f]"}`}
    ></div>

    <ul className="grid grid-cols-2 gap-3 p-6 ml-[12px] text-sm font-medium">
      {animal_nav.map(({ icon: Icon, text, link }) => (
        <li
          key={link}
          className={`
            flex items-center gap-3 
            p-2 transition-colors duration-300
            ${darkMode ? "" : "dark:bg-[#1f1f1f]"}`}
        >
          <Icon className="w-5 h-5 text-red-500" />
          <Link to={link} className={`
            block text-gray-800 transition-colors duration-300
            ${darkMode ? "" : "dark:text-gray-100"}`}
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
</div>
          </nav>
    </>
  );
}
export default NavBar;



