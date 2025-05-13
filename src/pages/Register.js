
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav_AboutUs from '../components/Nav_AboutUs';
import Footer from '../components/Footer';
import logob from '../assets/images/logob.avif';

function RegisterPage({ toggleDarkMode, darkMode }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Handle registration logic here
    console.log("Registering:", formData);
  };

  return (
    <>
      <Nav_AboutUs toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <div className={`min-h-screen flex flex-col justify-center items-center px-4 py-12 sm:px-6 lg:px-8 ${darkMode ? 'bg-white' : 'dark:bg-[#111]'}`}>
        <div className="w-full max-w-[800px] space-y-8">
          <div className="text-center">
            <Link to="/" className="flex items-center justify-center space-x-3">
              <img src={logob} alt="FocusTube Logo" className="h-12 w-12 rounded-full border border-gray-300 dark:border-gray-600" />
              <h2 className="text-3xl font-extrabold tracking-tight">
                <span className="text-[#FF0000]">Focus</span>
                <span className={darkMode ? "text-black" : "text-white"}>Tube Registration</span>
              </h2>
            </Link>
            <p className={`mt-2 text-lg ${darkMode ? 'text-gray-800' : 'text-gray-300'}`}>
              Create your FocusTube account
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleRegister}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-4">
                <label htmlFor="username" className={`block text-base font-medium mb-1 ${darkMode ? 'text-black' : 'text-white'}`}>
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  placeholder='The_Asset'
                  type="text"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className={`block w-full px-3 py-4 border dark:border-gray-700  rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:dark:border-gray-700 sm:text-base ${darkMode ? 'bg-white text-black' : 'dark:bg-[#1f1f1f] text-white'}`}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className={`block text-base font-medium mb-1 ${darkMode ? 'text-black' : 'text-white'}`}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder='example@gmail.com'
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`block w-full px-3 py-4 border dark:border-gray-700  rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-base ${darkMode ? 'bg-white text-black' : 'dark:bg-[#1f1f1f] text-white'}`}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className={`block text-base font-medium mb-1 ${darkMode ? 'text-black' : 'text-white'}`}>
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder='••••••••'

                  required
                  value={formData.password}
                  onChange={handleChange}
                  className={`block w-full px-3 py-4 border dark:border-gray-700  rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-base ${darkMode ? 'bg-white text-black' : 'dark:bg-[#1f1f1f] text-white'}`}
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className={`block text-base font-medium mb-1 ${darkMode ? 'text-black' : 'text-white'}`}>
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder='••••••••'
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`block w-full px-3 py-4 border dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-base ${darkMode ? 'bg-white text-black' : 'dark:bg-[#1f1f1f] text-white'}`}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-base font-medium rounded-md text-white bg-[#FF0000] hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Create Account
              </button>
            </div>
          </form>

          <p className={`mt-4 text-center text-base ${darkMode ? 'text-black' : 'text-gray-400'}`}>
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-[#FF0000] hover:text-red-600">
              Sign in here
            </Link>
          </p>
        </div>
      </div>

      <Footer toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </>
  );
}

export default RegisterPage;
