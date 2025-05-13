
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav_AboutUs from '../components/Nav_AboutUs';
import Footer from '../components/Footer';
import logob from '../assets/images/logob.avif';

function AccountSettings({ toggleDarkMode, darkMode }) {
  const [formData, setFormData] = useState({
    username: 'JohnDoe',
    email: 'john@example.com',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (formData.newPassword && formData.newPassword !== formData.confirmNewPassword) {
      alert('New passwords do not match!');
      return;
    }

    // Update account logic
    console.log('Updating account with:', formData);
  };

  return (
    <>
      <Nav_AboutUs toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <div className={`min-h-screen flex flex-col justify-center items-center px-4 py-12 sm:px-6 lg:px-8 ${darkMode ? 'bg-white' : 'dark:bg-[#111]'}`}>
        <div className="w-full max-w-[800px] space-y-8">
          <div className="text-center">
            <Link to="/" className="flex items-center justify-center space-x-3">
              <img src={logob} alt="FocusTube Logo" className="h-12 w-12 rounded-full border dark:border-gray-700 dark:border-gray-600" />
              <h2 className="text-3xl font-extrabold tracking-tight">
                <span className="text-[#FF0000]">Focus</span>
                <span className={darkMode ? "text-black" : "text-white"}>Tube</span>
              </h2>
            </Link>
            <p className={`mt-2 text-lg ${darkMode ? 'text-gray-800' : 'text-gray-300'}`}>
              Account Settings
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleUpdate}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-4">
                <label htmlFor="username" className={`block text-base font-medium mb-1 ${darkMode ? 'text-black' : 'text-white'}`}>
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  className={`block w-full px-3 py-4 border dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-base ${darkMode ? 'bg-white text-black' : 'dark:bg-[#1f1f1f] text-white'}`}
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
                  value={formData.email}
                  onChange={handleChange}
                  className={`block w-full px-3 py-4 border dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-base ${darkMode ? 'bg-white text-black' : 'dark:bg-[#1f1f1f] text-white'}`}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="currentPassword" className={`block text-base font-medium mb-1 ${darkMode ? 'text-black' : 'text-white'}`}>
                  Current Password
                </label>
                <input
                  id="currentPassword"
                  name="currentPassword"
                  placeholder='••••••••'

                  type="password"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  className={`block w-full px-3 py-4 border dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-base ${darkMode ? 'bg-white text-black' : 'dark:bg-[#1f1f1f] text-white'}`}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="newPassword" className={`block text-base font-medium mb-1 ${darkMode ? 'text-black' : 'text-white'}`}>
                  New Password
                </label>
                <input
                  id="newPassword"
                  name="newPassword"
                  placeholder='••••••••'

                  type="password"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className={`block w-full px-3 py-4 border dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-base ${darkMode ? 'bg-white text-black' : 'dark:bg-[#1f1f1f] text-white'}`}
                />
              </div>

              <div>
                <label htmlFor="confirmNewPassword" className={`block text-base font-medium mb-1 ${darkMode ? 'text-black' : 'text-white'}`}>
                  Confirm New Password
                </label>
                <input
                  id="confirmNewPassword"
                  name="confirmNewPassword"
                  type="password"
                  placeholder='••••••••'
                  value={formData.confirmNewPassword}
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
                Update Settings
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </>
  );
}

export default AccountSettings;
