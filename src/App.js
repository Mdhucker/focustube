import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HealthPage from './pages/HealthPage';
import KidsPage from './pages/KidsPage';
import MindsetPage from './pages/MindsetPage';
import TechPage from './pages/TechPage';
import TravelPage from './pages/TravelPage';
import AnimalPage from './pages/AnimalPage';

import React, { useState, useEffect } from 'react';



function App() {
const [darkMode, setDarkMode] = useState(false);

  // Set the body background color when the theme changes
  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = '#121212'; // Dark color
      document.body.style.color = '#fff'; // Light text color
    } else {
      document.body.style.backgroundColor = '#fff'; // Light color
      document.body.style.color = '#000'; // Dark text color
    }
  }, [darkMode]);

  // Toggle function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <BrowserRouter basename="/focustube">
      <Routes>
      <Route path="/" element={<Home toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
      <Route path="/health/:section" element={<HealthPage toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>} />
        <Route path="/kids/:section" element={<KidsPage toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>} />
        <Route path="/mindset/:section" element={<MindsetPage toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>} />
        <Route path="/tech/:section" element={<TechPage toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>} />
        <Route path="/travel/:section" element={<TravelPage toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>} />
        <Route path="/animals/:section" element={<AnimalPage toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />






      </Routes>
    </BrowserRouter>
  );
}

export default App;
