import React, { useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

const kidsContent = {
  puppies: {
    title: 'Puppy Fun & Facts',
    content: 'Welcome to the Puppy Fun & Facts page! Learn everything about puppies here!',
  },
  kittens: {
    title: 'Kitty Corner',
    content: 'Explore all about kittens in the Kitty Corner page!',
  },
  fish: {
    title: 'Colorful Fish World',
    content: 'Dive into the Colorful Fish World and learn about different fish species!',
  },
  frogs: {
    title: 'Frogs & Friends',
    content: 'Discover fun facts about frogs and their habitats!',
  },
  zoo: {
    title: 'Meet the Zoo Animals',
    content: 'Get to know the amazing animals at the zoo!',
  },
  stories: {
    title: 'Animal Stories',
    content: 'Enjoy fun and educational animal stories!',
  },
  conservation: {
    title: 'Save the Jungle!',
    content: 'Learn how you can help in jungle conservation!',
  },
  photos: {
    title: 'Animal Photo Fun',
    content: 'Enjoy amazing photos of animals from around the world!',
  },
  'pet-care': {
    title: 'Pet Care Basics',
    content: 'Learn the basics of taking care of your pets!',
  },
  games: {
    title: 'Fun Animal Games',
    content: 'Play fun animal-themed games and learn while playing!',
  },
};

export default function KidsPage() {
  const { section } = useParams();
  const data = kidsContent[section];

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
