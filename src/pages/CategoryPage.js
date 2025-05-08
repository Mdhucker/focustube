
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const CategoryPage = () => {
//   const { category } = useParams();
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`http://127.0.0.1:8000/api/videos/?approved=true&deleted=false&category=${category}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setVideos(data);
//         setLoading(false);
//       });
//   }, [category]);

//   if (loading) return <p className="text-white text-center">Loading...</p>;

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
//       {videos.map((video) => (
//         <div key={video.video_id} className="bg-gray-800 p-4 rounded text-white">
//           <iframe
//             className="w-full h-64"
//             src={`https://www.youtube.com/embed/${video.video_id}`}
//             frameBorder="0"
//             allowFullScreen
//           ></iframe>
//           <h3 className="mt-2">{video.title}</h3>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CategoryPage;
