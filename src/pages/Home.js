import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

function Home() {
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
    <>

      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      {/* <div class="container mx-auto px-4 sm:px-6 lg:px-8"> */}

      {/* Hero Section */}
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8  text-white min-h-screen ${darkMode ? 'bg-white' : 'bg-black'}`}>
        <div className="flex flex-1 flex-col items-center p-6">
          <section className="text-center mb-10">
            <h1 className={`text-4xl md:text-5xl ${darkMode ? 'text-gray-700' : 'text-gray-700'} mb-4`}>
              Welcome to FocusTube
            </h1>
            <p className={`text-lg ${darkMode ? 'text-gray-500' : 'text-gray-500'} max-w-2xl mx-auto`}>
              Your focused place for Motivation, Kids Learning, and the best Tech knowledge!
            </p>
          </section>

          {/* Video Grid Section */}
          <section className="video-grid">
          <div className="video-card">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/GH5Q_22Fxf4?si=ogxMACD9-sZO2pqc"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-title">
                <h3>How to Memorize the Quran Effectively for three monthes 
                Muslim CEO: how my Agency made me $542,224.31</h3>
              </div>
            </div>

            <div className="video-card">

            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/h8RbDQFw8Dc?si=Nt5MMDBbObiXC7Iv"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-title">
                <h3>How to Memorize the Quran Effectively for three monthes 
                Muslim CEO: how my Agency made me $542,224.31</h3>
              </div>
            </div>

            <div className="video-card">

            <div className="video-wrapper">
              <iframe
              src="https://www.youtube.com/embed/DbcQypQ1MgQ?si=HbkyLfUCqFobSCzD" 
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-title">
                <h3>How to Memorize the Quran Effectively for three monthes 
                Muslim CEO: how my Agency made me $542,224.31</h3>
              </div>
            </div>

          <div className="video-card">

            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/5UhnQ2h-5BY?si=CKOCarBgQ2XdLrjm"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div> 
            <div className="video-title">
                <h3>How to Memorize the Quran Effectively for three monthes 
                Muslim CEO: how my Agency made me $542,224.31</h3>
              </div>
            </div>

            <div className="video-card">

            <div className="video-wrapper">
              <iframe

              src="https://www.youtube.com/embed/vNmaPWxfYeQ?si=viueP7oUNua82DYJ"                 title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-title">
                <h3>How to Memorize the Quran Effectively for three monthes 
                Muslim CEO: how my Agency made me $542,224.31</h3>
              </div>
            </div>


            <div className="video-card">

            <div className="video-wrapper">
              <iframe
              src="https://www.youtube.com/embed/qRAkGuX5v6c?si=h92CfHz0eBccQ95S" 
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-title">
                <h3>How to Memorize the Quran Effectively for three monthes 
                Muslim CEO: how my Agency made me $542,224.31</h3>
              </div>
            </div>
                     </section>

      
        </div>
      </div>

    
      {/* </div> */}



  {/* Footer */}
  <footer className={`text-gray-400 text-center py-6 text-sm ${darkMode ? 'bg-[#121212]' : 'bg-gray-900'}`}>
        <div className="space-y-4">
          <p>© 2025 FocusTube. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:info@focustube.com" className="hover:text-red-600">Contact Us</a>
            <a href="#about" className="hover:text-red-600">About Us</a>
            <a href="#privacy" className="hover:text-red-600">Privacy Policy</a>
            <a href="#terms" className="hover:text-red-600">Terms of Service</a>
          </div>
        </div>

      </footer>
    </>
  );
}

export default Home;
