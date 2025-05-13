
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import CONFIG from '../config';
import Loader from '../components/Loader';
import { motion } from 'framer-motion';
import Nav_AboutUs from '../components/Nav_AboutUs';

function VideoGuideline({ toggleDarkMode, darkMode }) {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [loadingVideoId, setLoadingVideoId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${CONFIG.API_BASE_URL}/guidelines/?page=${page}&page_size=20`);
        const data = await res.json();
        const results = data.results || [];

        const uniqueMap = new Map();
        [...videos, ...results].forEach((video) => {
          if (!uniqueMap.has(video.video_id)) {
            uniqueMap.set(video.video_id, video);
          }
        });

        setVideos(Array.from(uniqueMap.values()));
      } catch (err) {
        console.error("Failed to fetch guideline videos:", err);
      } finally {
        setLoading(false);
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 30 >= document.documentElement.offsetHeight) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const searchLower = search.toLowerCase();
    const filtered = videos.filter((video) =>
      video.title?.toLowerCase().includes(searchLower) ||
      video.description?.toLowerCase().includes(searchLower) ||
      video.category?.toLowerCase().includes(searchLower)
    );
    setFilteredVideos(filtered);
  }, [search, videos]);

  const handleSearchChange = (e) => setSearch(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const searchLower = search.toLowerCase();
      const filtered = videos.filter((video) =>
        video.title?.toLowerCase().includes(searchLower)
      );
      setFilteredVideos(filtered);
    }
  };

  const handleThumbnailClick = async (videoId) => {
    setLoadingVideoId(videoId);
    try {
      const res = await fetch(`${CONFIG.API_BASE_URL}/guidelines/${videoId}/`);
      const data = await res.json();
      setActiveVideo(data);
    } catch (err) {
      console.error('Error loading guideline video:', err);
    } finally {
      setLoadingVideoId(null);
    }
  };

  return (
    <>
    
      <Nav_AboutUs toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <div className={`min-h-screen w-full px-6 duration-300 ${darkMode ? 'bg-white' : 'bg-[#111]'}`}>
       <div className="flex flex-1 flex-col items-center p-4">
                 <Link to="/aboutus" className={`text-2xl md:text-3xl ${darkMode ? 'text-gray-800' : 'text-gray-100'} mb-4`}>
                    Explore <span className={`${darkMode ? "text-black" : "text-[#FF0000]"}`}>Focus</span>
                   <span className={`${darkMode ? "text-[#FF0000]" : "text-white"}`}>Tube with easy video guidance</span> ? 
                 </Link>
          {isLoading ? (
            <Loader />
          ) : (
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {filteredVideos.length > 0 ? (
                filteredVideos.map((video) => {
                  const isActive = activeVideo?.video_id === video.video_id;
                  return (
                    <div
                      key={video.video_id}
                      className={`rounded shadow w-full overflow-hidden ${darkMode ? 'bg-gray-100' : 'bg-black'}`}
                    >
                      <div className="relative w-full aspect-video">
                        {isActive ? (
                          <iframe
                            src={`https://www.youtube.com/embed/${video.video_id}?autoplay=1&mute=1`}
                            title={video.title}
                            className="absolute top-0 left-0 w-full h-full"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                          />
                        ) : (
                          <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-800 rounded-md shadow-lg"
                          >
                            <img
                              src={video.thumbnail_url}
                              alt={video.title}
                              className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
                              onClick={() => handleThumbnailClick(video.video_id)}
                              loading="lazy"
                            />
                          </motion.div>
                        )}
                      </div>

                      <div className="p-4">
                        <h3 className={`text-lg font-semibold ${darkMode ? 'text-black' : 'text-white'}`}>
                          {video.title}
                        </h3>
                        <p className={`mt-1 text-sm ${darkMode ? 'text-gray-700' : 'text-gray-400'}`}>
                          {video.description?.slice(0, 100)}...
                        </p>
                        <p className="text-xs mt-2 text-red-400">{video.category}</p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-center text-red-500 col-span-full">No guideline videos found.</p>
              )}
            </section>
          )}

          {loading && (
            <div className="flex justify-center items-center mt-6">
              <div className={`border-t-4 border-b-4 rounded-full w-10 h-10 animate-spin ${darkMode ? 'border-red-400' : 'border-red-600'}`} />
            </div>
          )}
        </div>
      </div>

      {/* You can include <Footer /> if needed */}
    </>
  );
}

export default VideoGuideline;
