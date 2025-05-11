import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import {mindset_nav,technology_nav,travel_nav,animal_nav,kids_nav,health_nav } from './Const'; // Import the items from Const.js
import { FaChevronDown } from 'react-icons/fa';  // Import the ChevronDown icon


import {
  // Smartphone,Cpu, Code, Bug,
} from "lucide-react"; // install with: npm install lucide-react

function NavBar({toggleDarkMode, darkMode }) {

  const [openChildren, setOpenChildren] = useState(false); // For Children dropdown
  const [openMindset, setOpenMindset] = useState(false);  // for Mindset dropdown


  const dropdownRef = useRef(null);  // Ref for Mindset dropdown
const childrenRef = useRef(null);  // Ref for Children dropdown


const [openTechnology, setOpenTechnology] = useState(false);
const techRef = useRef(null);

const [openTravel, setOpenTravel] = useState(false);
const travelRef = useRef(null);

const [openHealth, setOpenHealth] = useState(false);
  const healthRef = useRef(null);

  const [openAnimals, setOpenAnimals] = useState(false);
  const animalsRef = useRef(null);
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenMindset(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenMindset(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (childrenRef.current && !childrenRef.current.contains(event.target)) {
        setOpenChildren(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (techRef.current && !techRef.current.contains(event.target)) {
        setOpenTechnology(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (travelRef.current && !travelRef.current.contains(event.target)) {
        setOpenTravel(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (healthRef.current && !healthRef.current.contains(event.target)) {
        setOpenHealth(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (animalsRef.current && !animalsRef.current.contains(event.target)) {
        setOpenAnimals(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  // this code is for the dropdown menu in the navbar. It uses React hooks to manage the state 
  // of the dropdowns and to handle clicks outside of them to close them. The `useEffect` hooks
  //  are used to set up and clean up event listeners for clicks outside the dropdowns. The `useRef`
  //  hooks are used to reference the dropdown elements so that we can check if a click occurred outside of them. 

  useEffect(() => {
    const body = document.body;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  
    if (
      openMindset ||
      openChildren ||
      openTechnology ||
      openTravel ||
      openHealth ||
      openAnimals
    ) {
      body.style.overflow = "hidden";
  
      // Prevent layout shift when hiding scrollbar
      if (scrollBarWidth > 0) {
        body.style.paddingRight = `${scrollBarWidth}px`;
      }
    } else {
      body.style.overflow = "auto";
      body.style.paddingRight = ""; // reset
    }
  
    return () => {
      body.style.overflow = "auto";
      body.style.paddingRight = "";
    };
  }, [
    openMindset,
    openChildren,
    openTechnology,
    openTravel,
    openHealth,
    openAnimals,
  ]);


    
  return (
    <>
{/* overlay for all dropdowns to close them when clicked outside */}
{(openMindset || openChildren || openTechnology || openTravel || openHealth || openAnimals) && (
 <div
 className="fixed inset-0 z-10 bg-black bg-opacity-50"
 onClick={() => {
   setOpenMindset(false);
   setOpenChildren(false);
   setOpenTechnology(false);
   setOpenTravel(false);
   setOpenHealth(false);
   setOpenAnimals(false);
 }}
></div>

)}

<nav className="
  hidden           // hidden by default
  lg:flex          // only show on desktop (≥1024px)
  z-30 space-x-4 font-semibold 
  absolute left-1/2 transform -translate-x-1/2
">

<div className="relative z-40" ref={childrenRef}>
     
      {/* Main Title */}
      <Link to="/" 
       // onClick={() => setOpenAnimals(!openAnimals)}
       className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-black" : "text-gray-100"}`}
       >
         Home
      </Link>
    
</div>




<div className="relative" ref={dropdownRef}>
  {/* Clickable Title */}
  <button
    onClick={() => setOpenMindset(!openMindset)}
    className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-black" : "text-gray-100"}`}
  >
    Mind-Set
    {/* Chevron Down icon stays next to the text */}
    <FaChevronDown
      className={`ml-1 inline transition-transform duration-300 ${openMindset ? "rotate-180" : "rotate-0"}`}
    />
  </button>

  {/* Dropdown */}
  {openMindset && (
    <div
      className={`
        absolute left-0 mt-4 w-[550px]
        bg-white border border-gray-200 dark:border-red-600 
        rounded-md shadow-md z-50
        transition-all duration-300 cursor-pointer
        ${darkMode ? "bg-gray-100" : "dark:bg-[#1f1f1f]"}
      `}
    >
      {/* Arrow */}
      <div
        className={`
          absolute -top-2 left-6 w-4 h-4
          bg-white border-l border-t border-gray-200 dark:border-red-600 
          transform rotate-45 transition-colors duration-300
          ${darkMode ? "" : "dark:bg-[#1f1f1f]"}
        `}
      ></div>

      {/* Items */}
      <ul className="grid grid-cols-2 gap-2 p-6 ml-[12px] text-sm font-medium">
        {mindset_nav.map(({ icon: Icon, text, link }) => (
          <li
            key={link}
            className={`flex items-center gap-3 p-2 transition-colors duration-300 ${
              darkMode ? "" : "dark:bg-[#1f1f1f]"
            }`}
          >
            <Icon className="w-5 h-5 text-red-500" />
            <Link
              to={link}
              onClick={() => setOpenMindset(false)}  // ✅ THIS IS MISSING IN OTHER PLACES
              className={`block text-base text-gray-800 transition-colors duration-300 ${
                darkMode ? "" : "dark:text-gray-100"
              }`}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>



<div className="relative z-40" ref={childrenRef}>
  {/* Clickable Title */}
  <button
    onClick={() => setOpenChildren(!openChildren)}
    className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-black" : "text-gray-100"}`}
  >
    Children
    {/* Chevron Down icon next to the text */}
    <FaChevronDown
      className={`ml-1 inline transition-transform duration-300 ${openChildren ? "rotate-180" : "rotate-0"}`}
    />
  </button>

  {/* Dropdown */}
  {openChildren && (
    <div
      className={`
        absolute left-0 mt-4 w-[550px]
        bg-white border border-gray-200 dark:border-red-600 
        rounded-md shadow-md z-50
        transition-all duration-300 cursor-pointer
        ${darkMode ? "bg-gray-100" : "dark:bg-[#1f1f1f]"}
      `}
    >
      {/* Arrow */}
      <div
        className={`
          absolute -top-2 left-6 w-4 h-4
          bg-white border-l border-t border-gray-200 dark:border-red-600 
          transform rotate-45 transition-colors duration-300
          ${darkMode ? "" : "dark:bg-[#1f1f1f]"}
        `}
      ></div>

      {/* Items */}
      <ul className="grid grid-cols-2 gap-2 p-6 ml-[12px] text-sm font-medium">
        {kids_nav.map(({ icon: Icon, text, link }) => (
          <li
            key={link}
            className={`flex items-center gap-3 p-2 transition-colors duration-300 ${
              darkMode ? "" : "dark:bg-[#1f1f1f]"
            }`}
          >
            <Icon className="w-5 h-5 text-red-500" />
            <Link
              to={link}
              onClick={() => setOpenChildren(false)}  // ✅ closes children dropdown
              className={`block text-gray-800 text-base transition-colors duration-300 ${
                darkMode ? "text-zinc-900" : "dark:text-gray-100"
              }`}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>




<div className="relative z-40" ref={techRef}>
  {/* Title */}
  <button
    onClick={() => setOpenTechnology(!openTechnology)}
    className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-black" : "text-gray-100"}`}
  >
    Technology
    {/* Chevron Down icon next to the text */}
    <FaChevronDown
      className={`ml-1 inline transition-transform duration-300 ${openTechnology ? "rotate-180" : "rotate-0"}`}
    />
  </button>

  {/* Dropdown */}
  {openTechnology && (
    <div
      className={`
        absolute left-0 mt-4 w-[570px] 
        bg-white border border-gray-200 
        dark:border-red-600 
        rounded-md shadow-md z-50
        transition-all duration-300 cursor-pointer
        ${darkMode ? "bg-black" : "dark:bg-[#1f1f1f]"}
      `}
    >
      {/* Arrow */}
      <div
        className={`
          absolute -top-2 left-6 w-4 h-4 
          bg-white border-l border-t border-gray-200 
          dark:border-red-600 
          transform rotate-45
          ${darkMode ? "" : "dark:bg-[#1f1f1f]"}
        `}
      ></div>

      {/* Items */}
      <ul className="grid grid-cols-2 gap-1 p-6 ml-[12px] text-sm font-medium">
        {technology_nav.map(({ icon: Icon, text, link }) => (
          <li
            key={link}
            className={`flex items-center gap-3 p-2 transition-colors duration-300 ${
              darkMode ? "" : "dark:bg-[#1f1f1f]"
            }`}
          >
            <Icon className="w-5 h-5 text-red-500" />
            <Link
              to={link}
              onClick={() => setOpenTechnology(false)}  // ✅ closes technology dropdown

              className={`block text-gray-800 text-base transition-colors duration-300 ${
                darkMode ? "" : "dark:text-gray-100"
              }`}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>



<div className="relative z-40" ref={travelRef}>
  {/* Main Title */}
  <button
    onClick={() => setOpenTravel(!openTravel)}
    className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-black" : "text-gray-100"}`}
  >
    Travel
    {/* Chevron Down icon next to the text */}
    <FaChevronDown
      className={`ml-1 inline transition-transform duration-300 ${openTravel ? "rotate-180" : "rotate-0"}`}
    />
  </button>

  {/* Dropdown */}
  {openTravel && (
    <div
      className={`
        absolute left-0 mt-4 w-[580px] 
        bg-white border border-gray-200 
        dark:border-red-600 
        rounded-md shadow-md z-50
        transition-all duration-300 cursor-pointer
        ${darkMode ? "bg-gray-100" : "dark:bg-[#1f1f1f]"}
      `}
    >
      {/* Arrow */}
      <div
        className={`
          absolute -top-2 left-6 w-4 h-4 
          bg-white border-l border-t border-gray-200 
          dark:border-red-600 
          transform rotate-45
          ${darkMode ? "" : "dark:bg-[#1f1f1f]"}
        `}
      ></div>

      {/* Items */}
      <ul className="grid grid-cols-2 gap-2 p-6 ml-[12px] text-sm font-medium">
        {travel_nav.map(({ icon: Icon, text, link }) => (
          <li
            key={link}
            className={`flex items-center gap-3 p-2 transition-colors duration-300 ${
              darkMode ? "" : "dark:bg-[#1f1f1f]"
            }`}
          >
            <Icon className="w-5 h-5 text-red-500" />
            <Link
              to={link}
              onClick={() => setOpenTravel(false)}  // ✅ closes travel dropdown

              className={`block text-gray-800 text-base transition-colors duration-300 ${
                darkMode ? "" : "dark:text-gray-100"
              }`}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>




<div className="relative z-40" ref={healthRef}>
      {/* Main Title */}
      <button
        onClick={() => setOpenHealth(!openHealth)}
        className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-black" : "text-gray-100"}`}
      >
        Health
         {/* Chevron Down icon stays next to the text */}
    <FaChevronDown
      className={`ml-1 inline transition-transform duration-300 ${openHealth ? "rotate-180" : "rotate-0"}`}
    />
      </button>

      {/* Dropdown */}
      {openHealth && (
        <div
          className={`
            absolute left-0 mt-4 w-[520px]
            bg-white border border-gray-200
            dark:border-red-600 
            rounded-md shadow-md z-50
            transition-all duration-300
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

          {/* List */}
          <ul className="grid grid-cols-2 gap-2 p-6 ml-[12px] text-sm font-medium">
            {health_nav.map(({ icon: Icon, text, link }) => (
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
                  onClick={() => setOpenHealth(false)}  // ✅ closes children dropdown

                  className={`
                    block text-gray-800 text-base transition-colors duration-300
                    ${darkMode ? "" : "dark:text-gray-100"}
                  `}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

    <div className="relative z-40" ref={animalsRef}>
      {/* Main Title */}
      <button
        onClick={() => setOpenAnimals(!openAnimals)}
        className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-black" : "text-gray-100"}`}
      >
        Animals
         {/* Chevron Down icon stays next to the text */}
    <FaChevronDown
      className={`ml-1 inline transition-transform duration-300 ${openAnimals ? "rotate-180" : "rotate-0"}`}
    />
      </button>

      {/* Dropdown */}
      {openAnimals && (
        <div
          className={`
            absolute left-0 mt-4 w-[550px]
            bg-white border border-gray-200
            dark:border-red-600 
            rounded-md shadow-md z-50
            transition-all duration-300
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

          {/* List */}
          <ul className="grid grid-cols-2 gap-2 p-6 ml-[12px] text-sm font-medium">
            {animal_nav.map(({ icon: Icon, text, link }) => (
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
                  onClick={() => setOpenAnimals(false)}  // ✅ closes children dropdown

                  className={`
                    block text-gray-800 text-base transition-colors duration-300
                    ${darkMode ? "" : "dark:text-gray-100"}
                  `}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

    

    <div className="relative z-40" ref={animalsRef}>
      {/* Main Title */}
      <Link to="/testlink" 
       // onClick={() => setOpenAnimals(!openAnimals)}
       className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-black" : "text-gray-100"}`}
       >
         Admin
      </Link>
       
    

     
    </div>

    
  

          </nav>

  

          

      

    </>
  );
}
export default NavBar;



