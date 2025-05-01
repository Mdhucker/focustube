import React, { useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

const techContent = {
  smartphones: {
    title: 'Smartphone Reviews',
    content: 'Discover the latest reviews, comparisons, and recommendations for smartphones.',
  },
  'ai-tools': {
    title: 'Best AI Tools',
    content: 'Explore the best AI tools available for different purposes, including programming, design, and more.',
  },
  laptops: {
    title: 'Laptop Comparisons',
    content: 'Compare and find the best laptops for work, gaming, and everyday use.',
  },
  'build-a-pc': {
    title: 'Build a PC',
    content: 'Learn how to build your own custom PC for gaming, work, and more.',
  },
  coding: {
    title: 'Learn to Code',
    content: 'Start your journey with coding, from beginner tutorials to advanced programming concepts.',
  },
  apps: {
    title: 'Top Apps',
    content: 'Explore the top apps for productivity, entertainment, and everyday use.',
  },
  productivity: {
    title: 'Tech for Productivity',
    content: 'Discover tech tools and tips to improve your productivity and workflow.',
  },
  'hacking-basics': {
    title: 'Hacking Basics',
    content: 'Learn the basics of ethical hacking, cybersecurity, and protecting your digital assets.',
  },
  cybersecurity: {
    title: 'Cybersecurity Tips',
    content: 'Stay safe online with essential tips and strategies for cybersecurity.',
  },
  blockChain: {
    title: 'Learn Block Chain',
    content: 'Get an introduction to blockchain technology and its applications.',
  },
};

export default function TechPage() {
  const { section } = useParams();
  const data = techContent[section];

  const [darkMode, setDarkMode] = useState(false);
  
    // Toggle function
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
  
  if (!data) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-500">Page not found</h1>
      </div>
    );
  }

  return (

    <>
    <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p>{data.content}</p>
    </div>
    <Footer toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
    </>
   
  );
}
