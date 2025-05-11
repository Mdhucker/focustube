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

      <style jsx>{`
        .spinner {
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
          border-width: 4px;
          border-style: solid;
        }

        .spinner-light {
          border: 4px solid #444;
          border-top: 4px solid #ff0000; /* YouTube Red */
        }

        .spinner-dark {
          border: 4px solid #e0e0e0   ;
          border-top: 4px solid #ff0000;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
