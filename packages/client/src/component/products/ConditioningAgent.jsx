import React from "react";
import { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const ConditioningAgent = () => {
  const b = [
    {
        "Conditioning Agents": [
          {
            product: "Guar Hydroxypropyltrimonium chloride (HPMC)",
            comment : "It is widely used cationic polymers in the personal care ,used in shampoo conditioner,liquid shop and hair care products."
          },
          {
             product : "DL panthenol",
             comment : "It is used as a moisturizer and humectant in cosmetics and personal care products.It reduces  irritation and redness,provide luster to the hair."
          },
          {
            product : "Glyceryl Tricaprylate",
            comment : "It is a multifunctional ingredient with antimicrobial efficacy and anti-acne activity, good skin conditioning agent."
          },{
            product : "hydrolyzed pea protien",
            comment : "It is derived from Pisum Sativum, a vegan source,helps improve moisture retention in hair strands,balance amino acid profile"
          },{
            product : "hydroxy Ethyl urea",
            comment : "A derivative of Urea used in hair care and hair styling products."
          },
          {
            product: "Hydrolyzed keratin",
            comment : "It is derived from wool/feather,repair, moisturizes and conditions both skin and hair "
          },
          {
            product: "Polyquaternium  37",
            comment : "A synthetic cationic polymer, smoothens the cuticles, reducing frizz, and improving hair manageability"
          },
          {
            product: "Polyquaternium  39",
            comment : "It is Ideally suited for liquid cleansing products,greatly improves the health of skin and hair. Mainly used as antistatic agent and film forming agent in cosmetics"
          },
          {
            product: "Polyquaternium 10",
            comment : "It thickens and adds conditioning properties. It is useful for hair care and skincare products in both rinse-off and leave-on."
          },
          {
            product: "Polyquaternium 11",
            comment : "It acts as a conditioner and styling auxiliary, functions as an antistatic agent, a film former and a hair fixative."
          },
          {
            product: "Polyquaternium 22",
            comment : "It is an excellent pH stability,use as a conditioning polymer in hair and skin care applications"
          },
          {
            product: "Polyquaternium 6",
            comment : "It is especially preferred for use in high pH formulations such as bleaches, dyes, relaxers "
          },
          {
            product: "Polyquaternium 7",
            comment : "It can be used as a thickener in many cosmetic formulations to increase the viscosity of the product"
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
                      backgroundImage: "url('/category-images/conditioning agents.jpg')",
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

export default ConditioningAgent;
