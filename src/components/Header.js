import React, { useState } from "react";
import logob from '../assets/images/logob.avif'; // adjust path as needed
import { Link } from 'react-router-dom';

function Header({ toggleDarkMode, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Header Section */}
      <header
        className={`px-4 py-2 shadow-md sticky top-0 z-50 w-full transition-all 
          ${darkMode ? "bg-[#fcfaf7]" : "bg-[#121212]"}`}
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
          <nav className="hidden md:flex space-x-6 font-semibold absolute left-1/2 transform -translate-x-1/2">

<Link
  to="/mindset"
  // smooth={true}
  // duration={500}
  className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-gray-700" : "text-gray-100"}`}
>
  Mind-Set
</Link>

<Link
  to="/children"
  // smooth={true}
  // duration={500}
  className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-gray-700" : "text-gray-100"}`}
>
  Children
</Link>

<Link
  to="/technology"
  // smooth={true}
  // duration={500}
  className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-gray-700" : "text-gray-100"}`}
>
  Technology
</Link>

<Link
  to="/traveling"
  // smooth={true}
  // duration={500}
  className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-gray-700" : "text-gray-100"}`}
>
  Traveling
</Link>

<Link
  to="/health"
  // smooth={true}
  // duration={500}
  className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-gray-700" : "text-gray-100"}`}
>
  Health
</Link>

<Link
  to="/animals"
  // smooth={true}
  // duration={500}
  className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-gray-700" : "text-gray-100"}`}
>
  Animals
</Link>


          </nav>

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
              <input
                type="text"
                placeholder="Search..."
                className={`hidden md:block w-64 px-4 py-2 rounded-md border text-sm 
                  ${darkMode ? "bg-white text-gray-700 border-[#555]" : "bg-[#333333] text-gray-100 border-gray-300"} 
                  focus:outline-none focus:ring-1 focus:ring-[#FF0000] focus:border-transparent transition-all`}
              />
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
      </header>

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
<div className={`fixed top-0 left-0 h-full w-60 
  ${darkMode ? "bg-white text-gray-300" : " bg-[#111111] text-gray-700"} 
  shadow-lg transform 
  ${menuOpen ? "translate-x-0" : "-translate-x-full"} 
  transition-transform duration-300 ease-in-out z-50 p-6
`}
onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside sidebar

>
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

  <nav className="flex flex-col space-y-2 font-semibold text-lg mt-12">
  <hr className="border-t-2 py-0 border-[#FF0000] w-full mt-[-2px]" />

    <a 
      href="#motivation" 
      onClick={handleMenuToggle} 
      className={`${darkMode ? "hover:text-red-400" : "hover:text-red-600"}`}>
        <h3 className={`text-sm mt-1 ${darkMode ? 'text-gray-900' : 'text-gray-100'}`}>
        Mind-Set

           </h3>
    </a>
    <a 
      href="#children" 
      onClick={handleMenuToggle} 
      className={`${darkMode ? "hover:text-red-400" : "hover:text-red-600"}`}>
                <h3 className={`text-sm mt-1 ${darkMode ? 'text-gray-900' : 'text-gray-100'}`}>

      Children             
       </h3>

    </a>
    <a 
      href="#technology" 
      onClick={handleMenuToggle} 
      className={`${darkMode ? "hover:text-red-400" : "hover:text-red-600"}`}>
                <h3 className={`text-sm mt-1 ${darkMode ? 'text-gray-900' : 'text-gray-100'}`}>

      Technology             
       </h3>

    </a>
    <a 
      href="#about" 
      onClick={handleMenuToggle} 
      className={`${darkMode ? "hover:text-red-400" : "hover:text-red-600"}`}>
                <h3 className={`text-sm mt-1 ${darkMode ? 'text-gray-900' : 'text-gray-100'}`}>

      Traveling
      </h3>
    </a>

    <a 
      href="#about" 
      onClick={handleMenuToggle} 
      className={`${darkMode ? "hover:text-red-400" : "hover:text-red-600"}`}>
                <h3 className={`text-sm mt-1 ${darkMode ? 'text-gray-900' : 'text-gray-100'}`}>

      Health
      </h3>
    </a>


    <a 
      href="#about" 
      onClick={handleMenuToggle} 
      className={`${darkMode ? "hover:text-red-400" : "hover:text-red-600"}`}>
                <h3 className={`text-sm mt-1 ${darkMode ? 'text-gray-900' : 'text-gray-100'}`}>

      Animals
      </h3>
    </a>
  </nav>
</div>


      {/* Bottom Red Line */}
      <hr className="border-t-2 border-[#FF0000] w-full" />
    </>
  );
}

export default Header;
