
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Nav_AboutUs from '../components/Nav_AboutUs';

function FocusTubeInside({ toggleDarkMode, darkMode }) {
  const benefits = [
    "Boost your personal growth with motivational videos.",
    "Access categorized content like Mindset, Faith, Career, and more.",
    "Watch Islamic reminders and Quranic motivation daily.",
    "Enjoy clean and distraction-free YouTube viewing.",
    "Track your progress with upcoming reward features.",
    "Get rewarded for watching selected educational content.",
    "Filter videos easily by interest, topic, or theme.",
    "Submit your own motivational videos (if approved by admin).",
    "Lightweight, fast, and mobile-friendly design.",
  ];

  const pages = [
    { name: "Home", path: "/" },
    { name: "Login/Register", path: "/login" },

    { name: "Technology", path: "/technology" },
    { name: "Contacts Us", path: "/contacts" },

    { name: "Animals", path: "/animals" },
    { name: "Video Guideline", path: "/guideline" },

    { name: "Kids", path: "/kids" },
    { name: "Gift and Rewarded Videos", path: "/rewards" },

    { name: "Travel", path: "/Travel" },
    { name: "About Us", path: "/aboutus" },

    { name: "Mindset", path: "/mindset" },

    { name: "Health", path: "/Health" },
    { name: "My learning", path: "/My learning" },

    { name: "Donate", path: "/Donate" },

    { name: "Politics", path: "/Politics" },
    { name: "What inside FocusTube", path: "/insidefocustube" },

    { name: "Qur an Section", path: "/Quran" },
    { name: "FAQs", path: "/FAQs" },

    // { name: "Approved Videos", path: "/approved" },
    // { name: "Dustbin (Deapproved)", path: "/dustbin" },
    // { name: "Admin Dashboard", path: "/admin" },

  ];

  return (
    <>
      <Nav_AboutUs toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <div className={`min-h-screen px-6 py-12 duration-300 ${darkMode ? 'bg-white' : 'bg-[#111]'} text-${darkMode ? 'black' : 'white'}`}>
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6  text-red-600"
          >
            What’s Inside <span className="text-red-600">FocusTube</span> & Its Benefits
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className={`mb-10 text-lg text-center leading-relaxed ${darkMode ? 'text-gray-800' : 'text-gray-300'}`}
          >
FocusTube gives you access to a wide range of inspiring and educational videos, powerful tracking tools to monitor your personal growth, and a unique reward system that keeps you consistently motivated,
 deeply focused, and steadily progressing toward your goals—every single day. 
     </motion.p>

         

          {/* Pages/Features Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-black' : 'text-white'}`}>
              📄Main Pages Included in the System
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pages.map((page, index) => (
                <Link
                  key={index}
                //   to={page.path}
                  className={`block border rounded-md p-4 hover:shadow-lg transition ${
                    darkMode
                      ? 'bg-gray-100 hover:bg-white text-black'
                      : 'bg-[#333333] hover:bg-black text-white'
                  }`}
                >
                  <h3 className="font-medium">{page.name}</h3>
                  {/* <p className="text-base text-red-600 mt-1">Path: {page.path}</p> */}
                </Link>
              ))}
            </div>
          </motion.div>


           {/* Benefits Section */}
           <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <h2 className={`text-3xl font-semibold mb-4 mt-6 ${darkMode ? 'text-black' : 'text-red-600'}`}>
              Key Benefits
            </h2>
            <ul className="list-disc mb-4 text-lg leading-relaxed">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className={`${darkMode ? 'text-gray-800' : 'text-gray-300'}`}
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
      </div>

      <Footer />
    </>
  );
}

export default FocusTubeInside;
