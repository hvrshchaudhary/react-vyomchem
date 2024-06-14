import React from "react";
import { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const AntiOxidant = () => {
  const b = [
    {
        "Anti-Oxidants/ Parabens Free Preservatives": [
          {
            product: "Benzoic acid",
            comment : "It is a naturally occurring and synthetically produced compound. It is used as product stabilizer, fragrance additive, and emollient."

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
                    backgroundImage: "url('/category-images/antioxidants.jpg')",
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

export default AntiOxidant;
