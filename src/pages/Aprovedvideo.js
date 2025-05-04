
import React, { useEffect, useState } from 'react';

const AdminVideoPanel = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);
  const [loadingVideoId, setLoadingVideoId] = useState(null);

  const categories = [
    'Islamic',
    'Motivation',
    'Success',
    'Programming',
    'Technology',
    'Education',
    'Health',
    'Business',
    'Sports',
    'Music',
    'studyingf',
    'programmingf',
  ];

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videoPromises = categories.map((category) =>
          fetch(`http://127.0.0.1:8000/api/videos/?category=${category}`)
            .then((response) => response.json())
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

  const handleApprove = async (videoId) => {
    try {
      await fetch(`http://127.0.0.1:8000/api/videos/${videoId}/approve/`, {
        method: 'PATCH',
      });
  
      setVideos((prev) => prev.filter((video) => video.video_id !== videoId));
    } catch (error) {
      console.error('Error approving video:', error);
    }
  };
  
  const handleDeapprove = async (videoId) => {
    try {
      await fetch(`http://127.0.0.1:8000/api/videos/${videoId}/deapprove/`, {
        method: 'PATCH',
      });
  
      setVideos((prev) => prev.filter((video) => video.video_id !== videoId));
    } catch (error) {
      console.error('Error deapproving video:', error);
    }
  };
  
  return (
    <div className="container mx-auto mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 px-4">
      {videos.map((video) => {
        const isActive = activeVideo && activeVideo.video_id === video.video_id;
        return (
          <div
            key={video.video_id}
            className="bg-gray-900 p-4 rounded shadow text-white"
          >
            <div className="relative w-full h-[400px]">
              {isActive ? (
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.video_id}?autoplay=1&mute=1`}
                  title={activeVideo.title}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
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

            <div className="p-3">
              <h3 className="text-lg font-semibold">{video.title}</h3>
              <p className="mt-2 text-sm text-gray-400">
                Category:{' '}
                <span className="capitalize text-white font-medium">
                  {video.assigned_category || 'Uncategorized'}
                </span>
              </p>

              <div className="mt-4 flex gap-3">
                
              <button
                            onClick={() => handleDeapprove(video.video_id)}
                            className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded"
                            >
                            Deapprove
                            </button>

              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminVideoPanel;
