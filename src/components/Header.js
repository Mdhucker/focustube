import { useEffect, useState , useRef} from "react";
import logob from '../assets/images/logob.avif'; // adjust path as needed
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { useLocation } from 'react-router-dom';

// import SideBar from './SideBar';
// import { mindsetItems, technologyItems, travelItems, animalItems } from './Const'; // Import the items from Const.js
import { mindsetItems, technology_nav,travel_nav,   animal_nav,health_nav,kids_nav} from './Const'; // Import the items from Const.js

function Header({ toggleDarkMode, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open] = useState(true);
  // const [openHealth, setOpenHealth] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // ✅ Fix: Add this back
  const [openDrop, setOpenDrop] = useState(true);
  const [openMindset, setOpenMindset] = useState(false);


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

  const [openHealth] = useState(true);



  // Fix: Add this useEffect to handle body overflow and padding
  useEffect(() => {
    const body = document.body;
  
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  
    if (menuOpen) {
      // Store original values in attributes to restore later
      body.dataset.overflow = body.style.overflow || "";
      body.dataset.paddingRight = body.style.paddingRight || "";
  
      body.style.overflow = "hidden";
  
      if (scrollBarWidth > 0) {
        body.style.paddingRight = `${scrollBarWidth}px`;
      }
    } else {
      body.style.overflow = body.dataset.overflow;
      body.style.paddingRight = body.dataset.paddingRight;
    }
  
    return () => {
      body.style.overflow = body.dataset.overflow;
      body.style.paddingRight = body.dataset.paddingRight;
    };
  }, [menuOpen]);
  

  const [openAnimals, setOpenAnimals] = useState(false);
  const animalsRef = useRef(null);
  
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
          <NavBar  toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>

          {/* Right: Dark Mode, Hamburger */}
          <div className="flex items-center space-x-3">
            {/* Dark Mode Toggle */}
 {/* Dark Mode Toggle */}
<button
  onClick={toggleDarkMode}
  className={`w-8 h-8 flex items-center justify-center text-2xl transition-colors 
    ${darkMode ? "text-gray-400" : "text-gray-700"}`}
>
  <span className="block w-full text-center">{darkMode ? "🌙" : "☀️"}</span>
</button>

{/* Hamburger Icon (Mobile Only) */}
<button
  onClick={handleMenuToggle}
  className={`w-10 h-10 flex items-center justify-center text-[28px] md:hidden focus:outline-none 
    ${darkMode ? "text-black" : "text-white"}`}
>
  <span className="block w-full text-center">{menuOpen ? "X" : "☰"}</span>
</button>


            
          </div>
        </div>

      {/* Search Input for Mobile (Below Header) */}
   
      <div className={`shadow-sm md:flex ${darkMode ? "bg-white" : ""} `}>
  <div className="w-full md:w-[60%] mx-auto my-2">
    <input
      type="text"
      placeholder="Search topics like AI, Travel, Wellness, Pets..."
      className={`w-full px-4 py-3 pr-28 rounded-md border text-sm outline-none 
 focus:border-red-600
        ${darkMode ? "bg-white text-gray-700 border-[#555]" : "bg-[#333333] text-gray-100 border-gray-300"}
      `}
    />
  </div>
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
<nav className="flex flex-col space-y-1 font-semibold text-lg   mt-0">

<div
    className={`fixed top-0 left-0 h-full w-2/3 
      ${darkMode ? "bg-white text-gray-300" : " bg-[#111111] text-gray-700"} 
      shadow-lg transform 
      ${menuOpen ? "translate-x-0" : "-translate-x-full"} 
      transition-transform duration-300 ease-in-out z-50 p-4`}
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




    <hr className="border-t-1 py-0 border-[#FF0000] w-full mt-[45px]" />

    <div className="overflow-y-auto h-[calc(100vh-80px)] text-white py-6 pb-20 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-black md:hidden">

    <div className="md:hidden w-full">
  <button
    onClick={() => setOpenDrop(!openDrop)}

    className={`w-full text-left flex justify-between items-center py-2 px-4 ${
      darkMode ? "text-gray-900" : "text-gray-100"
    }`}
  >
    <span className={`${darkMode ? "hover:text-red-400" : "hover:text-red-600"}`}>
      Mind-Set
    </span>
    <span>{openDrop ? "" : "▼"}</span>
  </button>

  {openDrop && (
    <ul className="px-6 py-2 space-y-3 text-sm"> 
      {mindsetItems.map(({ icon: Icon, text, link }) => (
        <li key={link} className="flex items-center gap-3">
          <Icon className="w-4 h-4 text-red-500" />
          <Link
            to={link}
            onClick={() => setMenuOpen(false)} // ✅ Close sidebar on link click

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
        // onClick={() => setOpenMind(!openMind)}
        className={`w-full text-left flex justify-between items-center py-2 px-4 ${
          darkMode ? "text-gray-900" : "text-gray-100"
        }`}
      >
        <span className={`${darkMode ? "hover:text-red-400" : "hover:text-red-600"}`}>
          Health
        </span>
        <span>{open ? "" : "▼"}</span>
      </button>

      {open && (
        <ul className="px-6 py-2 space-y-3 text-sm">
          {health_nav.map(({ icon: Icon, text, link }) => (
            <li key={link} className="flex items-center gap-3">
              <Icon className="w-4 h-4 text-red-500" />
              <Link
                to={link}
                onClick={() => setMenuOpen(false)} // ✅ Close sidebar on link click

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
        // onClick={() => setOpen(!open)}
        className={`w-full text-left flex justify-between items-center py-2 px-4 ${
          darkMode ? "text-gray-900" : "text-gray-100"
        }`}
      >
        <span className={`${darkMode ? "hover:text-red-400" : "hover:text-red-600"}`}>
          Technology
        </span>
        <span>{open ? "" : "▼"}</span>
      </button>

      {open && (
        <ul className="px-6 py-2 space-y-3 text-sm">
          {technology_nav.map(({ icon: Icon, text, link }) => (
            <li key={link} className="flex items-center gap-3 transition-colors duration-300">
              <Icon className="w-4 h-4 text-red-500" />
              <Link
                to={link}
                onClick={() => setMenuOpen(false)} // ✅ Close sidebar on link click

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
        // onClick={() => setOpen(!open)}
        className={`w-full text-left flex justify-between items-center py-2 px-4 ${
          darkMode ? "text-gray-900" : "text-gray-100"
        }`}
      >
        <span className={`${darkMode ? "hover:text-red-400" : "hover:text-red-600"}`}>
          Traveling
        </span>
        <span>{open ? "" : "▼"}</span>
      </button>

      {open && (
        <ul className="px-6 py-2 space-y-3 text-sm">
          {travel_nav.map(({ icon: Icon, text, link }) => (
            <li key={link} className="flex items-center gap-3 transition-colors duration-300">
              <Icon className="w-4 h-4 text-red-500" />
              <Link
                to={link}
                onClick={() => setMenuOpen(false)} // ✅ Close sidebar on link click

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
        // onClick={() => setOpen(!open)}
        className={`w-full text-left flex justify-between items-center py-2 px-4 ${
          darkMode ? "text-gray-900" : "text-gray-100"
        }`}
      >
        <span className={`${darkMode ? "hover:text-red-400" : "hover:text-red-600"}`}>
          Children
        </span>
        <span>{open ? "" : "▼"}</span>
      </button>

      {open && (
        <ul className="px-6 py-2 space-y-3 text-sm">
          {kids_nav.map(({ icon: Icon, text, link }) => (
            <li key={link} className="flex items-center gap-3 transition-colors duration-300">
              <Icon className="w-4 h-4 text-red-500" />
              <Link
                to={link}
                onClick={() => setMenuOpen(false)} // ✅ Close sidebar on link click

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
        // onClick={() => setOpen(!open)}
        className={`w-full text-left flex justify-between items-center py-2 px-4 ${
          darkMode ? "text-gray-900" : "text-gray-100"
        }`}
      >
        <span className={`${darkMode ? "hover:text-red-400" : "hover:text-red-600"}`}>
          Animals
        </span>
        <span>{open ? "" : "▼"}</span>
      </button>

      {open && (
        <ul className="px-6 py-2 space-y-3 text-sm">
          {animal_nav.map(({ icon: Icon, text, link }) => (
            <li key={link} className="flex items-center gap-3 transition-colors duration-300">
              <Icon className="w-4 h-4 text-red-500" />
              <Link
                to={link}
                onClick={() => setMenuOpen(false)} // ✅ Close sidebar on link click

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

  </div>
  </nav>




      </header>

      {/* Bottom Red Line */}
      <hr className="border-t-2 border-[#FF0000] w-full" />

    </>
  );
}

export default Header;
