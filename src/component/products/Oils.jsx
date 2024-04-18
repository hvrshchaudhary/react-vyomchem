import React from "react";
import { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const Oils = () => {
  const b = [
    {
        "OILS": [
          {
            product: "Anise oil",
            comment : "Derived from Anise seed, have antioxidant properties, a sweet and herbal fragrance,"

          },
          {
            product: "Argan Oil",
            comment : "It protect, soothe and treat a whole host of skin conditions, antibacterial properties"
          },
          {
            product: "Black cumin seed oil (kalonji)",
            comment : "It is non-comedogenic in nature, it strengthen and treat skin and hair"
          },
          {
            product: "Borage Oil",
            comment : "It decreases inflammation, hydrate, and restore dry skin, reduce eczema, rich in fatty acids and vitamin E"
          },
          {
            product: "Carrot Seed oil",
            comment : "It has high  antioxidants and protect the skin from free radical damage"
          },
          {
            product: "Coconut oil",
            comment : "It is a vegetable oil rich in nutritious lipids,used in cosmetics for its moisturising and nourishing properties"
          },
          {
            product: "Dill seed oil",
            comment : "A naturally occurring insecticides, fight free radicals and smoothening skin wrinkles."
          },
          {
            product: "Eucalyptus oil",
            comment :"It can help clean the skin and hair and reduce excess oiliness. Renowned for its natural antiseptic and anti-inflammatory properties"
          },
          {
            product: "Evening Primrose Oil",
            comment : "It Helps Maintain Skin Hydration, prevent acne, fight inflammation,"
          },
          {
            product: "Garlic oil",
            comment :"Garlic oil is an essential oil and has antibacterial and antifungal properties, it contains sulfur, vitamin E, and vitamin C "
          },
          {
            product: "Hempseed oil",
            comment :"It soothe eczema, acne and skin after shaving,help repair sun damage,rich in omega-6 and omega-3 fatty acids"
          },
          {
            product: "Lavender oil",
            comment :"It works to kill bacteria, has antiseptic and antifungal properties"
          },
          {
            product : "Lemon oil",
            comment : "It has antibacterial, antiviral, anti-fungal, and astringent properties,smooth the skin and refine its texture"
          }, {
            product : "Linalool",
            comment : "It is used as a scent,colorless to very pale yellow liquid with a floral smell"
          }, {
            product : "Linseed / Flaxseed oil",
            comment : "It has soothing, softening and calming properties.reduce redness and even out skin tone."
          }, {
            product : "Neem oil",
            comment : "Neem oil is rich in fatty acids and other nutrients,treat acne, fungal infections, warts,nourishing skin and hair moisturiser"
          }, {
            product : "Peppermint Oil",
            comment : "It provides a cooling sensation,reduce any redness or irritation,acts as a mild conditioner for your hair"
          }, {
            product : "Spearmint oil",
            comment : "Spearmint oil minimise the appearance of wrinkles and discolouration.Act as antioxidant, antiseptic, anti-bacterial, anti-inflammator"
          }, {
            product : "Sunflower oil",
            comment : "It improvs skin hydration and provids antioxidant protection, presence of linoleic acid reinforce the skin barrier."
          }, {
            product : "Turmeric oil",
            comment : " It has antioxidants and anti-inflammatory properties, provide glow and luster to the skin"
          }, {
            product : "Turpentine oil",
            comment : "It  has anti-fungal properties,used in soap and cosmetics and also as a paint solvent"
          }, {
            product : "Wheatgerm oil",
            comment : "It keeps the skin soft, supple, and moisturized, contains vitamins A, D and E"
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

export default Oils;
