import React from "react";
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import { FaDog, FaCat, FaFish, FaPaw, FaRecycle, FaLeaf, FaFlask, FaCamera, FaHandsHelping, FaHeartbeat } from 'react-icons/fa';
import { FaPlane, FaGlobe, FaHotel, FaTree, FaUserAlt, FaUsers, FaMoneyBillAlt, FaCar, FaLaptop, FaShip, FaSpa, FaPen } from 'react-icons/fa';

import {
  Lightbulb,Users,Briefcase,Layers,DollarSign,BookOpen,Handshake,AlertTriangle,Heart,
} from "lucide-react";

import {
  Smartphone,Cpu, Laptop,Settings, Code,AppWindow, Timer, ShieldCheck, Bug,
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
    className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-red-700" : "text-gray-100"}`}
    >
    Mind-Set
  </Link>
  {/* Dropdown */}
  <div
    className={`
      absolute left-0 mt-3 w-[520px]
      bg-white border border-gray-200
      dark:border-gray-600
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
        dark:border-gray-700
        transform rotate-45 transition-colors duration-300
        ${darkMode ? "" : "dark:bg-[#1f1f1f]"}
      `}
    ></div>
    <ul className="grid grid-cols-2 gap-3 p-6 ml-[12px] text-sm font-medium">
      {[
        { icon: Lightbulb, text: "Innovation Mindset", link: "/mindset/innovation" },
        { icon: Users, text: "Leadership Mindset", link: "/mindset/leadership" },
        { icon: Briefcase, text: "Entrepreneurial Thinking", link: "/mindset/entrepreneurship" },
        { icon: Layers, text: "Systems Thinking", link: "/mindset/systems" },
        { icon: DollarSign, text: "Money Mindset", link: "/mindset/money" },
        { icon: Code, text: "Programming Belief", link: "/mindset/programming" },
        { icon: BookOpen, text: "Learning & Studying", link: "/mindset/learning" },
        { icon: Handshake, text: "Negotiation & Influence", link: "/mindset/negotiation" },
        { icon: AlertTriangle, text: "Overcoming Poverty", link: "/mindset/poverty" },
        { icon: Heart, text: "Life Balance & Resilience", link: "/mindset/life" },
      ].map(({ icon: Icon, text, link }) => (
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
  className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-gray-700" : "text-gray-100"}`}
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
                cursor-pointer hover:text-red-600 ${darkMode ? " bg-gray-100" : "dark:bg-[#1f1f1f]"}`}
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
  {[
    { icon: Smartphone, text: "Smartphone Reviews", link: "/tech/smartphones" },
    { icon: Cpu, text: "Best AI Tools", link: "/tech/ai-tools" },
    { icon: Laptop, text: "Laptop Comparisons", link: "/tech/laptops" },
    { icon: Settings, text: "Build a PC", link: "/tech/build-a-pc" },
    { icon: Code, text: "Learn to Code", link: "/tech/coding" },
    { icon: AppWindow, text: "Top Apps", link: "/tech/apps" },
    { icon: Timer, text: "Tech for Productivity", link: "/tech/productivity" },
    { icon: Bug, text: "Hacking Basics", link: "/tech/hacking-basics" },
    { icon: ShieldCheck, text: "Cybersecurity Tips", link: "/tech/cybersecurity" },
    { icon: Code, text: "Learn Block Chain", link: "/tech/blockChain" },

  ].map(({ icon: Icon, text, link }) => (
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
    className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-gray-700" : "text-gray-100"}`}
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
      {[
        { icon: FaPlane, text: "Adventure Travel", link: "/travel/adventure" },
        { icon: FaGlobe, text: "Cultural Travel", link: "/travel/cultural" },
        { icon: FaHotel, text: "Luxury Travel", link: "/travel/luxury" },
        { icon: FaTree, text: "Sustainable Travel", link: "/travel/sustainable" },
        { icon: FaUserAlt, text: "Solo Travel", link: "/travel/solo" },
        { icon: FaUsers, text: "Family Travel", link: "/travel/family" },
        { icon: FaMoneyBillAlt, text: "Budget Travel", link: "/travel/budget" },
        { icon: FaCar, text: "Road Trips", link: "/travel/road-trips" },
        { icon: FaLaptop, text: "Digital Nomad Travel", link: "/travel/digital-nomad" },
        { icon: FaShip, text: "Cruise Travel", link: "/travel/cruise" },
        { icon: FaSpa, text: "Wellness Travel", link: "/travel/wellness" },
        { icon: FaPen, text: "Travel Blogging/Vlogging", link: "/travel/blogging" },
      ].map(({ icon: Icon, text, link }) => (
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
  className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-gray-700" : "text-gray-100"}`}
>
  Health
</Link>
<div className="relative group">
  {/* Hover zone around the title */}
  <div className="h-[70px] w-full absolute top-[420px] left-0 z-[226px]"></div>

  {/* Main Title */}
  <Link
    to="/animals"
    className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-gray-700" : "text-gray-100"}`}
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
      {[
        { icon: FaDog, text: "Dog Training & Care", link: "/animals/dogs" },
        { icon: FaCat, text: "Cat Behavior & Care", link: "/animals/cats" },
        { icon: FaFish, text: "Aquarium Fish & Marine Life", link: "/animals/fish" },
        { icon: FaPaw, text: "Exotic Pets Care", link: "/animals/exotic-pets" },
        { icon: FaRecycle, text: "Conservation Efforts", link: "/animals/conservation" },
        { icon: FaLeaf, text: "Endangered Species", link: "/animals/endangered" },
        { icon: FaFlask, text: "Animal Science & Research", link: "/animals/science" },
        { icon: FaCamera, text: "Wildlife Photography", link: "/animals/photography" },
        { icon: FaHandsHelping, text: "Animal Rescue & Adoption", link: "/animals/rescue" },
        { icon: FaHeartbeat, text: "Animal Health & Nutrition", link: "/animals/health" },
      ].map(({ icon: Icon, text, link }) => (
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



