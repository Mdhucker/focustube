import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

const healthContent = {
  workouts: { title: 'Home Workouts', content: 'Welcome to the Home Workouts page! Add exercises, videos, routines, etc.' },
  nutrition: { title: 'Healthy Eating', content: 'Welcome to the Healthy Eating section! Share recipes, tips, and meal plans.' },
  heart: { title: 'Heart Health Tips', content: 'Learn tips for keeping your heart healthy and strong.' },
  mental: { title: 'Mental Wellness', content: 'Resources and support for mental well-being.' },
  remedies: { title: 'Natural Remedies', content: 'Discover herbal and natural solutions to common issues.' },
  'weight-loss': { title: 'Weight Loss Plans', content: 'Structured weight loss strategies and meal plans.' },
  yoga: { title: 'Yoga & Meditation', content: 'Relax, breathe, and stretch with yoga and mindfulness.' },
  sleep: { title: 'Better Sleep Habits', content: 'Improve your sleep through better habits and routines.' },
  advice: { title: 'Doctor Advice', content: 'General health advice from certified professionals.' },
  lifestyle: { title: 'Healthy Lifestyle', content: 'Daily habits and practices for a healthy life.' },
};

export default function HealthPage({ toggleDarkMode, darkMode }) {
  const { section } = useParams();
  const data = healthContent[section];

  if (!data) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-500">Page not found</h1>
      </div>
    );
  }

  return (
    <>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        <p>{data.content}</p>
      </div>
      <Footer toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </>
  );
}
