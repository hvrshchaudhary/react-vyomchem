import React from "react";
import { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const AntiOxidant = () => {
  const b = [
    {
        "Anti-Oxidants/ Parabens Free Preservatives": [
          {
            product: "Benzoic acid",
            comment : ""

          },
          {
            product: "Benzyl Alcohol",
            comment : "Act as a preservative in skin care,ability to stabilize formulations and help hair care products last longer,as a fragrance ingredient"
          },
          {
            product: "Butylated Hydroxy Anisole (BHA)",
            comment : "It act as exfoliants,synthetic antioxidant, in personal care products to prevent the oxidation of fats and oils"
          },
          {
            product: "Butyl Hydroxy Toluene (BHT)",
            comment : " A lab-made chemical used as a preservative and antioxidant found in skincare products ."
          },
          {
            product: "Calcium Gluconate",
            comment : "It is a Humectant,Oral care and Skin conditioningagent. A good skin-soothing and restorative agent when applied topically"
          },
          {
            product: "Caprylhydroxamic acid",
            comment : "It is a natural antimicrobial agent that inhibit mold and microbial growth in skin care products."
          },
          {
            product: "Chlorophenesin",
            comment : "It is made by the condensation of glycidol and p-chlorophenol in the presence of a catalyst.It is suitable for microbiological stabilization of cosmetics, including emulsions, masks, gels."
          },
          {
            product: "Ethylhexylglycerin",
            comment : "It acts as a humectant and hydrates skin and hair deeply, used as an alternative to parabens "
          },
          {
            product: "Imidazolidinyl Urea",
            comment : "An antimicrobial preservative used to preserve many cosmetics and personal care products,"
          },
          {
            product: "Phenoxyethanol",
            comment : "Phenoxyethanol is used as a preservative in cosmetic products and also as a stabilizer in perfumes and soap. It is a sticky and oily substance"
          },
          {
            product: "Tertiary Butyl Hydroquinone (TBHQ)",
            comment : "It can be used  as an antioxidant, it slows  the deterioration of cosmetics and personal care products."
          },
          {
            product: "Vitamin E Acetate",
            comment :"It prevent premature aging of the skin induced by UV irradiation, proven antioxidant effects, enhances moisturization and strengthens the skin"
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
                              className="w-11/12 px-3 py-2  bg-orange-300 hover:bg-orange-200 md:text-lg text-sm text-black md:font-semibold rounded-md "
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

export default AntiOxidant;
