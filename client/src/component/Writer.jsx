import React from "react";
import { NavLink } from "react-router-dom";

const Writer = () => {
  return (
    <div className="bg-gray-100 justify-center flex  h-auto  py-10 xl:py-0 ">
      <div className="container flex flex-col  p-5 justify-evenly ">
        <div className=" flex justify-center ">
          <span className="xl:text-5xl text-xl text-center mb-5 xl:mb-10 font-semibold font-sans">Get in touch with us for any query !</span>
        </div>
        <div className="flex justify-evenly flex-col xl:flex-row">
          <div className="text-center  flex flex-col items-center pb-8 xl:pb-0">
            <img
              src="/image/more.jpg"
              alt=""
              className="w-28 h-28 rounded-full mb-3 "
            />
            <span className=" font-mono">minakshi@vyomchem.com</span>
          </div>
          <div className="text-center flex flex-col items-center pb-8 xl:pb-0">
            <img
              src="/image/more.jpg"
              alt=""
              className="w-28 h-28 rounded-full mb-3 "
            />
            <div className=" flex flex-col w-60">
              <div className="font-mono" >VYOMCHEM</div>
              <div className="font-mono">
              Vyomchem Specialities: Ground floor, Showroom no. G-05, Home Land City Mall Baddi, Chakkan Road, Baddi, Dist. Solan (H.P.) 173205
              </div>
            </div>
          </div>
          <div className="text-center flex flex-col items-center">
            <img
              src="/image/more.jpg"
              alt=""
              className="w-28 h-28 rounded-full mb-3"
            />
            <NavLink to="/form" >
            <span className="font-mono">Apply form for job</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writer;
