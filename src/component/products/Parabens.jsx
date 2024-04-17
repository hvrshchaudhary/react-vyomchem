import React from "react";
import { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const Parabens = () => {
  const b = [
    {
        Parabens: [
          {
            product: "Butyl Paraben",
            comment : "It is used as a antimicrobial preservative,found in shaving creams, moisturizers, shampoos, lubricants"
          },
          {
            product: "Ethyl Paraben",
            comment : "It is mainly used as antiseptics in cosmetics and personal care products."
          },
          {
            product: "Methyl Paraben",
            comment : "It is a synthetic preservative commonly used in cosmetics and personal care products"
          },
          {
            product: "Propyl Paraben",
            comment : "A preservative typically used in many water-based cosmetic products."
          },
          {
            product: "Sodium Butyl Paraben",
            comment : "An antimicrobial preservative used in cosmetics"
          },
          {
            product: "Sodium Ethyl Paraben",
            comment : "It is suitable to preserve both rinse- off and leave- on formulations"
          },
          {
            product: "Sodium Methyl Paraben",
            comment : "MPS is a versatile preservative with a wide range of industrial & manufacturing applications."
          },
          {
            product: "Sodium Propyl Paraben",
            comment : "PPS is a water-soluble antiseptic mainly used as a safe, high efficiency, broad-spectrum antibiotic for cosmetics"
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
                          className={` border rounded-sm border-black mt-2 ${
                            index % 2 === 0
                              ? "bg-green-300 hover:bg-green-200 text-black"
                              : "bg-yellow-200 hover:bg-yellow-100"
                          }`}
                        >
                          <li
                            className="flex justify-between products-center pl-3 md:py-2 py-1"
                            // onMouseEnter={() => toggleComment(index)}
                          onClick={() => toggleComment(index)}
                          

                          >
                            <span className="md:text-lg text-sm md:font-semibold hover:font-bold">
                              {ele.product}
                            </span>
                          </li>
                        </div>
                        {isOpen && index === selectedIndex && (
                          <div className=" h-max w-full flex mt-3 justify-end text-lg font-normal">
                            <BsArrowReturnRight className=" mt-1 text-3xl md:text-4xl mr-1 ml-2" />
                            <span
                              className="w-11/12 px-3 py-2  bg-orange-300 hover:bg-orange-200 md:text-lg text-sm text-black md:font-semibold rounded-md "
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

export default Parabens;
