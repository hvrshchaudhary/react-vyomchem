import React from "react";

const OurPrinciplepage = () => {
  return (
    <div>
      <div className="h-full ">
        <img
          className="h-40  w-full md:h-52 object-cover"
          style={{
            filter: "brightness(50%)",
          }}
          src="./image/more.jpg"
          alt=""
        />
        <div
          className="md:top-36 top-28 md:left-16 left-5  text-white font-bold text-4xl absolute"
          style={{
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          Cosmeceuticals Principle
        </div>
      </div>
      <div className="w-full  bg-gray-200 flex justify-center">
        <div className="w-4/5 h-full flex flex-wrap mt-6 mb-6 bg-white justify-evenly">
            <div className="flex flex-wrap justify-between">
          <div className="border-black border m-4 ">
            <img src="./image/our-clients-01.png" alt="" />
          </div>
          <div className="border-black border m-4">
            <img src="./image/our-clients-02.png" alt="" />
          </div>
          <div className="border-black border m-4">
            <img src="./image/our-clients-03.png" alt="" />
          </div>
          <div className="border-black border m-4">
            <img src="./image/our-clients-04.png" alt="" />
          </div>
          <div className="border-black border m-4">
            <img src="./image/our-clients-05.png" alt="" />
          </div>
          <div className="border-black border m-4">
            <img src="./image/our-clients-06.png" alt="" />
          </div>
          <div className="border-black border m-4">
            <img src="./image/our-clients-07.png" alt="" />
          </div>
          <div className="border-black border m-4">
            <img src="./image/our-clients-08.png" alt="" />
          </div>
          <div className="border-black border m-4">
            <img src="./image/our-clients-09.png" alt="" />
          </div>
          <div className="border-black border m-4">
                <img src="./image/our-clients-10.png" alt="" />
            </div>
            <div className="border-black border m-4">
                <img src="./image/our-clients-11.png" alt="" />
            </div>
            <div className="border-black border m-4">
                <img src="./image/our-clients-12.png" alt="" />
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurPrinciplepage;
