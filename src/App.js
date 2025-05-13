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
import Register from './pages/Register';
import Login from './pages/Login';
import Quran from './pages/Quran';
import Settings from './pages/Settings';
import MyLearning from './pages/MyLearning';
import Gift from './pages/Gift';
import VideoGuide from './pages/VideoGuide';
import What_Inside from './pages/What_Inside';
import FAQs from './pages/FAQs';
import DonatePage from './pages/DonatePage'; // or wherever your file is
import Contribute from './pages/Contribute'; // or wherever your file is





import FetchYouTubeVideos from './components/FetchYouTubeVideos';


import AdminVideoPanel from './pages/AdminVideoPanel';
import Dustbin from './pages/DustbinVideos';
import CategoryPage from './pages/CategoryPage';
import TestLinks from './pages/TestLinks';

import React, { useState, useEffect } from 'react';
import MyContacts from './pages/MyContacts';



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
    
    <BrowserRouter>
      <Routes>
      {/* <Route path="/" element={<Home toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} /> */}
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
        <Route path="/aboutus" element={<AboutUs toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>}/> {/* ✅ Correct way */}


        <Route path="/video_input/:id" element={<Home />} />
        <Route path="/" element={<Home toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>} /> {/* Or Home or any landing component */}

        <Route path="/contacts_us" element={<MyContacts toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>} /> {/* Or Home or any landing component */}
        <Route path="/login" element={<Login toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>} /> {/* Or Home or any landing component */}
        <Route path="/registration" element={<Register toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>} /> {/* Or Home or any landing component */}
        <Route path="/quran" element={<Quran toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>} /> {/* Or Home or any landing component */}
        <Route path="/settings" element={<Settings toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>} /> {/* Or Home or any landing component */}
        <Route path="/my-learning" element={<MyLearning toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>} /> {/* Or Home or any landing component */}
        <Route path="/gifts" element={<Gift toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>} /> {/* Or Home or any landing component */}
        <Route path="/vidoeguideline" element={<VideoGuide toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>} /> {/* Or Home or any landing component */}
        <Route path="/what_inside_focustube" element={<What_Inside toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>} /> {/* Or Home or any landing component */}
        <Route path="/faqs" element={<FAQs toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>} /> {/* Or Home or any landing component */}

        <Route path="/donate" element={<DonatePage toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
        <Route path="/contribute" element={<Contribute toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
