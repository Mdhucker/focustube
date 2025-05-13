import React, { useState, useEffect, useRef } from 'react';
import Nav_AboutUs from '../components/Nav_AboutUs';
import Footer from '../components/Footer';

function ContactWithChat({ toggleDarkMode, darkMode }) {
  const [messages, setMessages] = useState([]);
  const [comment, setComment] = useState('');
  const chatEndRef = useRef(null);
  const [input, setInput] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simulate admin reply
    setTimeout(() => {
      const reply = {
        text: 'Thanks for your message. We’ll get back to you shortly.',
        sender: 'admin',
      };
      setMessages((prev) => [...prev, reply]);
    }, 1000);
  };

  const sendComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const commentMessage = { text: comment, sender: 'user' };
    setMessages((prev) => [...prev, commentMessage]);
    setComment('');

    // Simulate reply
    setTimeout(() => {
      const reply = {
        text: 'Your comment has been received. Thank you!',
        sender: 'admin',
      };
      setMessages((prev) => [...prev, reply]);
    }, 1000);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const focusColor = (text) => (
    <>
      <span className="text-[#FF0000]">Focus</span>
      <span className={darkMode ? 'text-black' : 'text-white'}>{text}</span>
    </>
  );

     useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to top when component mounts
      }, []);
      
  
  return (
    <>
      <Nav_AboutUs toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <div className={`min-h-screen flex  flex-col sm:flex-row ${darkMode ? 'bg-white' : 'bg-[#111]'}`}>
        {/* Contact Information */}
        <div className={`flex flex-2 flex-col  p-6 ${darkMode ? 'text-black' : 'text-white'}`}>
          <h1 className="text-3xl font-bold mb-4">
            Contact Focus<span className="text-[#FF0000]">Tube</span>
          </h1>
          <p className="mb-4 text-lg leading-relaxed">
            Whether you have a question, suggestion, or partnership idea—we’d love to hear from you. At {focusColor("Tube")}, your feedback helps us grow and serve you better.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">📧 Email Support</h2>
          <p className="mb-4 text-lg leading-relaxed">
            Feel free to reach out via email:
            <br />
            <strong className="text-[#FF0000]">📩 focusTubeTeam@gmail.com</strong>
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">📱 WhatsApp</h2>
          <p className="mb-4 text-lg leading-relaxed">
            For direct inquiries or to connect with the founder, contact us via WhatsApp:
            <br />
            <strong className="text-[#FF0000]">📱 +255 686855352</strong>
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">📍 Office Location (Tanzania)</h2>
          <p className="mb-4 text-lg leading-relaxed">
            University of Dodoma, College of Informatics and Virtual Education (CIVE), Dodoma - Tanzania
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">🤝 Collaborations & Partnerships</h2>
          <p className="mb-4 text-lg leading-relaxed">
            Are you an educator, content creator, developer, or organization with a similar vision? Reach out to discuss how we can work together for the betterment of our digital communities.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">💬 Social Media (Coming Soon)</h2>
          <p className="mb-4 text-lg leading-relaxed">
            We're working on launching official FocusTube social pages so we can stay connected with our growing community.
          </p>
        </div>

        {/* Chat Box */}
        <div className={`w-full sm:w-1/3 border-t mb-2 sm:border-t-0 sm:border-l border-gray-300 dark:border-gray-700 flex flex-col`}>
          <div className={`flex flex-col h-[600px] max-h-screen ${darkMode ? 'bg-[#f9f9f]' : 'bg-[#1c1c1c]'}`}>
            {/* Scrollable Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[70%] p-3 rounded-md text-xs shadow-md ${
                    msg.sender === 'user'
                      ? darkMode
                        ? 'bg-gray-300 self-end text-black'
                        : 'bg-gray-100 self-end text-black'
                      : 'bg-green-500 self-start text-white'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={chatEndRef} />
              
            </div>

            {/* Chat Input */}
          



          </div>
          <form
              onSubmit={sendMessage}
              className={`p-3 border-t flex flex-col gap-3 ${darkMode ? 'bg-white' : 'bg-[#111]'}`}
            >
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  className={`flex-[8] p-2 rounded-md border focus:outline-none ${
                    darkMode
                      ? 'bg-gray-100 text-black border-gray-300'
                      : 'bg-gray-800 text-white border-gray-700'
                  }`}
                  placeholder="Talk with FocusTube community..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button
                  type="submit"
                  className={`flex-[1] p-2 rounded-md  focus:outline-none ${
                    darkMode
                      ? 'bg-[#FF0000] text-white '
                      : 'bg-[#FF0000] text-gray-100 '
                  }`}
                >
                  Send
                </button>
              </div>
            </form>

            {/* Comment Section */}
            <form onSubmit={sendComment} className="px-3 pt-[20px] space-y-3">
              <textarea
                rows={2}
                className={`w-full p-2 h-[120px]  rounded-md border resize-none focus:outline-none ${
                  darkMode
                    ? 'bg-gray-100 text-white border-gray-300'
                    : 'bg-gray-800 text-white border-gray-700'
                }`}
                placeholder="Your comment to FocusTube..."
                value={comment}
                onChange={handleCommentChange}
              />
              <button
                type="submit"
                className={`w-full p-2 rounded-md   focus:outline-none ${
                  darkMode
                    ? 'bg-[#FF0000] text-white '
                    : 'bg-[#FF0000] text-white '
                }`}
              >
                Send comments
              </button>
            </form>
        </div>
        
      </div>

      <Footer toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </>
  );
}

export default ContactWithChat;
