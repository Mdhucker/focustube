import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Health() {
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
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden  text-white min-h-screen ${darkMode ? 'bg-white' : 'bg-[#111111]'}`}>
        <div className="flex flex-1 flex-col items-center p-6">


            <Link to="/focus" className={`text-2xl md:text-3xl ${darkMode ? 'text-gray-800' : 'text-gray-100'} mb-2`}>
                Being Healthy Now
            </Link>
            <hr className="border-t-1 border-[#FF0000] w-screen mx-0 bottom-1 mb-4" />

            {/* <hr className="w-screen border-t-2 border-[#FF0000] mx-auto mb-6" /> */}

          {/* Video Grid Section */}
          <section className="video-grid">



<div className="video-card relative">
  <div className="video-wrapper relative">
    {/* Overlay to disable clicks */}
 <div className="absolute bottom-0 right-2  w-48 h-10 z-10 rounded-tl-md pointer-events-auto"></div> 
 <div className="hidden sm:block absolute bottom-11 right-2 w-[660px] h-32 z-10 rounded-tl-md pointer-events-auto"></div>
 <div className="absolute bottom-[340px] right-[180px] w-[460px] h-[330px] z-10 rounded-tl-md pointer-events-auto"></div>  
   <div className="block lg:hidden absolute bottom-[145px] right-[90px] w-[240px] h-[70px] z-10  rounded-tl-md pointer-events-auto"></div> 
    <div className="absolute bottom-[46px] right-2 w-48 h-[20px]  rounded-tl-md pointer-events-auto"></div>
    
    <iframe
      src="https://www.youtube.com/embed/qRAkGuX5v6c?si=h92CfHz0eBccQ95S"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="w-full h-60"
    ></iframe>
  </div>

  <div className="video-title">
    <h3 className={`text-1xl font-semibold mt-2 
      sm:text-left 
      sm:w-auto sm:ml-0 
      w-screen -ml-[calc((100vw-100%)/2)] px-3 
      ${darkMode ? 'text-gray-900' : 'text-gray-100'}`}>
      How to Memorize the Quran Effectively for three months —  
      Muslim CEO: How My Agency Made Me
    </h3>
  </div>
</div>



            <div className="video-card">

            <div className="video-wrapper">
                   {/* Overlay to disable clicks */}
 <div className="absolute bottom-0 right-2 w-48 h-10 z-10 rounded-tl-md pointer-events-auto"></div> 
 <div className="hidden sm:block absolute bottom-11 right-2 w-[660px] h-32 z-10 rounded-tl-md pointer-events-auto"></div>
 <div className="absolute bottom-[340px] right-[180px] w-[460px] h-[330px] z-10 rounded-tl-md pointer-events-auto"></div> 
   <div className="block lg:hidden absolute bottom-[145px] right-[90px] w-[240px] h-[70px] z-10  rounded-tl-md pointer-events-auto"></div> 
   <div className="absolute bottom-[46px] right-2 w-48 h-[20px]  rounded-tl-md pointer-events-auto"></div> 

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
            <h3 className={`text-1xl font-semibold mt-2 
              sm:text-left 
              sm:w-auto sm:ml-0 
              w-screen -ml-[calc((100vw-100%)/2)] px-3 
              ${darkMode ? 'text-gray-900' : 'text-gray-100'}`}>
              How to Memorize the Quran Effectively for three months —  
              Muslim CEO: How My Agency Made Me
            </h3>
              </div>
            </div>

            <div className="video-card">

            <div className="video-wrapper">
                   {/* Overlay to disable clicks */}
 <div className="absolute bottom-0 right-2 w-48 h-10 z-10 rounded-tl-md pointer-events-auto"></div> 
 <div className="hidden sm:block absolute bottom-11 right-2 w-[660px] h-32 z-10 rounded-tl-md pointer-events-auto"></div>
 <div className="absolute bottom-[340px] right-[180px] w-[460px] h-[330px] z-10 rounded-tl-md pointer-events-auto"></div> 
   <div className="block lg:hidden absolute bottom-[145px] right-[90px] w-[240px] h-[70px] z-10  rounded-tl-md pointer-events-auto"></div> 
   <div className="absolute bottom-[46px] right-2 w-48 h-[20px]  rounded-tl-md pointer-events-auto "></div> 

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
            <h3 className={`text-1xl font-semibold mt-2 
              sm:text-left 
              sm:w-auto sm:ml-0 
              w-screen -ml-[calc((100vw-100%)/2)] px-3 
              ${darkMode ? 'text-gray-900' : 'text-gray-100'}`}>
              How to Memorize the Quran Effectively for three months —  
              Muslim CEO: How My Agency Made Me
            </h3>
              </div>
            </div>

          <div className="video-card">

            <div className="video-wrapper">
                   {/* Overlay to disable clicks */}
 <div className="absolute bottom-0 right-2 w-48 h-10 z-10 rounded-tl-md pointer-events-auto"></div> 
 <div className="hidden sm:block absolute bottom-11 right-2 w-[660px] h-32 z-10 rounded-tl-md pointer-events-auto"></div>
 <div className="absolute bottom-[340px] right-[180px] w-[460px] h-[330px] z-10 rounded-tl-md pointer-events-auto"></div> 
   <div className="block lg:hidden absolute bottom-[145px] right-[90px] w-[240px] h-[70px] z-10  rounded-tl-md pointer-events-auto"></div> 
   <div className="absolute bottom-[46px] right-2 w-48 h-[20px]  rounded-tl-md pointer-events-auto"></div> 

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
               <h3 className={`text-1xl font-semibold mt-2 
              sm:text-left 
              sm:w-auto sm:ml-0 
              w-screen -ml-[calc((100vw-100%)/2)] px-3 
              ${darkMode ? 'text-gray-900' : 'text-gray-100'}`}>
              How to Memorize the Quran Effectively for three months —  
              Muslim CEO: How My Agency Made Me
            </h3>
              </div>
            </div>

            <div className="video-card">
            <div className="video-wrapper">
                   {/* Overlay to disable clicks */}
 <div className="absolute bottom-0 right-2 w-48 h-10 z-10 rounded-tl-md pointer-events-auto"></div> 
 <div className="hidden sm:block absolute bottom-11 right-2 w-[660px] h-32 z-10 rounded-tl-md pointer-events-auto"></div>
 <div className="absolute bottom-[340px] right-[180px] w-[460px] h-[330px] z-10 rounded-tl-md pointer-events-auto"></div> 
   <div className="block lg:hidden absolute bottom-[145px] right-[90px] w-[240px] h-[70px] z-10  rounded-tl-md pointer-events-auto"></div> 
   <div className="absolute bottom-[46px] right-2 w-48 h-[20px]  rounded-tl-md pointer-events-auto"></div> 

              <iframe

              src="https://www.youtube.com/embed/vNmaPWxfYeQ?si=viueP7oUNua82DYJ"                 title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-title">
               <h3 className={`text-1xl font-semibold mt-2 
              sm:text-left 
              sm:w-auto sm:ml-0 
              w-screen -ml-[calc((100vw-100%)/2)] px-3 
              ${darkMode ? 'text-gray-900' : 'text-gray-100'}`}>
              How to Memorize the Quran Effectively for three months —  
              Muslim CEO: How My Agency Made Me
            </h3>
              </div>
            </div>

            


           

             <div className="video-card">
            <div className="video-wrapper">
                   {/* Overlay to disable clicks */}
 <div className="absolute bottom-0 right-2 w-48 h-10 z-10 rounded-tl-md pointer-events-auto"></div> 
 <div className="hidden sm:block absolute bottom-11 right-2 w-[660px] h-32 z-10 rounded-tl-md pointer-events-auto"></div>
 <div className="absolute bottom-[340px] right-[180px] w-[460px] h-[330px] z-10 rounded-tl-md pointer-events-auto"></div> 
   <div className="block lg:hidden absolute bottom-[145px] right-[90px] w-[240px] h-[70px] z-10  rounded-tl-md pointer-events-auto"></div> 
   <div className="absolute bottom-[46px] right-2 w-48 h-[20px]  rounded-tl-md pointer-events-auto"></div> 

              <iframe
src="https://www.youtube.com/embed/MFxIV2np_nA?si=GtvJyuPPn6Cl8sXt"                 title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-title">
                <h3 className={`text-1xl font-semibold mt-2 
              sm:text-left 
              sm:w-auto sm:ml-0 
              w-screen -ml-[calc((100vw-100%)/2)] px-3 
              ${darkMode ? 'text-gray-900' : 'text-gray-100'}`}>
              How to Memorize the Quran Effectively for three months —  
              Muslim CEO: How My Agency Made Me
            </h3>
            </div>
            </div>

            <div className="video-card">
            <div className="video-wrapper">
                   {/* Overlay to disable clicks */}
 <div className="absolute bottom-0 right-2 w-48 h-10 z-10 rounded-tl-md pointer-events-auto"></div> 
 <div className="hidden sm:block absolute bottom-11 right-2 w-[660px] h-32 z-10 rounded-tl-md pointer-events-auto"></div>
 <div className="absolute bottom-[340px] right-[180px] w-[460px] h-[330px] z-10 rounded-tl-md pointer-events-auto"></div> 
   <div className="block lg:hidden absolute bottom-[145px] right-[90px] w-[240px] h-[70px] z-10  rounded-tl-md pointer-events-auto"></div> 
   <div className="absolute bottom-[46px] right-2 w-48 h-[20px]  rounded-tl-md pointer-events-auto"></div> 

              <iframe
src="https://www.youtube.com/embed/2ywB4uJBPj8?si=D0XBTVdyHBGc4xTB"                 title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-title">
                <h3 className={`text-1xl font-semibold mt-2 
              sm:text-left 
              sm:w-auto sm:ml-0 
              w-screen -ml-[calc((100vw-100%)/2)] px-3 
              ${darkMode ? 'text-gray-900' : 'text-gray-100'}`}>
              How to Memorize the Quran Effectively for three months —  
              Muslim CEO: How My Agency Made Me
            </h3>
            </div>
            </div>

            <div className="video-card">
            <div className="video-wrapper">
                   {/* Overlay to disable clicks */}
 <div className="absolute bottom-0 right-2 w-48 h-10 z-10 rounded-tl-md pointer-events-auto"></div> 
 <div className="hidden sm:block absolute bottom-11 right-2 w-[660px] h-32 z-10 rounded-tl-md pointer-events-auto"></div>
 <div className="absolute bottom-[340px] right-[180px] w-[460px] h-[330px] z-10 rounded-tl-md pointer-events-auto"></div> 
   <div className="block lg:hidden absolute bottom-[145px] right-[90px] w-[240px] h-[70px] z-10  rounded-tl-md pointer-events-auto"></div> 
   <div className="absolute bottom-[46px] right-2 w-48 h-[20px]  rounded-tl-md pointer-events-auto"></div> 

              <iframe
src="https://www.youtube.com/embed/BRtBdVfJ_SA?si=oY03DED2qlwslu6I"                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-title">
                <h3 className={`text-1xl font-semibold mt-2 
              sm:text-left 
              sm:w-auto sm:ml-0 
              w-screen -ml-[calc((100vw-100%)/2)] px-3 
              ${darkMode ? 'text-gray-900' : 'text-gray-100'}`}>
              How to Memorize the Quran Effectively for three months —  
              Muslim CEO: How My Agency Made Me
            </h3>
            </div>
            </div>

            <div className="video-card">
            <div className="video-wrapper">
                {/* Overlay to disable clicks */}
 <div className="absolute bottom-0 right-2 w-48 h-10 z-10 rounded-tl-md pointer-events-auto"></div> 
 <div className="hidden sm:block absolute bottom-11 right-2 w-[660px] h-32 z-10 rounded-tl-md pointer-events-auto"></div>
 <div className="absolute bottom-[340px] right-[180px] w-[460px] h-[330px] z-10 rounded-tl-md pointer-events-auto"></div> 
   <div className="block lg:hidden absolute bottom-[145px] right-[90px] w-[240px] h-[70px] z-10  rounded-tl-md pointer-events-auto"></div> 
   <div className="absolute bottom-[46px] right-2 w-48 h-[20px]  rounded-tl-md pointer-events-auto"></div> 


              <iframe
src="https://www.youtube.com/embed/bmmQA8A-yUA?si=xpcIA26hJY59IgjG"                 title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-title">
                <h3 className={`text-1xl font-semibold mt-2 
              sm:text-left 
              sm:w-auto sm:ml-0 
              w-screen -ml-[calc((100vw-100%)/2)] px-3 
              ${darkMode ? 'text-gray-900' : 'text-gray-100'}`}>
              How to Memorize the Quran Effectively for three months —  
              Muslim CEO: How My Agency Made Me
            </h3>
            </div>
            </div>

            <div className="video-card">
            <div className="video-wrapper">
                   {/* Overlay to disable clicks */}
 <div className="absolute bottom-0 right-2 w-48 h-10 z-10 rounded-tl-md pointer-events-auto"></div> 
 <div className="hidden sm:block absolute bottom-11 right-2 w-[660px] h-32 z-10 rounded-tl-md pointer-events-auto"></div>
 <div className="absolute bottom-[340px] right-[180px] w-[460px] h-[330px] z-10 rounded-tl-md pointer-events-auto"></div> 
   <div className="block lg:hidden absolute bottom-[145px] right-[90px] w-[240px] h-[70px] z-10  rounded-tl-md pointer-events-auto"></div> 
   <div className="absolute bottom-[46px] right-2 w-48 h-[20px]  rounded-tl-md pointer-events-auto"></div> 

              <iframe
src="https://www.youtube.com/embed/zk4yefNE5cg?si=PZpZADI41bGwibXQ"                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-title">
                <h3 className={`text-1xl font-semibold mt-2 
              sm:text-left 
              sm:w-auto sm:ml-0 
              w-screen -ml-[calc((100vw-100%)/2)] px-3 
              ${darkMode ? 'text-gray-900' : 'text-gray-100'}`}>
              How to Memorize the Quran Effectively for three months —  
              Muslim CEO: How My Agency Made Me
            </h3>
            </div>
            </div>

            <div className="video-card">
            <div className="video-wrapper">
                   {/* Overlay to disable clicks */}
 <div className="absolute bottom-0 right-2 w-48 h-10 z-10 rounded-tl-md pointer-events-auto"></div> 
 <div className="hidden sm:block absolute bottom-11 right-2 w-[660px] h-32 z-10 rounded-tl-md pointer-events-auto"></div>
 <div className="absolute bottom-[340px] right-[180px] w-[460px] h-[330px] z-10 rounded-tl-md pointer-events-auto"></div> 
   <div className="block lg:hidden absolute bottom-[145px] right-[90px] w-[240px] h-[70px] z-10  rounded-tl-md pointer-events-auto"></div> 
   <div className="absolute bottom-[46px] right-2 w-48 h-[20px]  rounded-tl-md pointer-events-auto"></div> 

              <iframe
src="https://www.youtube.com/embed/0O4zLy5nECQ?si=klTJoh4ecYTmBztR"                 title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-title">
                <h3 className={`text-1xl font-semibold mt-2 
              sm:text-left 
              sm:w-auto sm:ml-0 
              w-screen -ml-[calc((100vw-100%)/2)] px-3 
              ${darkMode ? 'text-gray-900' : 'text-gray-100'}`}>
              How to Memorize the Quran Effectively for three months —  
              Muslim CEO: How My Agency Made Me
            </h3>
            </div>
            </div>

          
      </section>

      
        </div>
      </div>

    
      {/* </div> */}



  {/* Footer */}
 <Footer toggleDarkMode={toggleDarkMode} darkMode={darkMode}  />
    </>
  );
}

export default Health;
