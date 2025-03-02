// import React, { useState, useEffect } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";

// const destinations = [
//   { title: "Dest1", imageUrl: "/path/to/image1.jpg", description: "Description for Destination 1" },
//   { title: "Dest2", imageUrl: "/path/to/image2.jpg", description: "Description for Destination 2" },
//   { title: "Dest3", imageUrl: "/path/to/image3.jpg", description: "Description for Destination 3" },
//   { title: "Dest4", imageUrl: "/path/to/image4.jpg", description: "Description for Destination 4" },
//   { title: "Dest5", imageUrl: "/path/to/image5.jpg", description: "Description for Destination 5" },
// ];

// const BestDestinations = () => {
//   const [currentPage, setCurrentPage] = useState(0);

//   // Auto slide effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (currentPage < destinations.length - 1) {
//         setCurrentPage(currentPage + 1);
//       } else {
//         setCurrentPage(0); // Reset to the first card after the last one
//       }
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval);
//   }, [currentPage]);

//   return (
//     <div className="container my-4">
//       <h1 className="text-center mb-4">Best Destinations to Experience</h1>

//       <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-inner">
//           {destinations.map((destination, index) => (
//             <div
//               className={`carousel-item ${index === currentPage ? 'active' : ''}`}
//               key={index}
//             >
//               <div className="card" style={{ width: "18rem" }}>
//                 <img src={destination.imageUrl} className="card-img-top" alt={destination.title} />
//                 <div className="card-body">
//                   <h5 className="card-title">{destination.title}</h5>
//                   <p className="card-text">{destination.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide="prev"
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide="next"
//         >
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BestDestinations;
