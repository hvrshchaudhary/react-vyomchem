import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="xl:h-screen h-screen md:h-auto md:pt-6 md:pb-6 flex justify-center items-center  pb-6 "
      style={{
     
        backgroundColor: "#7CE6B3",
      }}
    >
      <div className=" md:flex justify-center    w-4/5  ">
        <div
          data-aos="fade-right"
          className="flex md:rounded-lg md:border bg-white md:mt-0 md:mr-6 mt-5 pl-4 pr-2 md:pt-4 md:pr-10 md:pb-0 pt-2 pb-2 md:w-1/2"
        >
          <div className=" text-left   ">
            <div className="text-black  font-bold text-sm  lg:text-base">
              ABOUT US
            </div>
            <div className="flex text-xs  lg:text-base">
              Welcome to
              <h1 className="ml-1 text-purple-900 font-bold ">Vyomchem</h1>
            </div>
            <div className="md:mb-5  md:font-mono  text-xs lg:text-base">
              This group is the brainchild of professionals who during their
              years of interactions/ exposure in various capacities in the API,
              Nutrition and allied industry realized that a discerning buyer in
              industry requires, apart from cost effectiveness and reliable
              service, perpetual information about the latest innovations and
              all other developments/happenings in the line. Founder's of this
              group are widely travelled, highly dedicated and focused people.
            </div>
            <div className="hidden sm:block  font-mono">
              They carefully collect all possible information and data like
              honey bees collecting the nectar to cater the need of the clients.
            </div>

            <NavLink to="/About" className="text-red-600 font-bold text-xs lg:text-base">
              READ MORE....
            </NavLink>
          </div>
        </div>
        <div data-aos="fade-left" className="md:w-1/2 md:mt-0 mt-2">
          <img
            src="/image/Ayurvedic-image.jpg"
            alt="Your Image"
            className="w-full h-full object-cover md:rounded-lg md:border"
          />
        </div>
      </div>
    </div>

    //
  );
};

export default Banner;

