import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";
import { NavLink } from "react-router-dom";
const YourComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
    }, 3000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    new Typewriter("#hero-title", {
      strings: ["COSMETIC INGREDIENT"],
      autoStart: true,
      loop: true,
      // pauseFor: 1500,
    });

    return () => {};
  }, []);

  return (
    <div className="relative">
      <div
        id="default-carousel"
        className=" w-full"
        data-carousel="slide"
        style={{ zIndex: -1 }}
      >
        {/* Carousel wrapper */}
        <div
          className="  overflow-hidden  "
          style={{ height: "100vh", filter: "brightness(40%) blur(0.5px)" }}
        >
          {/* Item 1 */}
          <div
            className={`duration-700 ease-in-out h-full ${
              currentSlide === 0 ? "" : "hidden"
            }`}
            data-carousel-item
          >
            <img
              src="./public/image/banner.jpg"
              className="w-full h-full "
              style={{ objectFit: "cover" }}
              alt="Image 1"
            />
          </div>
          {/* Item 2 */}
          <div
            className={`duration-700 ease-in-out h-full ${
              currentSlide === 1 ? "" : "hidden"
            }`}
            data-carousel-item
          >
            <img
              src="./public/image/more.jpg"
              className="w-full h-full "
              style={{ objectFit: "cover" }}
              alt="Image 2"
            />
          </div>
          {/* Item 3 */}
          <div
            className={`duration-700 ease-in-out h-full ${
              currentSlide === 2 ? "" : "hidden"
            }`}
            data-carousel-item
          >
            <img
              src="./public/image/WAX.jpg"
              className="w-full h-full "
              style={{ objectFit: "cover" }}
              alt="Image 3"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          "@media only screen and (max-width: 600px)": {
            top: "20%",
            left: "10%",
          },
          zIndex: 2,
          top: "18%",
        }}
        className="absolute text-black p-12 justify-evenly md:left-[10%] "
      >
        <h3 className="font-bold text-xl sm:text-2xl lg:text-4xl  mt-1 text-white mb-2 sm:mb-5">
          Vyomchem specialist
        </h3>
        <h2
          id="hero-title"
          className="text-2xl sm:text-5xl font-bold mt-1  text-white "
        >
          COSMETIC INGREDIENT
        </h2>
        <div
          className=" mb-3 sm:mb-0"
          style={{
            // '@media only screen and (max-width: 600px)': {padding:"5",marginTop:"2"},
            padding: 2,
            // marginLeft:1,
            background: "#7CE6B3",
            marginTop: 3,
            width: "65%",
          }}
        ></div>
        <p className="sm:text-lg mb-8 mt-1 text-white ">
          BEST QUALITY COMMITTED TO SUPER PRODUCT QUALITY !.
        </p>
        <NavLink to = "/contact">
        <button className="bg-transparent hover:bg-black hover:text-white font-bold py-2 px-6 border border-white hover:border-transparent rounded sm:py-3 sm:px-8 md:py-2 md:px-10 lg:py-2 lg:px-8 xl:py-2 xl:px-6 text-white ">
         contact us
        </button>
        </NavLink>
      </div>
    </div>
  );
};

export default YourComponent;
