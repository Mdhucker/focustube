import React from 'react';
import Nav_AboutUs from '../components/Nav_AboutUs';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import logob from '../assets/images/logob.avif';

function AboutUs({ toggleDarkMode, darkMode }) {
  const focusColor = (text) => (
    <>
      <span className="text-[#FF0000]">Focus</span>
      <span className={darkMode ? 'text-black' : 'text-white'}>{text}</span>
    </>
  );

  return (
    <>
      <Nav_AboutUs toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <div className={`min-h-screen w-full  sm:px-7 duration-300 ${darkMode ? 'bg-white' : 'dark:bg-[#111]'}`}>
  <div className="flex flex-1 flex-col items-center p-4">
    <div className={`w-full max-w-screen-xl mx-auto my-2 px-1 ${darkMode ? 'text-gray-800' : 'text-white'} text-justify`}>
            <h1 className="text-xl font-bold mb-4 text-center sm:text-2xl md:text-3xl font-bold">
            {/* <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center"> */}

              Welcome to {focusColor("Tube")}
            </h1>

            <Link
              to="/"
              className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-gray-700" : "text-gray-100"}`}
            >
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

            <p className="mb-4 text-lg leading-relaxed">
              is a special platform designed to help people stay focused and learn more effectively. In today’s world, many videos and apps are built to capture your attention and waste your time. But {focusColor("Tube")} is created to help you watch only meaningful videos that can teach you, inspire you, or help you grow. The platform features a large collection of carefully selected videos, each chosen for its value, usefulness, and relevance to your personal growth.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
            <p className="mb-4 text-lg leading-relaxed">
              We want to change how people use video platforms. {focusColor("Tube")} offers a clean, distraction-free space filled with meaningful content—so instead of endless scrolling and random suggestions, you discover videos that educate, inspire, and help you grow.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p className="mb-4 text-lg leading-relaxed">
              The goal of {focusColor("Tube")} is to give you a better, more meaningful way to spend your time online. Every video is carefully selected to help you learn something new, stay inspired, and grow into your best self. Your time is precious—don’t waste it on content that holds you back when you can use it to fuel your dreams and sharpen your mind.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Core Features</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Smart filters that show only helpful and meaningful videos.</li>
              <li>Curated categories such as Mindset, AI, Coding, Business and more.</li>
              <li>Clean, distraction-free interface designed for focus and clarity.</li>
              <li>Daily refreshed content to keep your learning consistent and relevant.</li>
              <li>Bookmark and revisit your favorite videos anytime.</li>
              <li>Lightweight and fast performance across all devices.</li>
              <li>Dark mode for comfortable viewing anytime, anywhere.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Why It Matters</h2>
            <p className="mb-4 text-lg leading-relaxed">
              Your attention is one of the most powerful assets you have—where it goes, your life follows. {focusColor("Tube")} is built to protect that power by guiding you toward videos that educate, elevate, and empower you—instead of draining your energy on distractions that offer nothing in return.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Philosophy</h2>
            <p className="mb-4 text-lg leading-relaxed">
              We believe that when you focus, you grow. That’s why {focusColor("Tube")} is built to protect your attention. Every choice on the platform is made to support learning, thinking, and real improvement—not just entertainment.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Who Is It For?</h2>
            <p className="mb-4 text-lg leading-relaxed">
              • Students who want to learn better<br />
              • Developers and engineers who want to grow their skills<br />
              • Creators who need helpful content to stay inspired<br />
              • Anyone who feels tired from using the internet too much
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">The Problem We're Solving</h2>
            <p className="mb-4 text-lg leading-relaxed">
              Most platforms want you to keep watching without thinking. They are designed to grab your attention and keep you stuck. But {focusColor("Tube")} is different—it helps you choose what to watch, so you stay in control and use your time wisely.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Why the Name?</h2>
            <p className="mb-4 text-lg leading-relaxed">
              The name {focusColor("Tube")} means this platform is all about helping you focus. While YouTube is a wonderful place full of knowledge and entertainment, {focusColor("Tube")} is like a small room inside the big house—where you go when you want to grow, learn, and stay focused.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              As the founder, I want to say this clearly: I truly love YouTube! ❤️ It's one of the best libraries in the world—filled with incredible content and brilliant creators. I’m also deeply grateful to the amazing engineers and experts at YouTube for their unwavering commitment to building a platform that empowers creators and viewers alike. Your hard work and innovation have made it possible for platforms like FocusTube to exist and thrive. Thank you sincerely! 🙏
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              This is not made to compete with YouTube—nope! 😅 It's just here to guide people who sometimes lose focus or spend too much time watching random stuff. And to be honest, even I—the founder—used to waste a lot of time on other platforms. That’s actually what made me create this. Some of us just need a little push to stay disciplined, and that’s totally okay.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">🤝 Join the Movement</h2>
            <p className="mb-4 text-lg leading-relaxed">
              {focusColor("Tube")} is not just a website—it’s a way of thinking. If you want to learn more, think clearly, and stop wasting time, then join us. Let’s build a world where we use the internet to grow, not to get lost.
            </p>
            <hr className="border-t border-[#FF0000] w-full mt-10" />

            <h2 className="text-2xl font-semibold mt-8 mb-4">🧑The Founder</h2>
            <p className="mb-4 text-lg leading-relaxed">
              The founder of <span className="text-red-500">FocusTube</span>, <span className="text-red-500">Maulidi Hamadi Bakari</span>, is a passionate student and driven technologist from Tanzania. He is currently pursuing a degree in <strong>Computer Engineering</strong> at the <strong>University of Dodoma</strong>, under the <strong>College of Informatics and Virtual Education (CIVE)</strong>. Maulidi expresses his gratitude to both the university and the college for their unwavering support, providing valuable facilities for life and learning, as well as exceptional lecturers who inspire him every day.
            </p>

            <p className="mb-4 text-lg leading-relaxed">
              For Maulidi, technology is not just about coding—it's about solving <strong>real-world problems</strong> that impact people's lives. He believes that technology should serve a greater purpose by creating meaningful, socially responsible solutions that drive positive change in the world.
            </p>

            <p className="mb-4 text-lg leading-relaxed">
              A student from Tanzania, Maulidi built {focusColor("Tube")} after getting tired of wasting time on videos that didn’t help him. He wanted something better—a place where technology supports your goals, not steals your time. With <span className="text-red-500">FocusTube</span>, his vision is to help people take control of their time, focus on their growth, and consume content with purpose, encouraging a digital environment that fosters mindfulness and productivity.
            </p>

            <p className="mb-4 text-lg leading-relaxed">
              Beyond his work in technology, Maulidi finds peace and inspiration in <strong>reciting the Qur'an</strong>, a practice that informs his holistic approach to life and technology. His goal with <span className="text-red-500">FocusTube</span> is to create a movement that uses digital media to promote self-improvement, spiritual balance, and mindful living.
            </p>
          </div>
        </div>
      </div>

      <Footer toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </>
  );
}

export default AboutUs;



// this is good for animation 

// import React from 'react';
// import Nav_AboutUs from '../components/Nav_AboutUs';
// import Footer from '../components/Footer';
// import { Link } from 'react-router-dom';
// import logob from '../assets/images/logob.avif';
// import { motion } from 'framer-motion';

// function AboutUs({ toggleDarkMode, darkMode }) {
//   const focusColor = (text) => (
//     <>
//       <span className="text-[#FF0000]">Focus</span>
//       <span className={darkMode ? 'text-black' : 'text-white'}>{text}</span>

//     </>
//   );

//   return (
//     <>
//       <Nav_AboutUs toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

//       <div className={`min-h-screen w-full sm:px-7 duration-300 ${darkMode ? 'bg-white' : 'dark:bg-[#111]'}`}>
//         <div className="flex flex-1 flex-col items-center p-4">
//           <div className={`w-full max-w-screen-xl mx-auto my-2 px-1 ${darkMode ? 'text-gray-800' : 'text-white'} text-justify`}>

//             <motion.h1
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-xl font-bold mb-4 text-center sm:text-2xl md:text-3xl font-bold"
//             >
//               Welcome to {focusColor("Tube")}
//             </motion.h1>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Link
//                 to="/"
//                 className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-gray-700" : "text-gray-100"}`}
//               >
//                 <div className="flex items-center space-x-2">
//                   <img
//                     src={logob}
//                     alt="FocusTube Logo"
//                     className="h-10 w-10 object-cover rounded-full border border-gray-300 dark:border-gray-600"
//                   />
//                   <div className="text-2xl font-bold">
//                     <span className={`${darkMode ? "text-black" : "text-[#FF0000]"}`}>Focus</span>
//                     <span className={`${darkMode ? "text-[#FF0000]" : "text-white"}`}>Tube</span>

                    
//                   </div>
//                 </div>
//               </Link>
//             </motion.div>

//             {[
//               { tag: 'p', text: " is a special platform designed to help people stay focused and learn more effectively. In today’s world, many videos and apps are built to capture your attention and waste your time. But FocusTube is created to help you watch only meaningful videos that can teach you, inspire you, or help you grow. The platform features a large collection of carefully selected videos, each chosen for its value, usefulness, and relevance to your personal growth." },
//               { tag: 'h2', text: "🌍 Our Vision" },
//               { tag: 'p', text: "We want to change how people use video platforms.FocusTube offers a clean, distraction-free space filled with meaningful content—so instead of endless scrolling and random suggestions, you discover videos that educate, inspire, and help you grow." },
//               { tag: 'h2', text: "🎯 Our Mission" },
//               { tag: 'p', text: "The goal of FocusTube is to give you a better, more meaningful way to spend your time online. Every video is carefully selected to help you learn something new, stay inspired, and grow into your best self. Your time is precious—don’t waste it on content that holds you back when you can use it to fuel your dreams and sharpen your mind." },
//               { tag: 'h2', text: "⚙️ Core Features", isList: true },
//               { tag: 'h2', text: "💡 Why It Matters" },
//               { tag: 'p', text: "Your attention is one of the most powerful assets you have—where it goes, your life follows. FocusTube is built to protect that power by guiding you toward videos that educate, elevate, and empower you—instead of draining your energy on distractions that offer nothing in return." },
//               { tag: 'h2', text: "📚 Our Philosophy" },
//               { tag: 'p', text: "We believe that when you focus, you grow. That’s why FocusTube is built to protect your attention. Every choice on the platform is made to support learning, thinking, and real improvement—not just entertainment." },
//               { tag: 'h2', text: "🧭 Who Is It For?" },
//               { tag: 'p', text: "• Students who want to learn better • Developers and engineers who want to grow their skills• Creators who need helpful content to stay inspired• Anyone who feels tired from using the internet too much" },
//               { tag: 'h2', text: "🚨 The Problem We're Solving" },
//               { tag: 'p', text: "Most platforms want you to keep watching without thinking. They are designed to grab your attention and keep you stuck. But FocusTube is different—it helps you choose what to watch, so you stay in control and use your time wisely." },
             
//               { tag: 'h2', text: "📺 Why the Name?" },
//               { tag: 'p', text: "As the founder, I want to say this clearly: I truly love YouTube! ❤️ It's one of the best libraries in the world—filled with incredible content and brilliant creators. I’m also deeply grateful to the amazing engineers and experts at YouTube for their unwavering commitment to building a platform that empowers creators and viewers alike. Your hard work and innovation have made it possible for platforms like FocusTube to exist and thrive. Thank you sincerely! 🙏" },

//               { tag: 'p', text: "This is not made to compete with YouTube—nope! 😅 It's just here to guide people who sometimes lose focus or spend too much time watching random stuff. And to be honest, even I—the founder—used to waste a lot of time on other platforms. That’s actually what made me create this. Some of us just need a little push to stay disciplined, and that’s totally okay." },
//               { tag: 'h2', text: "🤝 Join the Movement" },
//               { tag: 'p', text: "FocusTube is not just a website—it’s a way of thinking. If you want to learn more, think clearly, and stop wasting time, then join us. Let’s build a world where we use the internet to grow, not to get lost." },
//               { tag: 'h2', text: "🧑‍💻 The Founder" },
//               { tag: 'p', text: "The founder of FocusTube , Maulidi Hamadi Bakari, is a passionate student and driven technologist from Tanzania. He is currently pursuing a degree in <strong>Computer Engineering</strong> at the <strong>University of Dodoma</strong>, under the <strong>College of Informatics and Virtual Education (CIVE)</strong>. Maulidi expresses his gratitude to both the university and the college for their unwavering support, providing valuable facilities for life and learning, as well as exceptional lecturers who inspire him every day." },
//             ].map((item, index) => (
//               item.tag === 'h2' ? (
//                 <motion.h2
//                   key={index}
//                   initial={{ opacity: 0, x: -30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5 }}
//                   className="text-2xl font-semibold mt-8 mb-4"
//                 >
//                   {item.text}
//                 </motion.h2>
//               ) : item.isList ? (
//                 <motion.p
//                 initial="hidden"
//                 animate="visible"
//                 variants={{
//                   hidden: {},
//                   visible: {
//                     transition: {
//                       staggerChildren: 0.6, // Stagger animation of each bullet point
//                     }
//                   }
//                 }}
//                 className="mb-4 text-lg leading-relaxed"
//               >
//                 {[
//                   "• Students who want to learn better",
//                   "• Developers and engineers who want to grow their skills",
//                   "• Creators who need helpful content to stay inspired",
//                   "• Anyone who feels tired from using the internet too much"
//                 ].map((item, index) => (
//                   <motion.span
//                     key={index}
//                     variants={{
//                       hidden: { opacity: 0, y: 20 },
//                       visible: { opacity: 1, y: 0 },
//                     }}
//                     transition={{ duration: 0.5, delay: index * 0.4 }} // delay based on index
//                     className="block"
//                   >
//                     {item}
//                   </motion.span>
//                 ))}
//               </motion.p>
//               ) : (
//                 <motion.p
//                   key={index}
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4 }}
//                   className="mb-4 text-lg leading-relaxed"
//                 >
//                   {item.text.includes('FocusTube')
//                     ? item.text.split(/FocusTube/g).map((part, i, arr) =>
//                         i < arr.length - 1 ? (
//                           <React.Fragment key={i}>
//                             {part}
//                             <span className="text-red-500">FocusTube</span>

//                           </React.Fragment>
//                         ) : (
//                           part
//                         )
//                       )
//                     : item.text}
//                 </motion.p>
//               )
//             ))}

//             <motion.hr
//               initial={{ width: 0 }}
//               whileInView={{ width: '100%' }}
//               transition={{ duration: 0.5 }}
//               className="border-t border-[#FF0000] w-full mt-10"
//             />
//           </div>
//         </div>
//       </div>

//       <Footer toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
//     </>
//   );
// }

// export default AboutUs;
