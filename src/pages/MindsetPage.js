
// pages/MindsetPage.jsx
import { useParams } from 'react-router-dom';

const mindsetContent = {
  innovation: {
    title: 'Innovation Mindset',
    content: 'Develop a mindset focused on creating new ideas, solutions, and innovations.',
  },
  leadership: {
    title: 'Leadership Mindset',
    content: 'Build the qualities of an effective leader who motivates, guides, and inspires others.',
  },
  entrepreneurship: {
    title: 'Entrepreneurial Thinking',
    content: 'Learn the thinking patterns and strategies that drive successful entrepreneurship.',
  },
  systems: {
    title: 'Systems Thinking',
    content: 'Understand how to approach problems and solutions with a systems thinking approach.',
  },
  money: {
    title: 'Money Mindset',
    content: 'Shift your mindset towards understanding and handling money effectively.',
  },
  programming: {
    title: 'Programming Belief',
    content: 'Develop the belief that anyone can become a successful programmer with the right mindset.',
  },
  learning: {
    title: 'Learning & Studying',
    content: 'Explore effective learning strategies and ways to optimize your study habits.',
  },
  negotiation: {
    title: 'Negotiation & Influence',
    content: 'Learn techniques and strategies for effective negotiation and influencing others.',
  },
  poverty: {
    title: 'Overcoming Poverty',
    content: 'Gain insights into how to break free from poverty through mindset and practical steps.',
  },
  life: {
    title: 'Life Balance & Resilience',
    content: 'Discover how to achieve life balance and develop resilience in the face of challenges.',
  },
};

export default function MindsetPage() {
  const { section } = useParams();
  const data = mindsetContent[section];

  if (!data) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-500">Page not found</h1>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
}
