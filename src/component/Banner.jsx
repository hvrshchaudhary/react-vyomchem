import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="md:h-screen flex justify-center items-center md:pb-0 pb-6 "
      style={{
        // "@media only screen and (max-width: 600px)": {
        //   backgroundColor: "#7CE6B3",
        // },
        // backgroundColor: "white",
        backgroundColor: "#7CE6B3",
        // height: "100vh",
      }}
    >
      <div className=" md:flex justify-center    w-4/5  ">
        <div
          data-aos="fade-right"
          className="flex bg-white md:mt-0 md:mr-6 mt-5 pl-4 pr-2 md:pt-4 md:pr-10 md:pb-0 pt-2 pb-2 md:w-1/2"
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
            src="./public/image/Ayurvedic-image.jpg"
            alt="Your Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    //
  );
};

export default Banner;

// kkk

{
  /* <> */
}
// <div
//   style={{ backgroundColor: "#7CE6B3" }}
//   className="md:flex md:justify-between md:m-10 m-1 border rounded-lg  "
// >
//   <div className="md:flex-1 m-10 bg-white border rounded-lg">
//     <div className="text-left  md:p-10 p-3 ">
//       {" "}

//       <div className="text-black font-bold fixed">ABOUT US</div>
//       <div className="flex ">
//         Welcome to
//         <h1 className="ml-1 text-purple-900 font-bold">Vyomchem</h1>
//       </div>
//       <div className="md:mb-5 md:font-mono text-sm lg:text-base  ">
//         This group is the brainchild of professionals who during their
//         years of interactions/ exposure in various capacities in the API,
//         Nutrition and allied industry realized that a discerning buyer in
//         industry requires, apart from cost effectiveness and reliable
//         service, perpetual information about the latest innovations and
//         all other developments/happenings in the line. Founder's of this
//         group are widely travelled, highly dedicated and focused people.
//       </div>
//       <div className="hidden sm:block font-mono   ">
//         They carefully collect all possible information and data like
//         honey bees collecting the nectar to cater the need of the clients.
//       </div>

//       <a href="#" className="text-red-600 md:font-bold">
//         READ MORE....
//       </a>
//     </div>
//   </div>
//   <div className="md:flex-1 w- h-full m-4  p-6">
//     <img
//       src="./public/image/Ayurvedic-image.jpg"
//       alt="Your Image"
//       className="max-w-100% h-100% border rounded-lg"
//     />
//   </div>
// </div>

// text for content
//
