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

export default Sunscreen;
