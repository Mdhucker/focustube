import { motion } from "framer-motion";
import Header from "../components/Header";
import Nav_AboutUs from "../components/Nav_AboutUs";
import Footer from "../components/Footer";

function Contribute({ toggleDarkMode, darkMode }) {
  return (
    <>
      <Nav_AboutUs toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <div
        className={`min-h-screen flex flex-col transition-colors duration-300 ${
          darkMode ? "bg-white text-black" : "bg-[#111111] text-white"
        }`}
      >
        <main className="flex-grow py-12 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Contribute & Volunteer
            </h2>
            <p className="text-base sm:text-lg">
              Join us in building a better learning and growth-focused platform. Whether you're a developer, designer, student, or supporter—your help matters!
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                title: "Suggest Videos or Categories",
                description: "Have a great video or content category in mind? Let us know! You can suggest focused, inspirational, or educational content that aligns with our mission.",
                buttonText: "Suggest Now",
              },
              {
                title: "Volunteer with Skills",
                description: "Are you a developer, designer, or creative? Help us improve FocusTube by contributing your skills—from frontend design to backend features, every hand helps!",
                buttonText: "Volunteer Now",
              },
              {
                title: "Spread the Word",
                description: "Help us grow by sharing FocusTube with your network. The more people know about it, the more impact we can make together.",
                buttonText: "Share Now",
              },
              {
                title: "Contact Us",
                description: "Want to collaborate or have something to offer? Reach out through our contact page or email us directly. We're excited to hear from you!",
                buttonText: "Get in Touch",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 + index * 0.1 }}
                className={`rounded-xl p-6 shadow-md border transition-all duration-300 transform hover:scale-105 ${
                  darkMode ? "bg-gray-100 border-gray-700" : "bg-[#333333] border-gray-200"
                }`}
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="mb-4">{item.description}</p>
                <button className={`px-6 py-2 rounded-lg text-white ${
                  darkMode ? "bg-red-600 hover:bg-red-600" : "bg-red-600 hover:bg-red-600"
                }`}>
                  {item.buttonText}
                </button>
              </motion.div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Contribute;
