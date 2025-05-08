import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function TestLinks({ toggleDarkMode, darkMode }) {
  const [channelId, setChannelId] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');
  const [statusColor, setStatusColor] = useState('text-yellow-400');

  const fetchVideos = async () => {
    if (!channelId.trim()) {
      setStatusMsg('❌ Channel ID is required.');
      setStatusColor('text-red-400');
      return;
    }

    setLoading(true);
    setStatusMsg('');
    setStatusColor('text-yellow-400');

    try {
      const response = await fetch(
        `http://localhost:8000/api/fetch-videos/?channel_id=${channelId.trim()}&max_results=50`
      );

      if (response.ok) {
        const data = await response.json();
        setStatusMsg(`✅ Fetched ${data.length || 0} videos successfully!`);
        setStatusColor('text-green-400');
      } else {
        setStatusMsg('❌ Failed to fetch videos.');
        setStatusColor('text-red-400');
      }
    } catch (error) {
      console.error(error);
      setStatusMsg('❌ Error fetching videos.');
      setStatusColor('text-red-400');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        search=""
        handleSearchChange={() => {}}
        handleKeyDown={() => {}}
      />

      <div className={`min-h-screen w-full px-4 py-8 duration-300 ${darkMode ? 'bg-white text-black' : 'bg-[#111111] text-white'}`}>
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold">📺 YouTube Video Admin Tool</h1>

          {/* Channel ID Card */}
          <div className={`${darkMode ? 'bg-gray-200 text-black' : 'bg-gray-800'} p-4 rounded-xl`}>
            <h2 className="text-xl font-semibold mb-2">Popular Channel IDs</h2>
            <div className="text-sm space-y-1">
              <p>📖 Qur’an Weekly: <code className="text-green-400">UCz4ZPMEJsMQdgMHd0zvYjYA</code></p>
              <p>🎙 Nouman Ali Khan: <code className="text-green-400">UCzFtzbX0cCqbi93HNDzZfZw</code></p>
              <p>🕋 Daily Dose of Islam: <code className="text-green-400">UCWQ_cJtzolft3zF8zGka3FQ</code></p>
              <p>💻 FreeCodeCamp: <code className="text-green-400">UC8butISFwT-Wl7EV0hUK0BQ</code></p>
              <p>🧑‍💻 Mosh: <code className="text-green-400">UCWv7vMbMWH4-V0ZXdmDpPBA</code></p>
              <p>🧠 TED: <code className="text-green-400">UCAuUUnT6oDeKwE6v1NGQxug</code></p>
              <p>📰 BBC News: <code className="text-green-400">UC16niRr50-MSBwiO3YDb3RA</code></p>
            </div>
          </div>

          {/* Navigation */}
          <div className={`${darkMode ? 'bg-gray-200 text-black' : 'bg-gray-800'} p-4 rounded-xl`}>
            <h2 className="text-xl font-semibold mb-2">🔧 Admin & Management Pages</h2>
            <ul className="space-y-2 list-disc list-inside text-blue-400">
              <li><Link className="hover:underline" to="/admin">🛠 Admin Panel</Link></li>
              <li><Link className="hover:underline" to="/dustbin">🗑 Dustbin of Videos</Link></li>
              <li><Link className="hover:underline" to="/approvedvideos">✅ Approved Videos</Link></li>
            </ul>
          </div>

          {/* Channel Input */}
          <div className={`${darkMode ? 'bg-gray-200 text-black' : 'bg-gray-800'} p-4 rounded-xl`}>
            <h2 className="text-xl font-semibold mb-4">📥 Fetch Videos</h2>
            <input
              type="text"
              placeholder="Enter Channel ID"
              value={channelId}
              onChange={(e) => setChannelId(e.target.value)}
              className={`w-full px-4 py-2 rounded mb-3 ${darkMode ? 'bg-gray-100 text-black' : 'bg-gray-700 text-white'}`}
            />
            <button
              onClick={fetchVideos}
              disabled={loading}
              className="w-full px-4 py-2 bg-green-600 rounded hover:bg-green-700 disabled:opacity-50"
            >
              {loading ? 'Fetching...' : 'Fetch YouTube Videos'}
            </button>
            {statusMsg && <p className={`${statusColor} mt-3`}>{statusMsg}</p>}
          </div>
        </div>
      </div>

      <Footer toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </>
  );
}

export default TestLinks;
