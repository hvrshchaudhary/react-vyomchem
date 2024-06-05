import React from "react";
import { NavLink } from "react-router-dom";

const OurPrinciplepage = () => {
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
  return (
    <div>
      <div className="h-full ">
        <img
          className="h-40  w-full md:h-52 object-cover"
          style={{
            filter: "brightness(40%)",
          }}
          src="/image/more.jpg"
          alt=""
        />
        <div
          className="md:top-56 top-32 md:left-24 left-5  text-white font-bold text-3xl md:text-4xl absolute"
          style={{
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          Major Principal
        </div>
      </div>
      <div className="w-full  bg-gray-200 flex justify-center">
        <div className="w-4/5 h-full flex flex-wrap mt-6 mb-6 bg-white justify-evenly">
          <div className="flex container flex-wrap justify-between">
            <div className="border-gray-200  border-2 m-4">
              <img
                src="/image/our-clients-02.png"
                style={{ width: 280 }}
                alt=""
              />
            </div>
            {images.map((ele)=>{
              return(
                <div className="border-gray-200 border-2  m-4">
                <img src={ele} alt="" />
              </div>
              )
            })}
            {/* <div className="m-4 w-[280px] flex flex-col justify-center text-">
              <div className="flex text-end">
                <NavLink  onClick={() => { window.location.href = '/cosmeceuticals/#Alcohol-Sulphate'; }} className=" font-bold text-xl"> <button className="border-black border rounded-lg hover:bg-black hover:text-white pl-5 pr-5 p-2">Our Product</button>
                  </NavLink>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPrinciplepage;
