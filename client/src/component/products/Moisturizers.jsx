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
              <span className="md:text-4xl text-sm  md:mt-0 font-bold text-black">
                {Object.keys(categories)[0]}
              </span>
            </div>
            <div className="flex w-full justify-center">
              <div className="flex justify-center xl:w-full w-4/5 ">
                <div
                  className="md:w-full  rounded-md  w-full   mt-5"
                  style={{
                    backgroundImage: "url('/image/more.jpg')",
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

export default Moisturizers;
