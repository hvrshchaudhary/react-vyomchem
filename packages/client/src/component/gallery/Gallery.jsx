import React from "react";
// import { NavLink } from "react-router-dom";

const Blog = () => {
  const celebrationImages = [
    "./galleryimage/celebrations/Celebrationpic-01.jpeg",
    "/image/our-clients-04.png",
    "/image/our-clients-05.png",
    "/image/our-clients-06.png",
    "/image/our-clients-07.png",
    "/image/our-clients-11.png",
    "/image/our-clients-12.png",
    "/image/our-clients-03.png",
    "/image/our-clients-04.png",
    "/image/our-clients-05.png",
    "/image/our-clients-06.png",
    "/image/our-clients-07.png",
    "/image/our-clients-11.png",
    "/image/our-clients-12.png",
  ];

  const socialCauseImages = [
    "/image/our-clients-03.png",
    "/image/our-clients-04.png",
    "/image/our-clients-05.png",
    "/image/our-clients-06.png",
    "/image/our-clients-07.png",
    "/image/our-clients-11.png",
    "/image/our-clients-12.png",
    "/image/our-clients-03.png",
    "/image/our-clients-04.png",
    "/image/our-clients-05.png",
    "/image/our-clients-06.png",
    "/image/our-clients-07.png",
    "/image/our-clients-11.png",
    "/image/our-clients-12.png",
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Social Cause</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {socialCauseImages.map((image, index) => (
            <div key={index} className="border p-2">
              <img
                src={image}
                alt={`Social Cause ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4">Celebration</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {celebrationImages.map((image, index) => (
            <div key={index} className="border p-2">
              <img
                src={image}
                alt={`Celebration ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
