import React, { useState, useEffect } from 'react';

const MaulidiApi = () => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState('');
  const [activeVideo, setActiveVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://127.0.0.1:8000/api/videos/?search=${search}`);
        const data = await response.json();
        setVideos(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setLoading(false);
      }
    };

    fetchVideos();
  }, [search]);

  return (
    <div className="p-4">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search videos..."
        className="w-full mb-4 p-2 border rounded"
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {videos.map((video) => (
            <div key={video.video_id} className="bg-black text-white rounded-md p-4 shadow">
              <img
                src={video.thumbnail_url}
                alt={video.title}
                className="w-full h-64 object-cover cursor-pointer"
                onClick={() => setActiveVideo(video)}
              />
              <h3 className="mt-2 text-lg">{video.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MaulidiApi;
