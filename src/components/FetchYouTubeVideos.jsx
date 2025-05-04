
// // components/FetchYouTubeVideos.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const FetchYouTubeVideos = () => {
//   const [channelId, setChannelId] = useState('');
//   const [category, setCategory] = useState('');
//   const [maxResults, setMaxResults] = useState(5);
//   const [loading, setLoading] = useState(false);
//   const [videos, setVideos] = useState([]);
//   const [error, setError] = useState('');

//   const fetchVideos = async () => {
//     setLoading(true);
//     setError('');
//     setVideos([]);

//     try {
//       const response = await axios.get('http://localhost:8000/api/fetch-youtube-videos/', {
//         params: {
//           channel_id: channelId,
//           category: category,
//           max_results: maxResults,
//         },
//       });

//       setVideos(response.data);
//     } catch (err) {
//       setError(err.response?.data?.error || 'Failed to fetch videos');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 max-w-2xl mx-auto">
//       <h2 className="text-xl font-semibold mb-4">Fetch YouTube Videos</h2>

//       <input
//         type="text"
//         placeholder="Channel ID"
//         value={channelId}
//         onChange={(e) => setChannelId(e.target.value)}
//         className="border p-2 w-full mb-2 rounded"
//       />

//       <input
//         type="text"
//         placeholder="Category"
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//         className="border p-2 w-full mb-2 rounded"
//       />

//       <input
//         type="number"
//         placeholder="Max Results"
//         value={maxResults}
//         onChange={(e) => setMaxResults(e.target.value)}
//         className="border p-2 w-full mb-4 rounded"
//       />

//       <button
//         onClick={fetchVideos}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         disabled={loading}
//       >
//         {loading ? 'Fetching...' : 'Fetch Videos'}
//       </button>

//       {error && <p className="text-red-500 mt-4">{error}</p>}

//       {videos.length > 0 && (
//         <div className="mt-6">
//           <h3 className="text-lg font-medium mb-2">Fetched Videos:</h3>
//           <ul>
//             {videos.map((video) => (
//               <li key={video.video_id} className="mb-2 border-b pb-2">
//                 <strong>{video.title}</strong>
//                 <p>{video.description}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FetchYouTubeVideos;


// components/FetchYouTubeVideos.jsx
import React, { useState } from 'react';
import axios from 'axios';

const FetchYouTubeVideos = () => {
  const [channelId, setChannelId] = useState('');
  const [category, setCategory] = useState('');
  const [maxResults, setMaxResults] = useState(5);
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState('');

  const fetchVideos = async () => {
    setLoading(true);
    setError('');
    setVideos([]);

    try {
      const response = await axios.get('http://localhost:8000/api/fetch-youtube-videos/', {
        params: {
          channel_id: channelId,
          category: category,
          max_results: maxResults,
        },
      });

      // Update the videos to include category names
      const videosWithCategories = await Promise.all(
        response.data.map(async (video) => {
          try {
            // Assuming you have a function to fetch the category name based on categoryId
            const categoryResponse = await axios.get(`http://localhost:8000/api/get-video-category/${video.categoryId}`);
            return {
              ...video,
              categoryName: categoryResponse.data.categoryName || 'Uncategorized',
            };
          } catch (error) {
            return { ...video, categoryName: 'Uncategorized' };
          }
        })
      );

      setVideos(videosWithCategories);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch videos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Fetch YouTube Videos</h2>

      <input
        type="text"
        placeholder="Channel ID"
        value={channelId}
        onChange={(e) => setChannelId(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />

      <input
        type="number"
        placeholder="Max Results"
        value={maxResults}
        onChange={(e) => setMaxResults(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
      />

      <button
        onClick={fetchVideos}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? 'Fetching...' : 'Fetch Videos'}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {videos.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-2">Fetched Videos:</h3>
          <ul>
            {videos.map((video) => (
              <li key={video.video_id} className="mb-2 border-b pb-2">
                <strong>{video.title}</strong>
                <p>{video.description}</p>
                <p className="text-sm text-gray-500">Category: {video.categoryName}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FetchYouTubeVideos;
