import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TestLinks = () => {
  const [channelId, setChannelId] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const fetchVideos = async () => {
    if (!channelId) {
      setStatusMsg('❌ Channel ID is required.');
      return;
    }

    setLoading(true);
    setStatusMsg('');

    try {
      const response = await fetch(
        `http://localhost:8000/api/fetch-videos/?channel_id=${channelId.trim()}&max_results=50`
      );

      if (response.ok) {
        const data = await response.json();
        setStatusMsg(`✅ Fetched ${data.length || 0} videos successfully!`);
      } else {
        setStatusMsg('❌ Failed to fetch videos.');
      }
    } catch (error) {
      console.error(error);
      setStatusMsg('❌ Error fetching videos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Test Link Page</h1>
<h4>
| Qur’an Weekly         | ` UCz4ZPMEJsMQdgMHd0zvYjYA `   <br />
| Nouman Ali Khan       | ` UCzFtzbX0cCqbi93HNDzZfZw ` |<br />
| Daily Dose of Islam   | ` UCWQ_cJtzolft3zF8zGka3FQ ` |<br />
| FreeCodeCamp          | ` UC8butISFwT-Wl7EV0hUK0BQ ` |<br />
| Programming with Mosh | ` UCWv7vMbMWH4-V0ZXdmDpPBA ` |<br />
| TED                   | ` UCAuUUnT6oDeKwE6v1NGQxug ` |<br />
| BBC News              | ` UC16niRr50-MSBwiO3YDb3RA ` |<br />
</h4>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Admin & Dustbin Pages</h2>
        <ul className="list-disc list-inside mb-4">
          <li><Link className="text-blue-400 hover:underline" to="/admin">Go to Admin Panel</Link></li>
          <li><Link className="text-blue-400 hover:underline" to="/dustbin">Go to Dustbin</Link></li>
        </ul>

        <div className="space-y-3">
          <input
            type="text"
            placeholder="Enter Channel ID"
            value={channelId}
            onChange={(e) => setChannelId(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white"
          />

          <button
            onClick={fetchVideos}
            disabled={loading}
            className="w-full px-4 py-2 bg-green-600 rounded hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? 'Fetching...' : 'Fetch YouTube Videos'}
          </button>
            
          {statusMsg && <p className="text-yellow-400">{statusMsg}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestLinks;
