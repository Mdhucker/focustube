import React, { useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

const travelContent = {
  adventure: {
    title: 'Adventure Travel',
    content: 'Explore exciting adventure travel destinations and activities for thrill-seekers.',
  },
  cultural: {
    title: 'Cultural Travel',
    content: 'Discover new cultures, traditions, and experiences around the world.',
  },
  luxury: {
    title: 'Luxury Travel',
    content: 'Indulge in luxury travel experiences and accommodations for a lavish getaway.',
  },
  sustainable: {
    title: 'Sustainable Travel',
    content: 'Travel responsibly with eco-friendly tips and destinations for sustainable tourism.',
  },
  solo: {
    title: 'Solo Travel',
    content: 'Tips and guides for traveling alone and making the most out of solo journeys.',
  },
  family: {
    title: 'Family Travel',
    content: 'Family-friendly travel ideas, from destinations to activities that are great for kids and adults.',
  },
  budget: {
    title: 'Budget Travel',
    content: 'Affordable travel options and tips for traveling on a budget without compromising experience.',
  },
  'road-trips': {
    title: 'Road Trips',
    content: 'The best road trip routes, destinations, and tips for a perfect driving vacation.',
  },
  'digital-nomad': {
    title: 'Digital Nomad Travel',
    content: 'Find destinations and resources for digital nomads who work while traveling.',
  },
  cruise: {
    title: 'Cruise Travel',
    content: 'Explore the world on a cruise with various options and itineraries.',
  },
  wellness: {
    title: 'Wellness Travel',
    content: 'Relax and rejuvenate with wellness-focused travel experiences.',
  },
  blogging: {
    title: 'Travel Blogging/Vlogging',
    content: 'Learn how to create a travel blog or vlog, and share your travel experiences.',
  },
  flights: {
    title: 'Flights',
    content: 'Find and book flights, along with tips for finding the best deals.',
  },
  international: {
    title: 'International Tours',
    content: 'Explore guided tours to international destinations with local experts.',
  },
  local: {
    title: 'Local Destinations',
    content: 'Discover the best local destinations and experiences right in your area.',
  },
  hotels: {
    title: 'Hotel Bookings',
    content: 'Find the best hotels and booking options for your next trip.',
  },
  guides: {
    title: 'Guided Tours',
    content: 'Book guided tours to enhance your travel experiences with local experts.',
  },
  planning: {
    title: 'Travel Planning',
    content: 'Plan your next adventure with detailed itineraries, tips, and recommendations.',
  },
};

export default function TravelPage() {
  const { section } = useParams();
  const data = travelContent[section];
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
