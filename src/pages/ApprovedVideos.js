import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import CONFIG from '../config';
import Loader from '../components/Loader'; // Adjust the import path if necessary
import { motion } from 'framer-motion';

function ApprovedVideos({ toggleDarkMode, darkMode }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);
  const [loadingVideoId, setLoadingVideoId] = useState(null);
  const [search, setSearch] = useState('');
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 const [page, setPage] = useState(1); // <-- Track current page
const [hasMore, setHasMore] = useState(true);

  const categories = [
    'Islamic', 'Motivation', 'Success', 'Programming', 'Technology',
    'Education', 'Health', 'Business', 'Sports', 'Music',
    'studying', 'programming', 'quran', 'Quran'
  ];
  

  // useEffect(() => {
  //   const fetchVideos = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await fetch(`${CONFIG.API_BASE_URL}/approved/?page=${page}&page_size=20`);
  //       const data = await response.json();
  //       console.log(data); // should show { count, next, results: [...] }
  
  //       const results = data.results || [];
  
  //       // Remove duplicates based on video_id
  //       const uniqueMap = new Map();
  //       [...videos, ...results].forEach((video) => {
  //         if (!uniqueMap.has(video.video_id)) {
  //           uniqueMap.set(video.video_id, video);
  //         }
  //       });
  
  //       const uniqueVideos = Array.from(uniqueMap.values());
  //       setVideos(uniqueVideos); // Append instead of replace
  //     } catch (error) {
  //       console.error('Error fetching videos:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  
  //   fetchVideos();
  // }, [page]); // <-- run every time 'page' changes


  //   useEffect(() => {
  //     const handleScroll = () => {
  //       if (
  //         window.innerHeight + document.documentElement.scrollTop + 30 >=
  //         document.documentElement.offsetHeight
  //       ) {
  //         setPage(prev => prev + 1);
  //       }
  //     };
    
  //     window.addEventListener('scroll', handleScroll);
  //     return () => window.removeEventListener('scroll', handleScroll);
  //   }, []);
    
  //   useEffect(() => {
  //     window.scrollTo(0, 0); // Scrolls to top when component mounts
  //   }, []);
    

     
  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${CONFIG.API_BASE_URL}/approved/?page=${page}&page_size=20`);
        const data = await response.json();
        const results = data.results || [];
  
        const uniqueMap = new Map();
        [...videos, ...results].forEach((video) => {
          if (!uniqueMap.has(video.video_id)) {
            uniqueMap.set(video.video_id, video);
          }
        });
  
        setVideos(Array.from(uniqueMap.values()));
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setLoading(false);
        setIsLoading(false); // ✅ stop global loader
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
        setPage(prev => prev + 1);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top when component mounts
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

  const toText = (value) => typeof value === 'string' ? value.toLowerCase() : '';

  const filterAndSortVideos = (search) => {
    const filtered = videos.filter((video) =>
      toText(video.title).includes(search.toLowerCase()) ||
      toText(video.assigned_category).includes(search.toLowerCase()) ||
      toText(video.category).includes(search.toLowerCase()) ||
      toText(video.description).includes(search.toLowerCase()) ||
      toText(video.tags).includes(search.toLowerCase())
    );

    const getMatchScore = (video) => {
      let score = 0;
      const searchTerm = search.toLowerCase();
      if (toText(video.title).includes(searchTerm)) score += 2;
      if (toText(video.assigned_category).includes(searchTerm)) score += 1;
      if (toText(video.category).includes(searchTerm)) score += 1;
      if (toText(video.description).includes(searchTerm)) score += 1;
      if (toText(video.tags).includes(searchTerm)) score += 1;
      return score;
    };

    return [...filtered].sort((a, b) => getMatchScore(b) - getMatchScore(a));
  };

  const handleSearchChange = (e) => setSearch(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setFilteredVideos(filterAndSortVideos(search));
    }
  };

  useEffect(() => {
    setFilteredVideos(filterAndSortVideos(search));
  }, [videos]);

 


  // const handleApprove = async (video) => {
  //   try {
  //     const res = await fetch(`http://127.0.0.1:8000/api/approved/${video.video_id}/approve/`, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //     });

  //     if (res.ok) {
  //       setVideos(prev => prev.filter(v => v.video_id !== video.video_id));
  //       setFilteredVideos(prev => prev.filter(v => v.video_id !== video.video_id));
  //     } else {
  //       console.error('Approval failed');
  //     }
  //   } catch (err) {
  //     console.error('Error approving video:', err);
  //   }
  // };

  const handleDeapprove = async (videoId) => {
    try {
      const response = await fetch(`${CONFIG.API_BASE_URL}/deapprove/${videoId}/?page=${page}&page_size=20`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        alert('Video moved to dustbin!');
        setVideos((prevVideos) =>
          prevVideos.filter((video) => video.video_id !== videoId)
        );
      } else {
        const errorData = await response.json();
        alert('Failed to deapprove: ' + errorData.message);
        console.error('Failed to deapprove video:', errorData);
      }
    } catch (error) {
      console.error('Error during deapprove:', error);
    }
  };
  
  // Simulate video loading

  // useEffect(() => {
  //   fetch(`${CONFIG.API_BASE_URL}/approved/`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setVideos(data);
  //       setIsLoading(false); // Hide loader after videos are loaded
  //     })
  //     .catch((err) => {
  //       console.error('Error loading videos:', err);
  //       setIsLoading(false); // Hide loader even if there is an error
  //     });
  // }, []);

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
        <div className="flex flex-1 flex-col items-center p-4">
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
                        ></iframe>
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

                      <div className="mt-4">
                      <button onClick={() => handleDeapprove(video.video_id)} className="bg-red-500 text-white px-2 py-1 rounded">
                          Deapprove
                        </button>

                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-[#FF0000] text-center col-span-full">
                {/* Sorry No videos found for "{search}" */}
              </p>
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

      {/* <Footer toggleDarkMode={toggleDarkMode} darkMode={darkMode} /> */}
    </>
  );
}

export default ApprovedVideos;
