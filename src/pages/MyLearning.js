
import React from 'react';
import { Link } from 'react-router-dom';
import Nav_AboutUs from '../components/Nav_AboutUs';
import Footer from '../components/Footer';
import logob from '../assets/images/logob.avif';

const dummyCourses = [
  {
    id: 1,
    title: 'Mastering Focus and Productivity',
    description: 'Learn how to eliminate distractions and reach your goals.',
    progress: 75,
    image: 'https://source.unsplash.com/random/300x200?focus',
  },
  {
    id: 2,
    title: 'Building a Growth Mindset',
    description: 'Train your brain for success and mental resilience.',
    progress: 40,
    image: 'https://source.unsplash.com/random/300x200?mindset',
  },
  {
    id: 3,
    title: 'Time Management Skills',
    description: 'Maximize your hours with techniques that work.',
    progress: 90,
    image: 'https://source.unsplash.com/random/300x200?time',
  },
];

function MyLearning({ toggleDarkMode, darkMode }) {
  return (
    <>
      <Nav_AboutUs toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-white' : 'dark:bg-[#111]'}`}>
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <Link to="/" className="flex justify-center items-center space-x-3 mb-4">
              <img src={logob} alt="FocusTube Logo" className="h-12 w-12 rounded-full border border-gray-300 dark:border-gray-600" />
              <h1 className="text-3xl font-extrabold">
                <span className="text-[#FF0000]">Maulidi</span>
                <span className={darkMode ? "text-black" : "text-white"}>@Tube</span>
              </h1>
            </Link>
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-black' : 'text-white'}`}>My Learning</h2>
            <p className={`mt-2 text-sm ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>
              Continue your journey of focus, growth, and purpose.
            </p>
          </div>

          {/* Learning Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyCourses.map((course) => (
              <div
                key={course.id}
                className={`rounded-lg shadow-md p-4 transition duration-300 border ${darkMode ? 'bg-white text-black border-gray-200' : 'bg-[#1c1c1c] text-white border-[#333]'}`}
              >
                <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
                <p className="text-sm mb-3">{course.description}</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mb-2">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs">
                  Progress: <span className="font-bold">{course.progress}%</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </>
  );
}

export default MyLearning;
