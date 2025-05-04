import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Home({ toggleDarkMode, darkMode }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);
  const [loadingVideoId, setLoadingVideoId] = useState(null);
  const [search, setSearch] = useState('');

  const categories = [
    'Islamic', 'Motivation', 'Success', 'Programming', 'Technology',
    'Education', 'Health', 'Business', 'Sports', 'Music',
    'studyingf', 'programmingf', 'quranf', 'Quran'
  ];

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videoPromises = categories.map((category) =>
          fetch(`http://127.0.0.1:8000/api/videos/?category=${category}`)
            .then((res) => res.json())
            .then((data) => ({ category, videos: data }))
        );
        const videoResults = await Promise.all(videoPromises);
        const allVideos = videoResults.flatMap((result) => result.videos);
        setVideos(allVideos);
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

    fetch(`http://127.0.0.1:8000/api/videos/${videoId}/`)
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

  const filteredVideos = videos.filter((video) => {
    return (
      video.title.toLowerCase().includes(search.toLowerCase()) ||
      video.assigned_category?.toLowerCase().includes(search.toLowerCase())
    );
  });

  if (loading) return <p className="text-center text-white">Loading videos...</p>;

  return (
    <>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className={`container mx-auto px-4 duration-300 ${darkMode ? 'bg-white' : 'bg-[#111111]'}`}>
        <div className="flex flex-1 flex-col items-center p-4">
          <Link to="/focus" className={`text-2xl md:text-3xl ${darkMode ? 'text-gray-800' : 'text-gray-100'} mb-4`}>
            " Why <span className={`${darkMode ? "text-black" : "text-[#FF0000]"}`}>Focus</span>
            <span className={`${darkMode ? "text-[#FF0000]" : "text-white"}`}>Tube</span> ? "
          </Link>

          {/* Video Grid Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {filteredVideos.map((video) => {
  const isActive = activeVideo && activeVideo.video_id === video.video_id;
  return (
    <div
      key={video.video_id}
      className={`rounded shadow w-full overflow-hidden  ${
        darkMode ? 'bg-gray-100' : 'bg-black'
      }`}
    >
      {/* Video Container */}
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
      </div>

      {/* Title and Date */}
      <div className="p-4">
        <h3 className={`text-lg font-semibold ${darkMode ? 'text-black' : 'text-white'}`}>
          {video.title}
        </h3>
        <p className={`mt-2 text-sm ${darkMode ? 'text-black' : 'text-gray-400'}`}>
          Published: {video.published_at}
        </p>
      </div>
    </div>
  );
})}

          </section>
        </div>
      </div>
      <Footer toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </>
  );
}

export default Home;
