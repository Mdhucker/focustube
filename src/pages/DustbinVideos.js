import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import CONFIG from '../config';
import Loader from '../components/Loader';
import { motion } from 'framer-motion';

function DustbinVideos({ toggleDarkMode, darkMode }) {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);
  const [loadingVideoId, setLoadingVideoId] = useState(null);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const toText = (value) => (typeof value === 'string' ? value.toLowerCase() : '');
  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${CONFIG.API_BASE_URL}/dustbin/?page=${page}&page_size=20`);
        const data = await response.json();
  
        console.log("API raw response:", data);
  
        const results = Array.isArray(data) ? data : [];
  
        console.log("Fetched video count:", results.length);
  
        const uniqueMap = new Map();
        [...videos, ...results].forEach((video) => {
          if (!video.video_id) {
            console.warn("Missing video_id in:", video);
          } else if (!uniqueMap.has(video.video_id)) {
            uniqueMap.set(video.video_id, video);
          }
        });
  
        const uniqueVideos = Array.from(uniqueMap.values());
  
        console.log("Unique videos stored:", uniqueVideos.length);
  
        setVideos(uniqueVideos);
        setFilteredVideos(uniqueVideos);
        setLoading(false);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setLoading(false);
        setIsLoading(false);
      }
    };
  
    fetchVideos();
  }, [page]);
  
  
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 30 >=
        document.documentElement.offsetHeight
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleThumbnailClick = (videoId) => {
    setLoadingVideoId(videoId);
    setActiveVideo(null);

    fetch(`${CONFIG.API_BASE_URL}/videos/${videoId}/`)
      .then((res) => res.json())
      .then((data) => {
        setActiveVideo(data);
        setLoadingVideoId(null);
      })
      .catch((err) => {
        console.error('Error fetching video:', err);
        setLoadingVideoId(null);
      });
  };

  const filterAndSortVideos = (videoList, searchTerm) => {
    const filtered = videoList.filter((video) =>
      toText(video.title).includes(searchTerm.toLowerCase()) ||
      toText(video.assigned_category).includes(searchTerm.toLowerCase()) ||
      toText(video.category).includes(searchTerm.toLowerCase()) ||
      toText(video.description).includes(searchTerm.toLowerCase()) ||
      toText(video.tags).includes(searchTerm.toLowerCase())
    );

    const getScore = (video) => {
      let score = 0;
      const term = searchTerm.toLowerCase();
      if (toText(video.title).includes(term)) score += 2;
      if (toText(video.assigned_category).includes(term)) score += 1;
      if (toText(video.category).includes(term)) score += 1;
      if (toText(video.description).includes(term)) score += 1;
      if (toText(video.tags).includes(term)) score += 1;
      return score;
    };

    return [...filtered].sort((a, b) => getScore(b) - getScore(a));
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const sorted = filterAndSortVideos(videos, search);
      setFilteredVideos(sorted);
    }
  };

  const handleApprove = async (video) => {
    try {
      const res = await fetch(`${CONFIG.API_BASE_URL}/approve_again/${video.video_id}/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        setVideos((prev) => prev.filter((v) => v.video_id !== video.video_id));
        setFilteredVideos((prev) => prev.filter((v) => v.video_id !== video.video_id));
      } else {
        console.error('Approval failed');
      }
    } catch (err) {
      console.error('Error approving video:', err);
    }
  };

  return (
    <>
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        search={search}
        handleSearchChange={handleSearchChange}
        handleKeyDown={handleKeyDown}
      />

      <div className={`min-h-screen w-full px-4 duration-300 ${darkMode ? 'bg-white' : 'dark:bg-[#111]'}`}>
        <div className="flex flex-col items-center p-4">
          {isLoading ? (
            <Loader />
          ) : (
            <div className="w-screen -mx-4 min-h-[600px] sm:w-full sm:mx-0 sm:min-h-0">
              <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {filteredVideos.length > 0 ? (
                  filteredVideos.map((video) => {
                    const isActive = activeVideo && activeVideo.video_id === video.video_id;
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
                              frameBorder="0"
                              className="absolute top-0 left-0 w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                            ></iframe>
                          ) : (
                            <motion.div
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, amount: 0.2 }}
                              transition={{ duration: 0.6, ease: 'easeOut' }}
                              className="bg-gray-800 rounded-md p-[0px] shadow-lg"
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

                          {(!video.title || !video.description) && (
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 text-white text-xl font-semibold">
                              Sorry No such video
                            </div>
                          )}
                        </div>

                        <div className="p-4">
                          <h3 className={`text-lg font-semibold ${darkMode ? 'text-black' : 'text-white'}`}>
                            {video.title}
                          </h3>
                          <p className={`mt-2 text-sm ${darkMode ? 'text-black' : 'text-gray-400'}`}>
                            Published: {video.published_at}<br />
                            Channel Name:{' '}
                            <span className={`${darkMode ? 'text-black' : 'text-[#FF0000]'}`}>
                              {video.channel_title}
                            </span>
                          </p>
                          <div className="mt-4">
                            <button
                              onClick={() => handleApprove(video)}
                              className="bg-green-500 text-white px-2 py-1 rounded"
                            >
                              Approve
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-[#FF0000] text-center col-span-full">No videos found</p>
                )}
              </section>
              <div className="flex justify-center items-center">
  <div
    className={`border-t-4 border-b-4 rounded-full w-10 h-10 animate-spin 
      ${darkMode ? 'border-red-400' : 'border-red-600'}`}
  ></div>
</div>
</div>
          )}
          
   

        </div>
      </div>

      {/* Optional Footer */}
      {/* <Footer toggleDarkMode={toggleDarkMode} darkMode={darkMode} /> */}
    </>
  );
}

export default DustbinVideos;
