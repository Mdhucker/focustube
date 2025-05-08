import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import logob from '../assets/images/logob.avif'; // adjust path as needed

function AboutUs({ toggleDarkMode, darkMode }) {
  const focusColor = (text) => (
    <>
      <span className="text-[#FF0000]">Focus</span>
      <span className={darkMode ? 'text-black' : 'text-white'}>{text}</span>
    </>
  );

  

  return (
    <>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <div className={`min-h-screen w-full px-4 duration-300 ${darkMode ? 'bg-white' : 'bg-[#111111]'}`}>
        <div className="flex flex-1 flex-col items-center p-4">
          {/* <Link to="" className={`text-2xl md:text-3xl ${darkMode ? 'text-gray-800' : 'text-gray-100'} mb-4`}>
            About {focusColor("Tube")}
          </Link> */}

          <div className={`max-w-4xl mx-auto my-10 px-4 ${darkMode ? 'text-gray-800' : 'text-white'}`}>
            <h1 className="text-3xl font-bold mb-6 text-center">
              Welcome to {focusColor("Tube")}
             
            </h1>

            <Link
            to="/"
            className={`cursor-pointer hover:text-red-600 ${darkMode ? "text-gray-700" : "text-gray-100"}`}
          >
            {/* Left: Logo */}
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
               
              is a special platform made to help people stay focused and learn better. In today’s world, many videos and apps take your attention and waste your time. But {focusColor("Tube")} is built to help you watch only useful videos that can teach you, inspire you, or help you grow. Even though this system is created by a very few content and they are in this FocusTube too, each video inside this platform has been carefully selected to ensure its value and relevance.
            </p>



            <h2 className="text-2xl font-semibold mt-8 mb-4">🌍 Our Vision</h2>
            <p className="mb-4 text-lg leading-relaxed">
              We want to change how people use video platforms. {focusColor("Tube")} gives you a clean, simple place where you can find helpful videos instead of getting lost in endless scrolling or random suggestions.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">🎯 Our Mission</h2>
            <p className="mb-4 text-lg leading-relaxed">
              The goal of {focusColor("Tube")} is to give you a better way to spend time online. Every video is chosen to help you learn something new, stay motivated, or become better at what you do—so you don’t waste your time watching things that don’t help you grow.
            </p>

            

            <h2 className="text-2xl font-semibold mt-8 mb-4">⚙️ Core Features</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
            <li>Smart filters that show only helpful and meaningful videos.</li>
            <li>Curated categories such as Mindset, AI, Coding, Business and more.</li>
            <li>Clean, distraction-free interface designed for focus and clarity.</li>
            <li>Daily refreshed content to keep your learning consistent and relevant.</li>
            <li>Bookmark and revisit your favorite videos anytime.</li>
            <li>Lightweight and fast performance across all devices.</li>
            <li>Dark mode for comfortable viewing anytime, anywhere.</li>
            </ul>


            <h2 className="text-2xl font-semibold mt-8 mb-4">💡 Why It Matters</h2>
            <p className="mb-4 text-lg leading-relaxed">
              Your attention is very important, and how you use it affects your life. {focusColor("Tube")} helps you spend time on videos that teach you something or make you better instead of videos that only waste your time.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">📚 Our Philosophy</h2>
            <p className="mb-4 text-lg leading-relaxed">
              We believe that when you focus, you grow. That’s why {focusColor("Tube")} is built to protect your attention. Every choice on the platform is made to support learning, thinking, and real improvement—not just entertainment.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">🧭 Who Is It For?</h2>
            <p className="mb-4 text-lg leading-relaxed">
              • Students who want to learn better<br />
              • Developers and engineers who want to grow their skills<br />
              • Creators who need helpful content to stay inspired<br />
              • Anyone who feels tired from using the internet too much
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">🚨 The Problem We're Solving</h2>
            <p className="mb-4 text-lg leading-relaxed">
              Most platforms want you to keep watching without thinking. They are designed to grab your attention and keep you stuck. But {focusColor("Tube")} is different—it helps you choose what to watch, so you stay in control and use your time wisely.
            </p>
      
                <h2 className="text-2xl font-semibold mt-8 mb-4">📺 Why the Name?</h2>
                <p className="mb-4 text-lg leading-relaxed">
                The name {focusColor("Tube")} means this platform is all about helping you focus. While YouTube is a wonderful place full of knowledge and entertainment, {focusColor("Tube")} is like a small room inside the big house—where you go when you want to grow, learn, and stay focused.
                </p>
                <p className="mb-4 text-lg leading-relaxed">
                As the founder, I want to say this clearly: I truly love YouTube! ❤️ It's one of the best libraries in the world—filled with incredible content and brilliant creators. I’m also deeply grateful to the amazing engineers and experts at YouTube for providing a powerful API and making it possible to embed videos legally and easily. You've made platforms like FocusTube possible. Thank you sincerely! 🙏
                </p>


                <p className="mb-4 text-lg leading-relaxed">
                This is not made to compete with YouTube—nope! 😅 It's just here to guide people who sometimes lose focus or spend too much time watching random stuff. And to be honest, even I—the founder—used to waste a lot of time on other platforms. That’s actually what made me create this. Some of us just need a little push to stay disciplined, and that’s totally okay.
                </p>



            <h2 className="text-2xl font-semibold mt-8 mb-4">🤝 Join the Movement</h2>
            <p className="mb-4 text-lg leading-relaxed">
              {focusColor("Tube")} is not just a website—it’s a way of thinking. If you want to learn more, think clearly, and stop wasting time, then join us. Let’s build a world where we use the internet to grow, not to get lost.
            </p>
            <hr className="border-t-1 py-0 border-[#FF0000] w-full mt-[45px]" />

            <h2 className="text-2xl font-semibold mt-8 mb-4">🧑‍💻 The Founder</h2>
            <p className="mb-4 text-lg leading-relaxed">
              A student from Tanzania, who studies computer engineering, built {focusColor("Tube")} after getting tired of wasting time on videos that didn’t help him. He wanted something better—a place where technology supports your goals, not steals your time.
            </p>

            


            <div>
            <div>
  <p className="mb-4 text-lg leading-relaxed">
    The founder of <span className="text-red-500">FocusTube</span>, <span className="text-red-500">Maulidi Hamadi Bakari</span>, is a passionate student and driven technologist from Tanzania. He is currently pursuing a degree in <strong>Computer Engineering</strong> at the <strong>University of Dodoma</strong>, under the <strong>College of Informatics and Virtual Education (CIVE)</strong>. Maulidi expresses his gratitude to both the university and the college for their unwavering support, providing valuable facilities for life and learning, as well as exceptional lecturers who inspire him every day.
  </p>

  <p className="mb-4 text-lg leading-relaxed">
    For Maulidi, technology is not just about coding—it's about solving <strong>real-world problems</strong> that impact people's lives. He believes technology should serve a greater purpose by creating meaningful, socially responsible solutions that drive positive change.
  </p>

  <p className="mb-4 text-lg leading-relaxed">
    With <span className="text-red-500">FocusTube</span>, Maulidi's vision is to help people take control of their time, focus on their growth, and consume content with purpose, encouraging a digital environment that fosters mindfulness and productivity.
  </p>

  <p className="mb-4 text-lg leading-relaxed">
    Beyond his work in technology, Maulidi finds peace and inspiration in <strong>reciting the Qur'an</strong>, a practice that informs his holistic approach to life and technology. His goal with <span className="text-red-500">FocusTube</span> is to create a movement that uses digital media to promote self-improvement, spiritual balance, and mindful living.
  </p>
</div>

</div>




          </div>

        </div>

      </div>


      <Footer toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </>
  );
}

export default AboutUs;
