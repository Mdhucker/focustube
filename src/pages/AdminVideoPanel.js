import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import CONFIG from '../config';
import Loader from '../components/Loader'; // Adjust the import path if necessary
import { motion } from 'framer-motion';

function AdminVideoPanel({ toggleDarkMode, darkMode }) {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);
  const [loadingVideoId, setLoadingVideoId] = useState(null);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1); // <-- Add this at the top of the component
  const categories = [
    'Islamic', 'Motivation', 'Success', 'Programming', 'Technology',
    'Education', 'Health', 'Business', 'Sports', 'Music',
    'studying', 'programming', 'quran', 'Quran'
  ];

  // Utility to lowercase safely
  const toText = (value) => typeof value === 'string' ? value.toLowerCase() : '';

  // Fetch all videos and remove duplicates
  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const videoPromises = categories.map((category) =>
          fetch(`${CONFIG.API_BASE_URL}/pending-videos/?category=${category}&page=${page}&page_size=20`)
            .then((res) => res.json())
            .then((data) => data.results || [])
        );
  
        const results = await Promise.all(videoPromises);
        const allVideos = results.flat(); // flatten all arrays into one
  
        // Deduplicate based on video_id
        const uniqueMap = new Map();
        [...videos, ...allVideos].forEach((video) => {
          if (!uniqueMap.has(video.video_id)) {
            uniqueMap.set(video.video_id, video);
          }
        });
  
        const uniqueVideos = Array.from(uniqueMap.values());
        setVideos(uniqueVideos);
        setFilteredVideos(filterAndSortVideos(uniqueVideos, search));
      } catch (error) {
        console.error('Error fetching paginated videos by category:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchVideos();
  }, [page, categories]);
  

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


  useEffect(() => {
  window.scrollTo(0, 0); // Scrolls to top when component mounts
}, []);

  // Scoring and filtering videos based on search
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
        setVideos(prev => prev.filter(v => v.video_id !== video.video_id));
        setFilteredVideos(prev => prev.filter(v => v.video_id !== video.video_id));
      } else {
        console.error('Approval failed');
      }
    } catch (err) {
      console.error('Error approving video:', err);
    }
  };


  const handleBulkApprove = async () => {
    try {
      const res = await fetch(`${CONFIG.API_BASE_URL}/bulk-approve/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (res.ok) {
        const data = await res.json();
        alert(data.message);
        // Remove all videos from UI since they were approved
        setVideos([]);
        setFilteredVideos([]);
      } else {
        console.error('Bulk approval failed');
      }
    } catch (err) {
      console.error('Error approving videos in bulk:', err);
    }
  };

  const handleDeapprove = async (video) => {
    try {
      const res = await fetch(`${CONFIG.API_BASE_URL}/deapproveone/${video.video_id}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (res.ok) {
        // Update your UI after successful deapproval
        setVideos((prev) => prev.filter((v) => v.video_id !== video.video_id));
        setFilteredVideos((prev) => prev.filter((v) => v.video_id !== video.video_id));
      } else {
        console.error('Deapproval failed');
      }
    } catch (error) {
      console.error('Error during deapproval:', error);
    }
  };
   // Simulate video loading

   useEffect(() => {
    fetch(`${CONFIG.API_BASE_URL}/approved/`)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
        setIsLoading(false); // Hide loader after videos are loaded
      })
      .catch((err) => {
        console.error('Error loading videos:', err);
        setIsLoading(false); // Hide loader even if there is an error
      });
  }, []);

  return (
    <>
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        search={search}
        handleSearchChange={handleSearchChange}
        handleKeyDown={handleKeyDown}
      />

<div className={`min-h-screen w-full px-4 duration-300 ${darkMode ? 'bg-white' : 'bg-[#111111]'}`}>
        <div className="flex flex-col items-center p-4">
          {/* <Link to="/testlink" className={`text-2xl md:text-3xl ${darkMode ? 'text-gray-800' : 'text-gray-100'} mb-4`}>
            " Why <span className={`${darkMode ? "text-black" : "text-[#FF0000]"}`}>Focus</span>
            <span className={`${darkMode ? "text-[#FF0000]" : "text-white"}`}>Tube</span> ? "
          </Link> */}
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
                        />
                      ) : (
                        <motion.div
                        initial={{ opacity: 0, y: 50 }}                    // slightly deeper start
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}             // triggers earlier
                        transition={{ duration: 0.6, ease: 'easeOut'}}    // slower & smoother
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

                      {/* {loadingVideoId === video.video_id && (
                        <p className="absolute top-2 left-2 text-white bg-black bg-opacity-60 px-2 py-1 rounded">
                          Loading video...
                        </p>
                      )} */}

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
                        Published: {video.published_at}<br/>
                        Channel Name:
                        

            <span className={`${darkMode ? "text-black" : "text-[#FF0000]"}`}>{video.channel_title}</span>
       
                      </p>
                      <p className="text-xs text-red-300 mt-2">{video.assigned_category}</p>

                      {/* Action buttons */}
                      <div className="mt-4 flex gap-4">
                        <button
                          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                          onClick={() => handleApprove(video)}
                        >
                          Approve
                        </button>
                        <button
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                          onClick={() => handleDeapprove(video)}
                        >
                          Move to Dustbin
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-[#FF0000] text-center col-span-full">
                {/* Sorry, no videos found for "{search}" */}
              </p>
            )}
          </section>
          </div>

                )}

        </div>

        {/* Notification Button */}
        <button
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600"
        onClick={handleBulkApprove}      >
        Approve All videos
      </button>

      </div>
      <Footer toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </>
  );
}

export default AdminVideoPanel;
