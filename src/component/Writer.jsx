import React from "react";

const Writer = () => {
  return (
    <div className="bg-gray-100 justify-center flex h-96 ">
      <div className="container flex flex-col border-t border-black  justify-evenly ">
        <div className=" flex justify-center ">
          <span className="text-5xl font-semibold font-sans">Get in touch with us for any query !</span>
        </div>
        <div className="flex justify-evenly">
          <div className="text-center  flex flex-col items-center ">
            <img
              src="/image/more.jpg"
              alt=""
              className="w-28 h-28 rounded-full mb-3 "
            />
            <span className=" font-mono">minakshi@vyomchem.com</span>
          </div>
          <div className="text-center flex flex-col items-center">
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
            <span className="font-mono">+91-9882020609</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writer;
