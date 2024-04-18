import React from "react";
import { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const WaxButter = () => {
  const b = [
    {
      "Wax & Butter": [
        {
          product: "Avocado butter",
          comment : "It can be used as a standalone moisturizer or as an ingredient in lotions,body butters and hair mask, has antioxidant properties,soothing and anti-irritant properties."
        },
        {
          product: "Beeswax Natural Pure",
          comment : "It softens the skin, protects from dehydration and provides antibacterial properties to products"
        },
        {
          product: "Beeswax White ",
          comment : "It is used as thickeners, emulsifiers, and as stiffening agents in cosmetics,white in colour"
        },
        {
          product: "Beeswax Yellow",
          comment : "It is used as thickeners, emulsifiers, and as stiffening agents in cosmetics,generally yellow in colour."
        },
        {
          product: "Candelilla Wax",
          comment : "It act as thickening and hardening agent, as well as a plasticizer, viscosity modifier and skin-protective barrier agent."
        },
        {
          product: "Carnauba Wax",
          comment : "It can be frequently used as a stabilizer in cosmetic formulations. It improves the stability and shelf life"
        },
        {
          product: "Ceresin Wax White",
          comment : "Greatly used as a substitute for beeswax and paraffin in protective creams. Acts as a viscosity-controlling and emulsion-stabilizing agent"
        },
        {
          product: "Cocoa butter",
          comment : "It is Rich in antioxidants and fatty acids, cocoa butter is known for hydrating skin, improving elasticity, and potentially reducing the scars."
        },
        {
          product: "Emulsifying Wax Anionic ",
          comment : "It binds oil and water to create smooth lotions, ointments, creams etc."
        },
        {
          product: "Emulsifying Wax Non ionic ",
          comment : "It is Non Ionic,Self Emulsifying Wax Prepared From High Purity Cetearyl Alcohol And Polysorbate,Suitable For The Preparation Of Ointments, Lotions, Crèmes"
        },
        {
          product: "Kokum butter",
          comment : "It is a plant butter used in most cosmetic and skin care products. It is a great  moisturizing, healing, and protective ingredient"
        },
        {
          product: "Mango butter ",
          comment : "It is rich in essential fatty acids.It effectively softens and soothes dry, rough or chapped skin."
        },
        {
          product: "Microcrystalline Wax White",
          comment : "It improves the texture and consistency and used in cosmetics and beauty products as a viscosity agent, binder and emollient"
        },
        {
          product: "Olive butter",
          comment : "It adds moisturizing attributes to creams and lotions. May be used in cosmetics,massage oils & balms, hair care"
        },
        {
          product: "Paraffin Wax",
          comment : "Paraffin works as a hydrating, cleansing, and conditioning agent in skincare and haircare products"
        },
        {
          product: "Shea butter",
          comment : "It is a fat extracted from the nut of the African shea tree. It has high concentration of vitamins and fatty acids "
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

export default WaxButter;
