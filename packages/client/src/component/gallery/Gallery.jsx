import React, { useState } from "react";

const Blog = () => {
  const celebrationImages = [
    "/galleryimage/celebration/celebrationpic-01.jpeg",
    "/galleryimage/celebration/celebrationpic-02.jpeg",
    "/galleryimage/celebration/celebrationpic-03.jpeg",
    "/galleryimage/celebration/celebrationpic-04.jpeg",
    "/galleryimage/celebration/celebrationpic-05.JPG",
    "/galleryimage/celebration/celebrationpic-06.JPG",
    "/galleryimage/celebration/celebrationpic-07.JPG",
    "/galleryimage/celebration/celebrationpic-08.JPG",
    "/galleryimage/celebration/celebrationpic-09.JPG",
  ];

  const socialCauseImages = [
    "/galleryimage/SocialCause/SOCIAL-CLAUSE-01.jpeg",
    "/galleryimage/SocialCause/SOCIAL-CLAUSE-02.jpeg",
    "/galleryimage/SocialCause/SOCIAL-CLAUSE-03.jpeg",
    "/galleryimage/SocialCause/SOCIAL-CLAUSE-04.JPG",
    "/galleryimage/SocialCause/SOCIAL-CLAUSE-05.JPG",
    "/galleryimage/SocialCause/SOCIAL-CLAUSE-06.JPG",
  ];

  const [hoveredImage, setHoveredImage] = useState(null);
  const [hoveredImagePosition, setHoveredImagePosition] = useState({
    top: 0,
    left: 0,
  });

  const handleMouseEnter = (image, event) => {
    const { clientX: left, clientY: top } = event;
    setHoveredImage(image);
    setHoveredImagePosition({ top, left });
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div className="relative p-8">
      {hoveredImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative" onMouseLeave={handleMouseLeave}>
            <img
              src={hoveredImage}
              alt="Hovered"
              className="max-w-full max-h-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
      <div
        className={`transition-all duration-300 ${
          hoveredImage ? "blur-lg" : ""
        }`}
      >
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Social Cause
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {socialCauseImages.map((image, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                onMouseEnter={(e) => handleMouseEnter(image, e)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-full h-48">
                  <img
                    src={image}
                    alt={`Social Cause ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Celebration
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {celebrationImages.map((image, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                onMouseEnter={(e) => handleMouseEnter(image, e)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-full h-48">
                  <img
                    src={image}
                    alt={`Celebration ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
