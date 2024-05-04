import React from "react";
import { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const Sunscreen = () => {
  const b = [
    {
      Sunscreens: [
        {
          product: "Avobenzone",
          comment : "Avobenzone is dibenzoyl methane derivative. It is oil soluble ingredient. It functions as a sunblock. They enhance the activity of deodorants, sunscreens, eye shadows, lipsticks, moisturizers"
        },
        {
          product: "Benzophenone 3 / Oxybenzone",
          comment : "It is an organic compound belonging to the class of aromatic ketones,absorbs UVB and short UVA"
        },
        {
          product: "bisoctrizole",
          comment : 'Bisoctrizole is a phenolic benzotriazole that is added to sunscreens to absorb UV rays. '
        },
        {
          product: "Calamine Powder",
          comment : "It is used to make facial masks and face packs that reduces redness and swelling of infected skin conditions and is also used as a mild antiseptic to prevent infections"
        },
        {
          product: "Caprylic Capric Triglyceride (CCTG)",
          comment : "It helps smooth skin and works as an antioxidant. It can be used as acne treatment, antiperspirant/deodorant, color cosmetics, hair care, skin care, sun car and wipes."
        },
        {
          product: "diethylhexyl butamido triazone",
          comment : "A chemical sunscreen agent that's very oil soluble and requires relatively low concentrations to achieve high SPF values "
        },
        {
          product: "Ethylhexyl Triazone",
          comment : "Used in cosmetics and personal care products,Ethylhexyl triazone is a synthetic sunscreen ingredient known for excellent ability to help protect skin from UVB rays"
        },
        {
          product: "Homosalate",
          comment : "It is a soluble organic UV-B filter, widely used chemical in sunscreens and skin care products with SPF"
        },
        {
          product: "Octocrylene",
          comment : "An organic compound used as an ingredient in sunscreens and cosmetics. It is oil-soluble chemical sunscreen agent that protects skin from UVB."
        },
        {
          product: "Octyl Methoxy Cinnamate (OMC) / Octinoxate",
          comment : "It is a cinnamate ester and common ingredient in sunscreen and other skin care products to minimize DNA photodamage"
        },
        {
          product: "Octyl Salicylate/octisilate",
          comment : "It is an oil soluble sunscreen agent used to augment the UVB protection in a sunscreen"
        },
        {
          product: "titanium di oxide",
          comment : "It is used as high UVA/UVB protection, coated with aluminium. "
        },
        {
          product: "zinc oxide",
          comment : "It provides broad-spectrum protection against UVA and UVB"
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

export default Sunscreen;
