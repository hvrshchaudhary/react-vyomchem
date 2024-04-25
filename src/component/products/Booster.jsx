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
            <div className="flex justify-center" >
              <span className="md:text-4xl text-sm  md:mt-0 font-bold text-black">
                {Object.keys(categories)[0]}
              </span>
            </div>
            <div className="flex w-full justify-center">
            <div className="flex justify-center xl:w-full w-4/5 ">
            <div className="md:w-full  rounded-md  w-full   mt-5"  style={{ backgroundImage: "url('/image/extract.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
              <main className="mx-auto px-4 md:pt-6 pb-6 flex flex-wrap justify-center">
                {/* Map through and render content */}
                {categories[Object.keys(categories)[0]].map((ele, index) => {
                  return (
                    <div
                      key={index}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      className="relative text-center rounded-lg m-4 opacity-90 bg-white shadow-md w-64"
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
                            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)",
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
                })}
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
export default Booster;
