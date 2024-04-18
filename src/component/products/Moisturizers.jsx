import React from "react";
import { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const Moisturizers = () => {
  const b = [
    {
        Moisturizers: [
          {
            product: "Allantoin",
            comment : "It helps in enhancing the smoothness of skin, moisturizing and healing agent, anti-irritant, wound healing properties"
          },
          {
            product: "cctg",
            comment : "It helps smooth skin and works as an antioxidant.It can be used as acne treatment, antiperspirant/deodorant, color cosmetics, hair care, skin care, sun car and wipes."
          },
          {
            product: "Glycerol Mono Stearate",
            comment : "It can be used as a thickening, emulsifying & anticaking agent."
          },
          {
            product: "Hydroxyethtyl Urea",
            comment : "It is a low-molecular-weight, highly water-soluble, hygroscopic solid that functions as a moisturizer and humectant "
          },
          {
            product: "Iso Propyl Myristate (IPM)",
            comment : "It is a fatty acid ester of isopropyl alcohol and myristic acid, act as texture enhancer and emollient used in cosmetics"
          },
          {
            product: "Iso Propyl palmitate (IPP)",
            comment : "It is a fatty acid ester of isopropyl alcohol and palmitic acid,primarily used as an emollient that soothe and soften the skin."
          },
          {
            product: "Lauryl Lactate",
            comment : "It is an ester of lauryl alcohol and lactic acid,functioning as an emollient, skin conditioning agent, and exfoliant."
          },  {
            product: "pullulan",
            comment : "It is a natural polysaccharide excreted by the Marine Yeast,has binding and thickening properties."
          },{
            product: "Sodium Hyaluronate",
            comment : "A form of hyaluronic acid. Act as a humectant, it pulls in water from the air and helps to retain moisture to keep your skin hydrated"
          },   {
            product: "Sodium PCA",
            comment : "A sodium salt of pyroglutamic acid used in many skin care and hair care products as a moisturizer"
          },   {
            product: "Zinc PCA",
            comment : "It is derived from Zinc and is used for conditioning the skin"
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
                              style={{
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                              }}
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

export default Moisturizers;
