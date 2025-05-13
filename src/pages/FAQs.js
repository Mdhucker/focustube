import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import Header from '../components/Header';
import Nav_AboutUs from '../components/Nav_AboutUs';
import Footer from '../components/Footer';

const faqs = [
  {
    question: "What is FocusTube?",
    answer:
      "FocusTube is a curated platform that delivers inspiring, educational, and meaningful videos without distractions. It's designed for students, developers, creators, and lifelong learners who want to stay focused and grow."
  },
  {
    question: "How is FocusTube different from YouTube?",
    answer:
      "FocusTube filters out noise and only shows content that helps you grow mentally, spiritually, and professionally. You won’t find clickbait or irrelevant recommendations—just purposeful videos."
  },
  {
    question: "Is FocusTube free to use?",
    answer:
      "Yes! FocusTube is completely free. It’s built to help people stay focused and learn more effectively without having to pay for high-quality content."
  },
  {
    question: "Can I request a specific category or video?",
    answer:
      "Yes, we plan to add a feature where users can suggest categories or videos. Our goal is to continuously improve the platform based on your needs."
  },
  {
    question: "Will FocusTube have a mobile app?",
    answer:
      "Yes, we're working on a mobile app version to make it even easier to stay focused and learn on the go. Stay tuned!"
  },
  {
    question: "Who should use FocusTube?",
    answer:
      "Anyone who wants to learn, grow, and stay away from distractions—whether you're a student, programmer, creative, or simply someone seeking purposeful content."
  },
  {
    question: "Do I need to sign up to use FocusTube?",
    answer:
      "No sign-up is required to browse most content. However, creating an account allows you to bookmark, save progress, and receive personalized recommendations."
  },
  {
    question: "How are videos selected?",
    answer:
      "We use a combination of human curation and intelligent filters to ensure only high-quality, focused content appears—no fluff, no time-wasters."
  },
  {
    question: "Can I contribute or suggest videos?",
    answer:
      "Yes! Once logged in, you’ll be able to suggest videos that align with our mission. Our team will review and approve the best ones."
  },
  {
    question: "Is there a way to support FocusTube?",
    answer:
      "You can support us by sharing FocusTube with others, contributing suggestions, or donating once we open that feature. We appreciate your support!"
  }
];

function FAQs({ toggleDarkMode, darkMode }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Nav_AboutUs toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div
        className={`min-h-screen flex flex-col transition-colors duration-300 ${
          darkMode ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <main className="flex-grow py-12 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg">
              Quick answers to help you understand FocusTube better.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-md shadow-md transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-100 dark:border-gray-700 "
                    : "dark:bg-[#1f1f1f] dark:border-gray-700 "
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 flex justify-between items-center"
                >
                  <span className="text-base sm:text-lg font-medium">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`overflow-hidden px-5 pb-5 text-sm sm:text-base ${
                        darkMode ? "text-gray-700" : "text-gray-700"
                      }`}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default FAQs;
