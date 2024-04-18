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

export default ConditioningAgent;
