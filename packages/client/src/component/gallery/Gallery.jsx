import React, { useState , useEffect   } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineClose } from 'react-icons/ai';

const Gallery = () => {
  const celebrationImages = [
    "/galleryimage/celebration/celebrationpic-01.jpeg",
    "/galleryimage/celebration/celebrationpic-02.jpeg",
    "/galleryimage/celebration/celebrationpic-03.jpeg",
    "/galleryimage/celebration/celebrationpic-04.jpeg",
    "/galleryimage/celebration/celebrationpic-05.jpg",
    "/galleryimage/celebration/celebrationpic-06.jpg",
    "/galleryimage/celebration/celebrationpic-07.jpg",
    "/galleryimage/celebration/celebrationpic-08.jpg",
    "/galleryimage/celebration/celebrationpic-09.jpg",
  ];

  const socialCauseImages = [
    "/galleryimage/SocialCause/SOCIAL-CLAUSE-01.jpeg",
    "/galleryimage/SocialCause/SOCIAL-CLAUSE-02.jpeg",
    "/galleryimage/SocialCause/SOCIAL-CLAUSE-03.jpeg",
    "/galleryimage/SocialCause/SOCIAL-CLAUSE-04.jpg",
    "/galleryimage/SocialCause/SOCIAL-CLAUSE-05.jpg",
    "/galleryimage/SocialCause/SOCIAL-CLAUSE-06.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);

const [isOpen, setIsOpen] = useState(false);
  
  
  const handlePrevClick = () => {
  setCurrentIndex((prevIndex) => {
    const newIndex = (prevIndex - 1 + currentImages.length) % currentImages.length;
    setSelectedImage(currentImages[newIndex]);
    return newIndex;
  });
};

const handleNextClick = () => {
  setCurrentIndex((prevIndex) => {
    const newIndex = (prevIndex + 1) % currentImages.length;
    setSelectedImage(currentImages[newIndex]);
    return newIndex;
  });
};

const handleImageClick = (image, index, images) => {
  setSelectedImage(image);
  setCurrentIndex(index);
  setCurrentImages(images);
  setIsOpen(true); // Set isOpen to true when an image is clicked
};

const handleCloseClick = () => {
  setSelectedImage(null);
  setCurrentIndex(0);
  setIsOpen(false); // Set isOpen to false when the gallery is closed
};

useEffect(() => {
  if (isOpen) {
    const handleKeyDown = (event) => {
      switch (event.keyCode) {
        case 37: // left arrow
          handlePrevClick();
          break;
        case 39: // right arrow
          handleNextClick();
          break;
        case 27: // escape key
          handleCloseClick();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }
}, [isOpen, handlePrevClick, handleNextClick, handleCloseClick]);
  return (
    <div className="relative p-8">
      {selectedImage && (
        <>
          <div className="fixed top-[2%] left-1/2 transform -translate-x-1/2 w-80 bg-white bg-opacity-75 rounded-full flex justify-between items-center p-2 shadow-lg" style={{zIndex:"52"}}>
            <AiOutlineArrowLeft className="text-black text-2xl cursor-pointer hover:text-gray-600" onClick={handlePrevClick} />
            <AiOutlineClose className="text-black text-2xl cursor-pointer hover:text-gray-600" onClick={handleCloseClick} />
            <AiOutlineArrowRight className="text-black text-2xl cursor-pointer hover:text-gray-600" onClick={handleNextClick} />
          </div>
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center overlay" style={{zIndex:"51"}}>
            <div className="relative max-w-full max-h-full">
              <img
                src={selectedImage}
                alt="Selected"
                className="max-w-full max-h-screen rounded-lg shadow-lg"
              />
            </div>
          </div>
        </>
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
                onClick={() => handleImageClick(image, index, socialCauseImages)}
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
                onClick={() => handleImageClick(image, index, celebrationImages)}
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

export default Gallery;
