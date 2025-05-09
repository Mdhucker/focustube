import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function ApprovedVideos({ toggleDarkMode, darkMode }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);
  const [loadingVideoId, setLoadingVideoId] = useState(null);
  const [search, setSearch] = useState('');
  const [filteredVideos, setFilteredVideos] = useState([]);

  const categories = [
    'Islamic', 'Motivation', 'Success', 'Programming', 'Technology',
    'Education', 'Health', 'Business', 'Sports', 'Music',
    'studying', 'programming', 'quran', 'Quran'
  ];
  


  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videoPromises = categories.map((category) =>
          fetch(`http://127.0.0.1:8000/api/approved/`)
            .then((res) => res.json())
            .then((data) => ({ category, videos: data }))
        );
        
                    const videoResults = await Promise.all(videoPromises);
            const allVideos = videoResults.flatMap((result) => result.videos);

            // ✅ Remove duplicates based on video_id
            const uniqueVideosMap = new Map();
            allVideos.forEach((video) => {
              if (!uniqueVideosMap.has(video.video_id)) {
                uniqueVideosMap.set(video.video_id, video);
              }
            });
            const uniqueVideos = Array.from(uniqueVideosMap.values());

            setVideos(uniqueVideos);


        setLoading(false);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  
  
  

  const handleThumbnailClick = (videoId) => {
    setLoadingVideoId(videoId);
    setActiveVideo(null);

    fetch(`http://focustube.online/api/videos/${videoId}/`)
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
      const response = await fetch(`http://127.0.0.1:8000/api/deapprove/${videoId}/`, {
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
        <div className="flex flex-1 flex-col items-center p-4">
          {/* <Link to="/testlink" className={`text-2xl md:text-3xl ${darkMode ? 'text-gray-800' : 'text-gray-100'} mb-4`}>
            " Why <span className={`${darkMode ? "text-black" : "text-[#FF0000]"}`}>Focus</span>
            <span className={`${darkMode ? "text-[#FF0000]" : "text-white"}`}>Tube</span> ? "
          </Link> */}

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
                        <img
                          src={video.thumbnail_url}
                          alt={video.title}
                          className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
                          onClick={() => handleThumbnailClick(video.video_id)}
                        />
                      )}

                      {loadingVideoId === video.video_id && (
                        <p className="absolute top-2 left-2 text-white bg-black bg-opacity-60 px-2 py-1 rounded">
                          Loading video...
                        </p>
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
                Sorry No videos found for "{search}"
              </p>
            )}
          </section>
        </div>
      </div>

      <Footer toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </>
  );
}

export default ApprovedVideos;
