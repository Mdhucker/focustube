import React from 'react';

const Loader = ({ darkMode }) => {
  return (
    <div
      className={`flex items-center justify-center min-h-[370px] w-full ${
        darkMode ? 'bg-white' : ''
      }`}
    >
      <div className="flex items-center">
        <div className={`spinner ${darkMode ? 'spinner-light' : 'spinner-dark'}`}></div>
        <span
          className={`ml-4 text-lg font-medium ${
            darkMode ? 'text-[#111111]' : 'text-white'
          }`}
        >
        </span>
      </div>

   <div className="flex justify-center items-center">
  <div
    className={`border-t-4 border-b-4 rounded-full w-10 h-10 animate-spin 
      ${darkMode ? 'border-red-400' : 'border-red-600'}`}
  ></div>
</div>

    </div>
  );
};

export default Loader;
