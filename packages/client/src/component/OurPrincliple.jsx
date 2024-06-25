import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    // "/image/our-clients-03.png",
    "/image/our-clients-04.png",
    "/image/our-clients-05.png",
    // "/image/our-clients-06.png",
    "/image/our-clients-07.png",
    "/image/our-clients-11.png",
    "/image/our-clients-12.png",
    "/image/our-clients-13.png",
    "/image/our-clients-14.png",
    "/image/our-clients-15.png",
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
      <h1 className="text-center mt-2 md:mt-0 font-bold text-3xl md:text-5xl  md:mb-6 mb-4  ">
        Major Principals
      </h1>
      <div className="  flex justify-center text-center md:mt-6 md:ml-14 md:mr-14 xl:mt-2 ">
        <div className="md:relative  bg-white ">
          <div className="md:flex justify-center  hidden border-slate-950 border-solid ">
            {images
              .slice(currentSlide, currentSlide + 2)
              .map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="flex-1 w-full md:w-[340px]  h-16 md:h-auto  border-gray-200 border-4 m-1  mb:mb-4 md:mb-3 md:m-4"
                  alt={`Slide ${currentSlide + index + 1}`}
                />
              ))}
          </div>
          {/* this image is for mobile view */}
          <div className="flex justify-center md:hidden    border-gray-200 border-solid ">
            {images
              .slice(currentSlide, currentSlide + 1)
              .map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="flex-1 w-full   border h-28 md:h-auto  border-gray-200 m-1  mb:mb-4 md:mb-3 md:m-4"
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
