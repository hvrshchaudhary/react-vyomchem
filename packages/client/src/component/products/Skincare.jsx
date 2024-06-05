import React from "react";
import { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const Skincare = () => {
  const b = [
    {
        "SKIN CARE and PERSONAL CARE": [
          {
            product: "Calcium thioglycolate",
            comment : "It is the calcium salt of thioglycolic acid,an active ingredient in some hair removal products"

          },
          {
            product: "DL-Mandelic acid",
            comment : "It is very useful in suppressing pigmentation,rejuvenating photoaged skin"
          },
          {
            product: "Isorbide-2,5 dithioglycolate",
            comment :"It is used to stabilize, solvate, and deliver active ingredients into the skin" 
          },
          {
            product: "Lauryl Lactyl Lactate",
            comment : "It act as an emollient, moisturizer, and emulsifier, derived from lauryl alcohol and lactic acid."
          },
          {
            product: "Magnolol",
            comment : "It can be obtained from the bark of the Magnolia officinalis plant,soothing effect on skin irritations, reduces pigmentation "
          },
          {
            product: "n-Butyl Resorcinol",
            comment : "Resorcinol is considered as the most potent inhibitor of tyrosinase,as an effective skin lightener"
          },{
            product : "Potassium thioglycolate",
            comment : "It is an active ingredient in hair depilatory formulations"
          },{
            product : "Sodium lauryl lactylate",
            comment : "It enhance product formulation, act as an emulsifier, thickener, and surfactant"
          },
        ],
      },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const toggleComment = (index) => {
    setIsOpen(!isOpen), setSelectedIndex(index);
  };
  const handleMouseEnter = (index) => {
    setSelectedIndex(index);
  };

  const handleMouseLeave = () => {
    setSelectedIndex(null);
  };

  return (
    <>
    {b.map((categories, _index) => {
      return (
        <div key={_index} className="w-full md:flex">
          <div className="flex-col container md:w-full md:flex mt-5 mb-5">
            <div className="flex justify-center">
              {/* <span className="md:text-4xl text-sm  md:mt-0 font-bold text-black">
                {Object.keys(categories)[0]}
              </span> */}
            </div>
            <div className="flex w-full justify-center">
              <div className="flex justify-center xl:w-full w-4/5 ">
                <div
                  className="md:w-full  rounded-md  w-full   mt-5"
                  style={{
                    backgroundImage: "url('/category-images/skincare.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <main className="mx-auto px-4 md:pt-6 pb-6 flex flex-wrap justify-center">
                    {/* Map through and render content */}
                    {categories[Object.keys(categories)[0]].map(
                      (ele, index) => {
                        return (
                          <div
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            className="relative text-center rounded-lg m-4 opacity-75 hover:opacity-90 bg-white shadow-md w-64"
                            // style={{ filter: selectedIndex === index ? "none" : "brightness(90%)" }}
                          >
                            <div className="w-64 h-56 bg-white justify-center flex object-cover rounded-lg">
                              <span className="w-full h-full text-xl font-bold items-center justify-center flex">
                                {ele.product}
                              </span>
                            </div>
                            {/* Additional content */}
                            {selectedIndex === index && (
                              <div
                                className="absolute z-10 opacity-100 bg-green-100 top-0 bottom-0 left-0 right-0 hover:scale-110 transition-all"
                                style={{
                                  boxShadow:
                                    "5px 5px 10px rgba(0, 0, 0, 0.1)",
                                }}
                              >
                                <div className="flex w-full h-2/6 justify-center text-center items-center">
                                  <span className="text-lg p-1 font-semibold text-wrap">
                                    {ele.product}
                                  </span>
                                </div>
                                <div className="w-full h-1/2 flex i">
                                  <span className="p-1 absolute item-center text-center text-sm font-mono flex m-2 text-black">
                                    {ele.comment}
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      }
                    )}
                  </main>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </>

  );
};

export default Skincare;
