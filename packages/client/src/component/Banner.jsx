import React from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <>
   <div className="relative ">
  <div className="absolute inset-0">
    <img src="/image/extract.jpg" className="h-screen w-full opacity-25 bg-green-300  object-cover" alt="" />
  </div>
  <div className="h-screen auto md:pt-6 md:pb-6 static flex  justify-center items-center pb-10 p-5 ">
    <div className="container md:flex justify-center lg:w-4/5">
      <div className="flex rounded-md  z-10 xl:bg-transparent bg-white  md:h-auto mt-0 md:mr-6 md:w-1/2">
        <div className="text-left flex flex-col justify-center p-4 md:p-7">
          <div className="text-black font-semibold text-sm md:text-xl md:pb-1">
            ABOUT US
          </div>
          <div className="flex items-center text-xl font-semibold pb-[2px] md:pb-0 md:text-3xl">
            Welcome to
            <h1 className="ml-1 font-bold md:text-3xl text-xl" style={{ color: '#00B989' }}>Vyomchem</h1>
          </div>
          <p className="font-mono xl:text-base text-sm 2xl:text-xl pb-2 leading-normal md:my-4">
            This group is the brainchild of professionals who, during their
            years of interactions/exposure in various capacities in the API,
            Nutrition, and allied industry, realized that a discerning buyer in
            the industry requires, apart from cost-effectiveness and reliable
            service, perpetual information about the latest innovations and all
            other developments/happenings in the line. Founders of this group
            are widely traveled, highly dedicated, and focused people.
          </p>
          <div className="hidden xl:text-base sm:block md:pb-3 2xl:text-xl text-sm font-mono">
            They carefully collect all possible information and data like
            honey bees collecting the nectar to cater the need of the clients.
          </div>
          <NavLink
            to="/About"
            className="text-white rounded-sm py-1 px-2 md:px-4 font-medium hover:bg-green-600 self-start w-max"
            style={{ backgroundColor: '#00B989', fontSize: '0.75rem' }}
          >
            READ MORE...
          </NavLink>
        </div>
      </div>
      <div className="md:w-1/2 z-10 md:mt-0 mt-2">
        <img
          src="/image/Ayurvedic-image.jpg"
          alt="Your Image"
          className="w-full h-full object-cover md:rounded-md md:border"
        />
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Banner;
