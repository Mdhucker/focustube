import { useEffect, useState } from "react";
import logob from '../assets/images/logob.avif'; // adjust path as needed
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
// import SideBar from './SideBar';
// import { mindsetItems, technologyItems, travelItems, animalItems } from './Const'; // Import the items from Const.js
import { mindsetItems, technologyItems,travelItems,   animalItems} from './Const'; // Import the items from Const.js

function Header({ toggleDarkMode, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  // const [openHealth, setOpenHealth] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // ✅ Fix: Add this back


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [openHealth, setOpenHealth] = useState(false);
  const [openMind, setOpenMind] = useState(false);



  return (
    <>
      {/* Header Section */}
      <header
        className={`px-4 py-2 shadow-md sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? darkMode
              ? "bg-[rgba(252,250,247,0.85)]"
              : "bg-[rgba(18,18,18,0.85)]"
            : darkMode
            ? "bg-[#fcfaf7]"
            : "bg-[#121212]"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-gray-700" : "text-gray-100"}`}
          >
            {/* Left: Logo */}
            <div className="flex items-center space-x-2">
              <img
                src={logob}
                alt="FocusTube Logo"
                className="h-10 w-10 object-cover rounded-full border border-gray-300 dark:border-gray-600"
              />
              <div className="text-2xl font-bold">
                <span className={`${darkMode ? "text-black" : "text-[#FF0000]"}`}>Focus</span>
                <span className={`${darkMode ? "text-[#FF0000]" : "text-white"}`}>Tube</span>
              </div>
            </div>
          </Link>

          {/* Center: Navigation (Desktop) */}
          <NavBar />

          {/* Right: Dark Mode, Hamburger */}
          <div className="flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`text-2xl transition-colors ${darkMode ? "text-gray-400" : "text-gray-700"}`}
            >
              {darkMode ? "🌙" : "☀️"}
            </button>

            {/* Search Input (Visible in Desktop and Mobile) */}
            <div className="relative">
              <div className="relative hidden md:block w-64">
                <input
                  type="text"
                  placeholder="Search All Topics Related..."
                  className={`w-full pl-10 pr-4 py-2 rounded-md border text-sm 
                    ${darkMode ? "bg-white text-gray-700 border-[#555]" : "bg-[#333333] text-gray-100 border-gray-300"} 
                    focus:outline-none focus:ring-1 focus:ring-[#FF0000] focus:border-transparent transition-all`}
                />
              </div>
            </div>

            {/* Hamburger Icon (Mobile Only) */}
            <button
              onClick={handleMenuToggle}
              className={`text-2xl md:hidden focus:outline-none 
                ${darkMode ? "text-black" : "text-white"}`}
            >
              {menuOpen ? "X" : "☰"}
            </button>



            
          </div>
        </div>

      {/* Search Input for Mobile (Below Header) */}
      <div
        className={`px-4 py-2 shadow-sm transition-all md:hidden
          ${darkMode ? "bg-[#fcfaf7]" : "bg-[#121212]"}`}
      >
        <input
          type="text"
          placeholder="Search..."
          className={`w-full px-4 py-2 rounded-md border text-sm
            ${darkMode ? "bg-white text-gray-700 border-[#555]" : "bg-[#333333] text-gray-100 border-gray-300"} 
            focus:outline-none focus:ring-1 focus:ring-[#FF0000] focus:border-transparent transition-all`}
        />
      </div>

      {/* Mobile Slide Menu */}
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setMenuOpen(false)} // click outside to close
        ></div>
      )}

{/* Mobile Slide Menu */}
<div
    className={`fixed top-0 left-0 h-full w-2/3 
      ${darkMode ? "bg-white text-gray-300" : " bg-[#111111] text-gray-700"} 
      shadow-lg transform 
      ${menuOpen ? "translate-x-0" : "-translate-x-full"} 
      transition-transform duration-300 ease-in-out z-50 p-6`}
    onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
  >
    <Link
      to="/"
      className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-gray-700" : "text-gray-100"}`}
    >
      <div className="flex items-center space-x-2">
        <img
          src={logob}
          alt="FocusTube Logo"
          className="h-10 w-10 object-cover rounded-full border border-gray-300 dark:border-gray-600"
        />
        <div className="text-2xl font-bold">
          <span className={`${darkMode ? "text-black" : "text-[#FF0000]"}`}>Focus</span>
          <span className={`${darkMode ? "text-[#FF0000]" : "text-white"}`}>Tube</span>
        </div>
      </div>
    </Link>



    <nav className="flex flex-col space-y-1 font-semibold text-lg   mt-12">
      <hr className="border-t-2 py-0 border-[#FF0000] w-full mt-[-2px]" />

     
      <div className="overflow-y-auto h-[calc(100vh-80px)]  text-white  py-6 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-black md:hidden">


      <div className="md:hidden w-full">
      <button
        onClick={() => setOpenMind(!openMind)}
        className={`w-full text-left flex justify-between items-center py-2 px-4 ${
          darkMode ? "text-gray-900" : "text-gray-100"
        }`}
      >
        <span className={`${darkMode ? "hover:text-red-400" : "hover:text-red-600"}`}>
          Mind-Set
        </span>
        <span>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <ul className="px-6 py-2 space-y-3 text-sm">
          {mindsetItems.map(({ icon: Icon, text, link }) => (
            <li key={link} className="flex items-center gap-3">
              <Icon className="w-4 h-4 text-red-500" />
              <Link
                to={link}
                className={`block ${
                  darkMode ? "text-gray-800" : "text-gray-100"
                } hover:text-red-500`}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>



      
    <div className="md:hidden w-full">
  <button
    onClick={() => setOpenHealth(!openHealth)}
    className={`w-full text-left flex justify-between items-center py-2 px-4 ${
      darkMode ? "text-gray-900" : "text-gray-100"
    }`}
  >
    <span className={`${darkMode ? "hover:text-red-400" : "hover:text-red-600"}`}>
      Health
    </span>
    <span>{openHealth ? "▲" : "▼"}</span>
  </button>

  {openHealth && (
    <ul className="px-6 py-2 space-y-2 text-sm font-medium">
      {[
        { text: "Daily Healthy Habits", link: "/health/habits" },
        { text: "Natural Remedies", link: "/health/remedies" },
        { text: "Fitness for Beginners", link: "/health/fitness" },
        { text: "Boosting Immunity", link: "/health/immunity" },
        { text: "Healthy Diet Plans", link: "/health/diet" },
        { text: "Mental Health & Self-Care", link: "/health/mental" },
        { text: "Morning Yoga Routine", link: "/health/yoga" },
        { text: "Superfoods List", link: "/health/superfoods" },
        { text: "Detox Naturally", link: "/health/detox" },
        { text: "Healthy Smoothies", link: "/health/smoothies" },
      ].map(({ text, link }) => (
        <li key={link}>
          <Link
            to={link}
            className={`block pl-2 transition-colors duration-300 ${
              darkMode ? "text-gray-900 hover:text-red-500" : "text-gray-100 hover:text-red-600"
            }`}
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  )}
</div>



      <div className="md:hidden w-full">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full text-left flex justify-between items-center py-2 px-4 ${
          darkMode ? "text-gray-900" : "text-gray-100"
        }`}
      >
        <span className={`${darkMode ? "hover:text-red-400" : "hover:text-red-600"}`}>
          Technology
        </span>
        <span>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <ul className="px-6 py-2 space-y-3 text-sm">
          {technologyItems.map(({ icon: Icon, text, link }) => (
            <li key={link} className="flex items-center gap-3">
              <Icon className="w-4 h-4 text-red-500" />
              <Link
                to={link}
                className={`block ${
                  darkMode ? "text-gray-800" : "text-gray-100"
                } hover:text-red-500`}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>



    <div className="md:hidden w-full">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full text-left flex justify-between items-center py-2 px-4 ${
          darkMode ? "text-gray-900" : "text-gray-100"
        }`}
      >
        <span className={`${darkMode ? "hover:text-red-400" : "hover:text-red-600"}`}>
          Traveling
        </span>
        <span>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <ul className="px-6 py-2 space-y-3 text-sm">
          {travelItems.map(({ icon: Icon, text, link }) => (
            <li key={link} className="flex items-center gap-3">
              <Icon className="w-4 h-4 text-red-500" />
              <Link
                to={link}
                className={`block ${
                  darkMode ? "text-gray-800" : "text-gray-100"
                } hover:text-red-500`}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>


    <div className="md:hidden w-full">
  <button
    onClick={() => setOpenHealth(!openHealth)}
    className={`w-full text-left flex justify-between items-center py-2 px-4 ${
      darkMode ? "text-gray-900" : "text-gray-100"
    }`}
  >
    <span className={`${darkMode ? "hover:text-red-400" : "hover:text-red-600"}`}>
      Health
    </span>
    <span>{openHealth ? "▲" : "▼"}</span>
  </button>

  {openHealth && (
    <ul className="px-6 py-2 space-y-3 text-sm">
      {[
        
      ].map(({ icon: Icon, text, link }) => (
        <li key={link} className="flex items-center gap-3">
          <Icon className="w-4 h-4 text-red-500" />
          <Link
            to={link}
            className={`block ${
              darkMode ? "text-gray-800" : "text-gray-100"
            } hover:text-red-500`}
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  )}
</div>


<ul className="grid grid-cols-1 gap-1 mt-2 text-sm font-medium">
  {[
   
  ].map(({ text, link }) => (
    <li key={link}>
      <Link
        to={link}
        className={`block py-1 pl-2 transition-colors duration-300 ${
          darkMode ? "text-gray-900 hover:text-red-500" : "text-gray-100 hover:text-red-600"
        }`}
      >
        {text}
      </Link>
    </li>
  ))}
</ul>

     

      <div className="md:hidden w-full">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full text-left flex justify-between  items-center py-2 px-4 ${
          darkMode ? "text-gray-900" : "text-gray-100"
        }`}
      >
        <span className={` bottom-[13px] ${darkMode ? "hover:text-red-400" : "hover:text-red-600"}`}>
          Animal
        </span>
        <span>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <ul className="px-6 py-2 space-y-3 text-sm">
          {animalItems.map(({ icon: Icon, text, link }) => (
            <li key={link} className="flex items-center gap-3">
              <Icon className="w-4 h-4 text-red-500" />
              <Link
                to={link}
                className={`block ${
                  darkMode ? "text-gray-800" : "text-gray-100"
                } hover:text-red-500`}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>

    </nav>
  </div>




      </header>

      {/* Bottom Red Line */}
      <hr className="border-t-2 border-[#FF0000] w-full" />

    </>
  );
}

export default Header;
