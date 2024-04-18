import React from "react";
import  { useState } from "react";

import { BsArrowReturnRight } from "react-icons/bs";
const Antibacterial = () => {
  const b = [
    {
        "ANTI BACTERIAL": [
          {
            product: "Bakuchiol (natural retinol)",
            comment : "Bakuchiol is a natural alternative to a retinoid,helps prevent fine lines and wrinkles, "

          },
          {
            product: "Benzalkonium Chloride",
            comment : "It is used as disinfectants, preservatives, and sanitizers."
          },
          {
            product: "Benzethonium Chloride",
            comment :"It is used in the formulation of bath, skin, personal cleanliness, shaving, and suntan products,Safe for use in leave on cosmetic products"
          },
          {
            product: "Cetyl pyridinium chloride monohydrate",
            comment : "It is used as an antibacterial agent in cosmetics, toiletries.It is an antiseptic that kills bacteria and other microorganisms"
          },
          {
            product: "Chloroxylenol",
            comment : "It is an antiseptic and disinfectant agent, act as a preservative "
          },
          {
            product: "Triclosan",
            comment :"Triclosan is an antimicrobial agent found in a wide variety of antibacterial soaps, detergents and deodorants"
          },
          {
            product: "Zinc citrate trihydrate",
            comment :"It is an antibacterial ingredient that inhibits the growth of odor causing bacteria." 
          },
          {
            product: "Zinc lactate dihydrate",
            comment : "It has skin-soothing and anti-inflammatory properties, functioning as an emollient, skin conditioning agent, and exfoliant"
          },
        ],
      },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setselectedIndex] = useState(null);
  const toggleComment = (index) => {
    setIsOpen(!isOpen);
    setselectedIndex(index);
  };

  return (
    <>
      <div className="w-full md:flex  justify-center">
        <div className="md:w-full md:flex  ">
          <div className=" md:w-full ">
            {b.map((category, _index) => {
              return (
                <div
                  key={_index}
                  className="pl-[25px] pr-[25px] md:mt-[24px] mt-10 m-5 pb-5 pt-2 border-2 rounded-md border-black   bg-gray-50 "
                  data-aos="fade-up-left"
                  style={{
                    // boxShadow:"10px 10px lightblue"
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="text-center md:pt-3 md:pb-4 pb-2 ">
                    <span
                      id={Object.keys(category)[0]}
                      className="pl-1  font-semibold text-green-800 font-fira-neue  md:text-4xl"
                    >
                      {Object.keys(category)[0]}
                    </span>
                  </div>
                  {category[Object.keys(category)[0]].map((ele, index) => {
                    return (
                      <>
                        <div
                          key={index}
                          onClick={() => toggleComment(index)}
                          className={` border cursor-pointer rounded-sm border-black mt-2 ${
                            index % 2 === 0
                              ? "bg-green-300 hover:bg-green-200 text-black"
                              : "bg-yellow-200 hover:bg-yellow-100"
                          }`}
                        >
                          <li
                            className="flex justify-between products-center pl-3  md:py-2 py-1"
                          

                          >
                            <span className="md:text-lg text-sm md:font-semibold  hover:font-bold">
                              {ele.product}
                            </span>
                          </li>
                        </div>
                        {isOpen && index === selectedIndex && (
                          <div className=" h-max w-full flex mt-3 justify-end text-lg font-normal">
                            <BsArrowReturnRight className=" mt-1 text-3xl md:text-4xl mr-1 ml-2" />
                            <span
                            data-aos="fade-left"
                              className="w-11/12 px-3 py-2  bg-white border hover:bg-gray-100 border-black md:text-lg text-sm text-black md:font-semibold rounded-md "
                            >
                              {
                                category[Object.keys(category)[0]][
                                  selectedIndex
                                ].comment
                              }
                            </span>
                          </div>
                        )}
                      </>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Antibacterial;
