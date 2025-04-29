import React, { useState } from "react";

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
          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className={`${darkMode ? "text-black" : "text-[#FF0000]"}`}>Focus</span>
              <span className={`${darkMode ? "text-[#FF0000]" : "text-white"}`}>Tube</span>
            </div>
          </div>

          {/* Center: Navigation (Desktop) */}
          <nav className="hidden md:flex space-x-6 font-semibold absolute left-1/2 transform -translate-x-1/2">
            <a href="#motivation" className={`hover:text-red-600 ${darkMode ? "text-gray-700" : "text-gray-300"}`}>Motivation</a>
            <a href="#children" className={`hover:text-red-600 ${darkMode ? "text-gray-700" : "text-gray-300"}`}>Children</a>
            <a href="#technology" className={`hover:text-red-600 ${darkMode ? "text-gray-700" : "text-gray-300"}`}>Technology</a>
            <a href="#about" className={`hover:text-red-600 ${darkMode ? "text-gray-700" : "text-gray-300"}`}>About</a>
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
      <div className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-[#121212] shadow-lg transform 
        ${menuOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 ease-in-out z-40 p-6
      `}>
        <nav className="flex flex-col space-y-6 font-semibold text-lg mt-12">
          <a href="#motivation" onClick={handleMenuToggle} className="hover:text-red-600 text-gray-700 dark:text-gray-300">Motivation</a>
          <a href="#children" onClick={handleMenuToggle} className="hover:text-red-600 text-gray-700 dark:text-gray-300">Children</a>
          <a href="#technology" onClick={handleMenuToggle} className="hover:text-red-600 text-gray-700 dark:text-gray-300">Technology</a>
          <a href="#about" onClick={handleMenuToggle} className="hover:text-red-600 text-gray-700 dark:text-gray-300">About</a>
        </nav>
      </div>

      {/* Bottom Red Line */}
      <hr className="border-t-2 border-[#FF0000] w-full" />
    </>
  );
}

export default Header;
