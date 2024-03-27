import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/image/our-clients-03.png",
    "/image/our-clients-04.png",
    "/image/our-clients-05.png",
    "/image/our-clients-06.png",
    "/image/our-clients-07.png",
    "/image/our-clients-11.png",
    "/image/our-clients-12.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 3 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length - 0]);

  return (
    <div className="flex-1 justify-center flex flex-col bg-gray-100 md:pt-7 md:pb-0 pt-10 pb-10 ">
      <h1 className="text-center mt-2 md:mt-0 font-bold text-3xl md:text-4xl  md:mb-0 mb-4  ">
        OUR PRINCIPLES
      </h1>
      <div className="  flex justify-center text-center md:mt-2 ">
        <div className="md:relative  bg-white ">
          <div className="md:flex justify-center  hidden border-slate-950 border-solid ">
            {images
              .slice(currentSlide, currentSlide + 3)
              .map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="flex-1 md:w-full  border h-16 md:h-auto  border-black m-1  mb:mb-4 md:mb-3 md:m-4"
                  alt={`Slide ${currentSlide + index + 1}`}
                />
              ))}
          </div>
          {/* this image is for mobile view */}
          <div className="flex justify-center md:hidden    border-slate-950 border-solid ">
            {images
              .slice(currentSlide, currentSlide + 1)
              .map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="flex-1 w-full  border h-18 md:h-auto  border-black m-1  mb:mb-4 md:mb-3 md:m-4"
                  alt={`Slide ${currentSlide + index + 1}`}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
