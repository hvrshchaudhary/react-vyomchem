import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faTimes);

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

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseClick = () => {
    setSelectedImage(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("overlay")) {
      setSelectedImage(null);
    }
  };

  return (
    <div className="relative p-8">
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 overlay"
          onClick={handleOverlayClick}
        >
          <div className="relative max-w-full max-h-full">
            <button
              onClick={handleCloseClick}
              className="absolute top-0 right-0 mt-2 mr-2 text-black text-3xl font-bold border-2 border-black rounded-full px-2 py-1 z-50"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-screen rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
      <div>
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Social Cause
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {socialCauseImages.map((image, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => handleImageClick(image)}
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
                onClick={() => handleImageClick(image)}
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
