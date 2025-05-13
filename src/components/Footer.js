import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Music,
  MessageCircleMore
} from 'lucide-react';
// import React from 'react';
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logob from '../assets/images/logob.avif'; // adjust path as needed

function Footer({ toggleDarkMode, darkMode }) {
    const [menuOpen, setMenuOpen] = useState(false);
    
      const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
      };
  return (
   <>
    <footer className={`text-gray-400 py-10 px-6 md:px-20   text-sm ${darkMode ? 'bg-gray-800' : 'bg-black'}`}>
    {/* <footer className="bg-black text-white py-10 px-6 md:px-20 mt-10"> */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    
    {/* Logo / Brand */}
    <div>
   
            <Link
                  to="/"
                  
                  className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-gray-700" : "text-gray-100"}`}
                >
                {/* Left: Logo */}
                <div className="flex items-center space-x-2">

                <img
                    src={logob}
                    alt="FocusTube Logo"
                    className="h-10 w-10 object-cover rounded-full border border-gray-300 dark:border-gray-600"
                  />
                  <div className="text-2xl font-bold">
                    <span className={`${darkMode ? "text-black" : "text-[#FF0000]"}`}>Focus</span>
                    <span className={`${darkMode ? "text-[#FF0000]" : "text-white"}`}>Tube</span>
                  </div>
                </div>
            </Link>

      <p className="mt-2 text-sm text-gray-400">
        Your gateway to focused and meaningful video content.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
      <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
        <li><a href="#about" className="hover:text-red-500">About Us</a></li>
        <li><a href="#privacy" className="hover:text-red-500">Privacy Policy</a></li>
        <li><a href="#terms" className="hover:text-red-500">Terms of Service</a></li>
        <li><a href="#faq" className="hover:text-red-500">FAQs</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Contact</h3>
      <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
        <li>Email: <a href="mailto:info@focustube.com" className="hover:text-red-500">info@focustube.com</a></li>
        <li>Phone: <a href="tel:+1234567890" className="hover:text-red-500">+1 234 567 890</a></li>
        <li>Location: Online, Global</li>
      </ul>
    </div>

    {/* Social Media */}
    

<div>
  <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
  <ul className="space-y-2 text-sm">
    <li>
      <a
        href="https://www.facebook.com/profile.php?id=100082807225034"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-[#1877F2] hover:underline"
      >
        <Facebook size={18} color="#1877F2" /> Facebook
      </a>
    </li>
    <li>
      <a
        href="https://x.com/maulidimdami"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-[#1DA1F2] hover:underline"
      >
        <Twitter size={18} color="#1DA1F2" /> Twitter
      </a>
    </li>
    <li>
      <a
        href="https://www.instagram.com/mdamimaulidi/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-[#E4405F] hover:underline"
      >
        <Instagram size={18} color="#E4405F" /> Instagram
      </a>
    </li>
    <li>
      <a
        href="https://youtube.com/@maulidimdami"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-[#FF0000] hover:underline"
      >
        <Youtube size={18} color="#FF0000" /> YouTube
      </a>
    </li>
    <li>
      <a
        href="https://www.tiktok.com/@maulidimdami"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-[#010101] hover:underline"
      >
        <Music size={18} color="#010101" /> TikTok
      </a>
    </li>
    <li>
      <a
        href="https://www.threads.net/@maulidimdami"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-black hover:underline"
      >
        <MessageCircleMore size={18} color="#000000" /> Threads
      </a>
    </li>
  </ul>
</div>



  </div>

  {/* Footer Bottom */}
  {/* <hr className="border-t-2 border-[#FF0000] w-full" /> */}

  <div className="mt-10 border-t border-gray-700  pt-6 text-center text-sm text-gray-400">
    © 2025 FocusTube. All rights reserved.
  </div>
</footer>

      {/* </footer> */}
   </>
  );
}

export default Footer;
