import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Nav_AboutUs from '../components/Nav_AboutUs';

import CONFIG from '../config';
import { motion } from 'framer-motion';

function GiftPage({ toggleDarkMode, darkMode }) {
  const [giftVideos, setGiftVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rewarded, setRewarded] = useState({});
  const [loadingRewardId, setLoadingRewardId] = useState(null);

  useEffect(() => {
    const fetchGiftVideos = async () => {
      try {
        const response = await fetch(`${CONFIG.API_BASE_URL}/gifts/`);
        const data = await response.json();
        setGiftVideos(data);
      } catch (error) {
        console.error('Error fetching gift videos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGiftVideos();
  }, []);

  const handleReward = async (videoId) => {
    setLoadingRewardId(videoId);
    try {
      const response = await fetch(`${CONFIG.API_BASE_URL}/approved/${videoId}/reward/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add auth headers if needed
        },
      });

      if (response.ok) {
        setRewarded((prev) => ({ ...prev, [videoId]: true }));
      } else {
        console.error('Reward failed');
      }
    } catch (error) {
      console.error('Reward error:', error);
    } finally {
      setLoadingRewardId(null);
    }
  };

  return (
    <>
      <Nav_AboutUs toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <div className={`min-h-screen px-6 pt-10 ${darkMode ? 'bg-white' : 'bg-[#111]'}`}>
        <h1 className={`text-3xl text-center font-bold mb-8 ${darkMode ? 'text-black' : 'text-white'}`}>
          🎁 Gift & Rewards 🎁
        </h1>

        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {giftVideos.length === 0 ? (
              <p className={`text-center col-span-full ${darkMode ? 'text-black' : 'text-white'}`}>
                No gift videos available at the moment.
              </p>
            ) : (
              giftVideos.map((video) => (
                <motion.div
                  key={video.video_id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`rounded overflow-hidden shadow-lg ${darkMode ? 'bg-gray-100' : 'bg-black'}`}
                >
                  <div className="relative aspect-video">
                    <img
                      src={video.thumbnail_url}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className={`text-lg font-semibold ${darkMode ? 'text-black' : 'text-white'}`}>
                      {video.title}
                    </h3>
                    <p className={`text-sm mt-2 ${darkMode ? 'text-gray-700' : 'text-gray-400'}`}>
                      Channel: <span className="text-red-500">{video.channel_title}</span>
                    </p>

                    <button
                      className={`mt-4 w-full py-2 rounded-md font-medium ${
                        rewarded[video.video_id]
                          ? 'bg-green-500 text-white cursor-not-allowed'
                          : darkMode
                          ? 'bg-[#FF0000] text-white hover:bg-red-700'
                          : 'bg-red-600 text-white hover:bg-red-800'
                      }`}
                      disabled={rewarded[video.video_id] || loadingRewardId === video.video_id}
                      onClick={() => handleReward(video.video_id)}
                    >
                      {rewarded[video.video_id]
                        ? '✅ Reward Claimed'
                        : loadingRewardId === video.video_id
                        ? '⏳ Processing...'
                        : '🎁 Claim Gift'}
                    </button>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        )}
      </div>

      <Footer toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </>
  );
}

export default GiftPage;
