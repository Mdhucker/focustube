
import React, { useState } from 'react';
import Nav_AboutUs from '../components/Nav_AboutUs';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import logob from '../assets/images/logob.avif';

function LoginPage({ toggleDarkMode, darkMode }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const focusColor = (text) => (
    <>
      <span className="text-[#FF0000]">Focus</span>
      <span className={darkMode ? 'text-black' : 'text-white'}>{text}</span>
    </>
  );

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', email, password);
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
                <span className={`${darkMode ? "text-black" : "text-white"}`}>Tube Login</span> 
              </h2>
            </Link>
            <p className={`mt-2 text-lg ${darkMode ? 'text-gray-800' : 'text-gray-300'}`}>
              Welcome back! Please log in to continue.
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-4">
                <label htmlFor="email-address" className={`block text-base font-medium mb-1 ${darkMode ? 'text-black' : 'text-white'}`}>
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  placeholder='example@gmail.com'
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`appearance-none block w-full px-3 py-4 border dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-base ${darkMode ? 'bg-white text-black' : 'dark:bg-[#1f1f1f] text-white'}`}
                />
              </div>
              <div>
                <label htmlFor="password" className={`block text-base font-medium mb-1 ${darkMode ? 'text-black' : 'text-white'}`}>
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`appearance-none block w-full px-3 py-4 border dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-base ${darkMode ? 'bg-white text-black' : 'dark:bg-[#1f1f1f] text-white'}`}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-base">
                <Link to="/forgot-password" className="font-medium text-[#FF0000] hover:text-red-600">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-base font-medium rounded-md text-white bg-[#FF0000] hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Sign In
              </button>
            </div>
          </form>

          <p className={`mt-4 text-center text-base ${darkMode ? 'text-black' : 'text-gray-400'}`}>
            Don't have an account?{' '}
            <Link to="/registration" className="font-medium text-[#FF0000] hover:text-red-600">
              Register here
            </Link>
          </p>
        </div>
      </div>

      <Footer toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </>
  );
}

export default LoginPage;
