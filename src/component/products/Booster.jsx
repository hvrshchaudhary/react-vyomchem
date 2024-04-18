import React from "react";
import { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";


const Booster = () => {
  const b = [
    {
      "EMOLLIENT/BOOSTERS": [
        {
          product: "CAPB(Coco Amido Propyl Betaine)",
          comment : "It is derived from coconut oil, adds viscosity to products, use as a foam booster, thickener and emulsifying agent"
        },
        {
          product: "Cocobetaine",
          comment:"Cocobetaine is the mixture of fatty acids from coconut oil and propylene glycol. Great for removing makeup, act as surfactant"
        },
        {
          product: "Cocodiethanolamide",
          comment :"Act as foaming agent, emulsifying agent,thickner and  viscosity builder for cosmetic surfactant formulas."
        },
        {
          product: "Cocomonoethanolamide",
          comment :"It has a great foam boosting and stabilization ability, act as  a viscosity controller."
        },
        {
          product: "Decyl Oleate",
          comment:
            "It act as lubricants on the skin surface, used in moisturizer, anti-aging treatment, sunscreen, makeup and  hair conditioners",
        },
        {
          product: "Glyceryl  Mono-Oleate",
          comment:
            "It is an emulsifier and nonionic co-surfactant used in the formulation of lipsticks, eye shadows, makeup bases, and skin care products.",
        },
        {
          product: "Isodecyl Oleate",
          comment:
            "It is used as dispersants and lubricants,derived from the esterification of oleic acid and decanol.",
        },
        {
          product: "Lauryl betaine",
          comment:
            "It is used as an emulsifier, it stabilizes and thickens cosmetic formulations,",
        },
        {
          product: "Lauryl Lactate",
          comment:
            "It is a naturally occurring acid, an ester of lauryl alcohol and lactic acid,It is used as an emollient, skin conditioning agent, and exfoliant.",
        },
        {
          product: "Myristyl Myristate",
          comment:
            "It functions as a binder, and skin-conditioning agent, enhances esthetic properties of skin care",
        },
        {
          product: "Polyglyceryl oleate",
          comment:
            "It is an ester of oleic acid and Polyglycerin. Act as a surfactant and emulsifier.used in creams and lotions to mix water with oils.",
        },
        {
          product: "Sodium lactate ",
          comment:
            "It is a humectant moisturizer, attracting and retaining moisture in the skin.",
        },
        {
          product: "Sodium lauryl lactylate",
          comment:
            "It enhance product formulation,act as an emulsifier, thickener, and surfactant",
        },
        {
          product: "Sorbitan Mono Palmitate",
          comment:
            "It can be used in skin care, hair care and decorative cosmetics. Derived from monoester of palmitic acid and sorbitol",
        },
        {
          product: "Sorbitan Mono Stearate ",
          comment:
            "It is an emulsifying agent derived from sorbitol and stearic acid, used as thickening and stabilising emulsifier",
        },
        {
          product: "Tetraglyceryl monooleate ",
          comment:
            "It is used as a lipophilic emulsifier, thickener, sunshade and defoamer in the production of cream and lotion.",
        },
        {
          product: "Triglycerol Monosterate",
          comment:
            "It is a nonionic surfactant  and has great moisturizing properties, also used as a thickening agent",
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
  );
};

export default Booster;
