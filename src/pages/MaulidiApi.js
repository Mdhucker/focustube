// import React, { useState, useEffect } from 'react';

// const MaulidiApi = () => {
//   const [videos, setVideos] = useState([]);
//   const [activeVideo, setActiveVideo] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [loadingVideoId, setLoadingVideoId] = useState(null);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:8000/api/videos/');
//         const data = await response.json();
//         setVideos(data);
//       } catch (error) {
//         console.error('Error fetching videos:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVideos();
//   }, []);

//   const handleThumbnailClick = (videoId) => {
//     setLoadingVideoId(videoId);
//     setActiveVideo(null);

//     fetch(`http://127.0.0.1:8000/api/videos/${videoId}/`)
//       .then((response) => response.json())
//       .then((data) => {
//         setActiveVideo(data);
//         setLoadingVideoId(null);
//       })
//       .catch((error) => {
//         console.error('Error fetching video:', error);
//         setLoadingVideoId(null);
//       });
//   };

//   if (loading) {
//     return <div className="text-white text-center py-10">Loading videos...</div>;
//   }

//   return (
//     <div className="container px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
//       {videos.map((video) => {
//         const isActive = activeVideo && activeVideo.video_id === video.video_id;

//         return (
//           <div
//             key={video.video_id}
//             className="w-full bg-black rounded-md overflow-hidden shadow-md border border-white transition-transform transform"
//           >
//             <div className="relative w-full h-[400px]">
//               {isActive ? (
//                 <iframe
//                   src={`https://www.youtube.com/embed/${activeVideo.video_id}?autoplay=1&mute=1`}
//                   title={activeVideo.title}
//                   className="absolute top-0 left-0 w-full h-full"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   referrerPolicy="strict-origin-when-cross-origin"
//                   allowFullScreen
//                 ></iframe>
//               ) : (
//                 <img
//                   src={video.thumbnail_url}
//                   alt={video.title}
//                   className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
//                   onClick={() => handleThumbnailClick(video.video_id)}
//                 />
//               )}

//               {loadingVideoId === video.video_id && (
//                 <p className="absolute top-2 left-2 text-white bg-black bg-opacity-60 px-2 py-1 rounded">
//                   Loading video...
//                 </p>
//               )}
//             </div>

//             <div className="p-3">
//               <h3 className="text-lg font-semibold text-gray-100">
//                 {video.title}
//               </h3>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default MaulidiApi;
