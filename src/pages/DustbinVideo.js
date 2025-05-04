
import React, { useEffect, useState } from 'react';

const Dustbin = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/videos/?approved=false&deleted=true')
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 text-white">
      {videos.length === 0 && <p>No videos in dustbin.</p>}
      {videos.map((video) => (
        <div key={video.video_id} className="bg-red-900 p-4 rounded">
          <h3>{video.title}</h3>
          <iframe
            className="w-full h-64 mt-2"
            src={`https://www.youtube.com/embed/${video.video_id}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default Dustbin;
