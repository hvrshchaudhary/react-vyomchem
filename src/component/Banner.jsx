import React from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="h-screen auto md:pt-6 md:pb-6 flex justify-center items-center pb-10 p-5 bg-green-300">
      <div className="container md:flex justify-center lg:w-4/5">
        <div className="flex rounded-md border  bg-white  md:h-auto mt-0 md:mr-6 md:w-1/2">
          <div className="text-left flex flex-col justify-center  p-4 md:p-7">
            <div className="text-black font-semibold  text-sm md:text-xl md:pb-1">
              ABOUT US
            </div>
            <div className="flex items-center text-xl font-semibold pb-[2px] md:pb-0 md:text-2xl">
              Welcome to
              <h1 className="ml-1 text-green-800 font-bold md:text-2xl text-xl">Vyomchem</h1>
            </div>
            <p className="font-mono text-sm 2xl:text-xl pb-2 leading-normal md:my-4">
              This group is the brainchild of professionals who, during their
              years of interactions/exposure in various capacities in the API,
              Nutrition, and allied industry, realized that a discerning buyer in
              the industry requires, apart from cost-effectiveness and reliable
              service, perpetual information about the latest innovations and all
              other developments/happenings in the line. Founders of this group
              are widely traveled, highly dedicated, and focused people.
            </p>
            <div className="hidden sm:block md:pb-3 2xl:text-xl text-sm font-mono">
              They carefully collect all possible information and data like
              honey bees collecting the nectar to cater the need of the clients.
            </div>
            <NavLink
              to="/About"
              className="text-white rounded-sm py-1 px-2 md:px-4 bg-green-800 font-bold text-xs md:text-base self-start w-max"
            >
              READ MORE....
            </NavLink>
          </div>
        </div>
        <div className="md:w-1/2 md:mt-0  mt-2">
          <img
            src="/image/Ayurvedic-image.jpg"
            alt="Your Image"
            className="w-full h-full object-cover md:rounded-md md:border"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
