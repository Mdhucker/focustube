
// pages/AnimalPage.jsx
import { useParams } from 'react-router-dom';

const animalContent = {
  dogs: {
    title: 'Dog Training & Care',
    content: 'Learn about dog training, care, and tips to keep your pet happy and healthy.',
  },
  cats: {
    title: 'Cat Behavior & Care',
    content: 'Understand cat behavior, tips for their care, and how to keep your feline friend in great shape.',
  },
  fish: {
    title: 'Aquarium Fish & Marine Life',
    content: 'Tips for aquarium care, fish species, and marine life maintenance.',
  },
  'exotic-pets': {
    title: 'Exotic Pets Care',
    content: 'Care tips for exotic pets, including reptiles, birds, and small mammals.',
  },
  conservation: {
    title: 'Conservation Efforts',
    content: 'Learn about the global efforts to protect wildlife and ecosystems.',
  },
  endangered: {
    title: 'Endangered Species',
    content: 'Discover endangered species and how you can help conserve their habitats.',
  },
  science: {
    title: 'Animal Science & Research',
    content: 'Explore the latest research in animal science and its implications on conservation.',
  },
  photography: {
    title: 'Wildlife Photography',
    content: 'Tips and techniques for photographing wildlife in their natural habitats.',
  },
  rescue: {
    title: 'Animal Rescue & Adoption',
    content: 'Learn about animal rescue organizations and how to adopt pets in need.',
  },
  health: {
    title: 'Animal Health & Nutrition',
    content: 'Find tips and resources for keeping your pets healthy and properly nourished.',
  },
};

export default function AnimalPage() {
  const { section } = useParams();
  const data = animalContent[section];

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
