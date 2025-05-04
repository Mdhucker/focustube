import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HealthPage from './pages/HealthPage';
import KidsPage from './pages/KidsPage';
import MindsetPage from './pages/MindsetPage';
import TechPage from './pages/TechPage';
import TravelPage from './pages/TravelPage';
import AnimalPage from './pages/AnimalPage';
import MaulidiApi from './pages/MaulidiApi';  // Adjust the path if necessary

import FetchYouTubeVideos from './components/FetchYouTubeVideos';


import AdminVideoPanel from './pages/AdminVideoPanel';
import Dustbin from './pages/DustbinVideo';
import CategoryPage from './pages/CategoryPage';
import TestLinks from './TestLinks';

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


  // Fetch data from the API
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/test/")
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);


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
        <Route path="/maulidi" element={<MaulidiApi toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
        <Route path="admninvidepanel/:section" element={<AdminVideoPanel toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />


        <Route path="/admin" element={<AdminVideoPanel />} />
        <Route path="/dustbin" element={<Dustbin />} />
        <Route path="category/:category" element={<CategoryPage />} />

        {/* <Route path="/" element={<TestLinks />} /> */}
        <Route path="/fetch-videos" element={<FetchYouTubeVideos />} /> {/* ✅ Correct way */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
