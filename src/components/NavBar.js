import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import {mindset_nav,technology_nav,travel_nav,animal_nav,kids_nav,health_nav } from './Const'; // Import the items from Const.js


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

  return (
    <>
<nav className="hidden md:flex space-x-6 font-semibold absolute left-1/2 transform -translate-x-1/2">
<div className="relative z-40" ref={dropdownRef}>
  {/* Clickable Title */}
  <button
    onClick={() => setOpenMindset(!openMindset)}
    className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-black" : "text-gray-100"}`}
  >
    Mind-Set
  </button>

  {/* Dropdown */}
  {openMindset && (
    <div
      className={`
        absolute left-0 mt-3 w-[520px]
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
      <ul className="grid grid-cols-2 gap-3 p-6 ml-[12px] text-sm font-medium">
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
              className={`block text-gray-800 transition-colors duration-300 ${
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
      </button>

      {/* Dropdown */}
      {openChildren && (
        <div
          className={`
            absolute left-0 mt-3 w-[520px]
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
          <ul className="grid grid-cols-2 gap-3 p-6 ml-[12px] text-sm font-medium">
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
                  className={`block text-gray-800 transition-colors duration-300 ${
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

    <div className="relative z-40" ref={techRef}>
      {/* Title */}
      <button
        onClick={() => setOpenTechnology(!openTechnology)}
        className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-black" : "text-gray-100"}`}
      >
        Technology
      </button>

      {/* Dropdown */}
      {openTechnology && (
        <div
          className={`
            absolute left-0 mt-3 w-[520px] 
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
          <ul className="grid grid-cols-2 gap-3 p-6 ml-[12px] text-sm font-medium">
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
                  className={`block text-gray-800 transition-colors duration-300 ${
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
      </button>

      {/* Dropdown */}
      {openTravel && (
        <div
          className={`
            absolute left-0 mt-3 w-[520px] 
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
          <ul className="grid grid-cols-2 gap-3 p-6 ml-[12px] text-sm font-medium">
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
                  className={`block text-gray-800 transition-colors duration-300 ${
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
      </button>

      {/* Dropdown */}
      {openHealth && (
        <div
          className={`
            absolute left-0 mt-3 w-[520px]
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
          <ul className="grid grid-cols-2 gap-3 p-6 ml-[12px] text-sm font-medium">
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
      )}
    </div>

    <div className="relative z-40" ref={animalsRef}>
      {/* Main Title */}
      <button
        onClick={() => setOpenAnimals(!openAnimals)}
        className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-black" : "text-gray-100"}`}
      >
        Animals
      </button>

      {/* Dropdown */}
      {openAnimals && (
        <div
          className={`
            absolute left-0 mt-3 w-[520px]
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
          <ul className="grid grid-cols-2 gap-3 p-6 ml-[12px] text-sm font-medium">
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
      )}
    </div>
          </nav>
    </>
  );
}
export default NavBar;



