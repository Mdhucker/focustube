
// src/hooks/useOutsideClick.js

import { useEffect } from 'react';

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    // Function that handles the click outside event
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();  // Call the callback to close the dropdown
      }
    };

    // Adding the event listener for mousedown (click)
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);  // Dependencies: ref and callback

};

export default useOutsideClick;
