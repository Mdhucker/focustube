
import Header from '../components/Header';
import Nav_AboutUs from '../components/Nav_AboutUs';
import Footer from '../components/Footer';
import { useState } from "react";
function DonatePage({ toggleDarkMode, darkMode }) {
  const donationOptions = [
    { amount: "$5", description: "Helps keep our servers running." },
    { amount: "$10", description: "Supports video curation and reviews." },
    { amount: "$20", description: "Helps us build mobile and AI features." },
    { amount: "Custom", description: "Give what you can from the heart." }
  ];

  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <>
      <Nav_AboutUs toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="min-h-screen flex flex-col transition-colors duration-300 bg-white text-gray-900 dark:bg-[#111] dark:text-gray-100">
        <main className="flex-grow py-12 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">🙏 Support FocusTube</h1>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
              Your support helps us maintain and grow this platform for focused, distraction-free learning. Every contribution counts!
            </p>
          </div>

          <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {donationOptions.map((option, index) => (
              <div
                key={index}
                onClick={() => handleSelect(index)}
                className={`cursor-pointer border rounded-xl p-6 text-center transition-all duration-300 shadow-md ${
                  selected === index
                    ? 'bg-red-600 text-white border-red-600'
                    : 'bg-gray-50 dark:bg-[#1f1f1f] border-red-600 dark:border-gray-700'
                }`}
              >
                <h3 className="text-xl font-semibold mb-2">{option.amount}</h3>
                <p className="text-sm">{option.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <button
              className="px-6 py-3 bg-red-600 hover:bg-red-600 text-white rounded-xl text-lg font-medium transition duration-300"
              onClick={() => alert("Thank you! Redirecting to donation processing...")}
            >
              Donate Now
            </button>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              100% of donations go to platform development, hosting, and growth.
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center border-t border-gray-300 dark:border-gray-600 pt-10">
            <h2 className="text-2xl font-semibold mb-4">Why Support Us?</h2>
            <p className="text-base text-gray-700 dark:text-gray-300">
              FocusTube is ad-free and community-driven. With your help, we can expand features, curate even more valuable content, and develop mobile and offline tools for focused learners around the world.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default DonatePage;
