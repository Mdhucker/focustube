import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HealthPage from './pages/HealthPage';
import KidsPage from './pages/KidsPage';
import MindsetPage from './pages/MindsetPage';
import TechPage from './pages/TechPage';
import TravelPage from './pages/TravelPage';
import AnimalPage from './pages/AnimalPage';
import MaulidiApi from './pages/MaulidiApi';  // Adjust the path if necessary
import ApprovedVideos from './pages/ApprovedVideos';
import DustbinVideos from './pages/DustbinVideos';
import AboutUs from './pages/AboutUs';


import FetchYouTubeVideos from './components/FetchYouTubeVideos';


import AdminVideoPanel from './pages/AdminVideoPanel';
import Dustbin from './pages/DustbinVideos';
import CategoryPage from './pages/CategoryPage';
import TestLinks from './pages/TestLinks';

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


  // // Fetch data from the API
  // const [videos, setVideos] = useState([]);

  // const [apiData, setApiData] = useState(null);
  // useEffect(() => {
  //   const fetchVideos = async () => {
  //     try {
  //       const res = await fetch('http://localhost:8000/api/videos/');
  //       if (!res.ok) {
  //         throw new Error(`HTTP error: ${res.status}`);
  //       }
  //       const data = await res.json();
  //       console.log(data)
  //       setVideos(data);
  //     } catch (error) {
  //       console.error('Failed to fetch videos:', error);
  //     }
  //   };
  
  //   fetchVideos();
  // }, []);
  
  return (
    
    <BrowserRouter>
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
        <Route path="/approvedvideos" element={<ApprovedVideos  toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>} />
        {/* <Route path="/dustbinvideos" element={<DustbinVideos toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>} /> */}


        <Route path="/admin" element={<AdminVideoPanel  toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>} />
        <Route path="/dustbin" element={<Dustbin toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>} />
        <Route path="category/:category" element={<CategoryPage />} />

        <Route path="/testlink" element={<TestLinks toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>}/>
        <Route path="/fetch-videos" element={<FetchYouTubeVideos />} /> {/* ✅ Correct way */}
        <Route path="/aboutus" element={<AboutUs toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>}/>} /> {/* ✅ Correct way */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
