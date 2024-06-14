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
        {
          product: "For More Products Contact Us",
          // comment : "Millicapsules are synthesized by interfacial polymerization,Used to make  herbal facial cleanser. It mainly contains natural ingredients"
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
                    backgroundImage: "url('/image/WAX.jpg')",
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
export default WaxButter;
