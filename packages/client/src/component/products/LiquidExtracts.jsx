import React from "react";
import { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const LiquidExtracts = () => {
  const b = [
    {
      "Liquid Extracts (water/oil soluble)": [
        {
          product: "Aloe vera extract(water soluble)",
          comment : "Moisturizer, sunscreen Emollient, Fights skin aging.  Reduces infection and acne Lightens blemishes on the face"
        },
        {
          product: "Citrus extract(water soluble)",
          comment : "Skin creams,anti acne,antibacterial"
        },
        {
          product: "Liquorice extract(water soluble)",
          comment : "De-pigmenting,lightening,emollient,anti-acne,photoprotection,antiaging,antimicrobial and antioxidant properties"
        },
        {
          product: "Bamboo extract(water soluble)",
          comment : "Visibly reduces the sign of fatigue and leaves the skin feeling hydrated and balanced"
        },
        {
          product: "Turmeric extract(oil soluble)",
          comment : "Antibacterial,antimicrobial skin creams"
        },
        {
          product: "Neem Extract(water soluble)",
          comment : "Antiseptic,reduce dark spots,antibacterial"
        },
        {
          product: "Cantella extract( water soluble)",
          comment : "Bound healing, reduce stretch marks creams"
        },
        {
          product: "Green tea extract(water soluble)",
          comment : "Decrease any under-eye puffiness while helping reduce the appearance of dark circles"
        },
        {
          product: "Resveratrol(non soluble)",
          comment : "Moisturizing and tightening effects on skin, proliferation of fibroblasts and contributing to the increase in the concentration of collagen III"
        },
        {
          product: "Green coffee bean extract(water soluble)",
          comment : "Its anti-inflammatory properties aid in soothing irritated skin and reducing redness Chlorogenic acid Its antioxidant action helps neutralize free radicals, protecting the skin from premature aging and environmental damage"
        },
        {
          product: "Lutein(oil soluble)",
          comment : "Brighten skin: Lutein can improve skin moisture, and destroy harmful factors from the external environment to help brighten and smooth skin."
        },
        {
          product: "Flavonoids",
          comment : "Increase skin moisture-retention and smoothness, as well as reduce roughness"
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
                    backgroundImage: "url('/image/extract.jpg')",
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

export default LiquidExtracts;