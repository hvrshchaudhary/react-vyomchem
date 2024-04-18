import React from "react";
import { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const Miscellaneous = () => {
  const b = [
    {
        "ACTIVES & SPECIALITY CHEMICAL": [
          {
            product: "Alpha arbutin",
            comment  : "It is naturally found in the bearberry plant and an efficient skin-lightening agent, reducing pigmentation and spots."
          },
          {
            product: "Aminexil ",
            comment  : "It derives from minoxidil, acting directly at the root of the hair.Aminexil is used for the treatment of hair loss and promotes hair growth"      },
          {
            product: "Azelic acid",
            comment  : "It has antimicrobial and anti-inflammatory properties, which make it effective in the treatment of skin conditions like acne and rosacea"
          },
          {
            product: "Ascorbyl Glucoside ",
            comment  : "Ascorbyl Glucoside is a highly effective antioxidant, improves collagen synthesis and reduces wrinkles and have skin-lightening effect."
          },
          {
            product: "Ascorbyl palmitate",
            comment  : "Ascorbyl palmitate is a highly bioavailable, fat-soluble form of vitamin C.Widely used as add-on ingredient in skin-lightening products "
          },
          {
            product: "Beta arbutin",
            comment  : "It is a great cosmetic ingredient for the skin lightening and whitening. In addition, it is a remarkable antioxidant."
          },
          {
            product: "Ethtyl ascoric acid",
            comment  : "EA has been used in cosmetic products as a stable alternative to AA for a number of years. Vitamin C has three proven magic abilities: antioxidant, collagen booster, and skin brightener."
          },
          {
            product: "Glycolic acid 99%",
            comment  : "Glycolic acid works as an exfoliant and a buffering agent in cosmetics and personal care products.It is a member of the alpha-hydroxy acid (AHA) family."
          },
          {
            product: "Hyaluronic acid",
            comment  : "Hyaluronic acid can help increase the moisture content in your skin,HA has unique capacity of retaining water."
          },
          {
            product: "Keratin hydrolysate protein",
            comment  : "Keratin is a fibrous and insoluble protein with excellent mechanical properties. It moisturizes and conditions both skin and hair "
          },
          {
            product: "Kojic acid",
            comment  : "Kojic acid is a chemical produced from different types of fungi. It is largely used as a skin lightening or depigmenting agent in cosmetic products"
          },
          {
            product: "Kojic acid dipalmitate",
            comment  : "It is an ester of kojic acid offering superior stability.It may be used to treat skin conditions  dark spots and hyper-pigmentation"
          },
          {
            product: "L-Glutathione reduced",
            comment  : "Glutathione is a substance made from the amino acids. It plays an important role in preventing oxidative damage to the skin"
          },
          {
            product: "Magnesium Ascorbyl Phosphate (MAP)",
            comment  : "It is a stable, water soluble derivative of Vitamin C.It is also used for UV protection and repair, collagen production, skin lightening and brightening"
          },
          {
            product: "Minoxidil",
            comment  : "Topical minoxidil is used for the  treatment of hair loss and hair loss-related conditions,"
          },
          {
            product: "Minoxidil sulphate",
            comment  : "It is a sulfate ester of minoxidil,use for hair related issues."
          },
          {
            product: "Potassium hydroxide pellets",
            comment  : "It's a very alkaline stuff that helps to set the pH of the cosmetic formula to be just right.It is used in making liquid soaps ,creams and other personal care products"
          },
          {
            product: "Silk protein",
            comment  : "Silk proteins are beneficial for skin, hair and nails having a vast application in cosmetics"
          },
          {
            product: "Sodium  Ascorbyl phosphate",
            comment  : "It functions as an antioxidant on and within skin.It brightening a dull skin tone, smoothing wrinkles, visibly firming skin."
          },
          {
            product: "Sodium Hyaluronate",
            comment  : "Sodium hyaluronate is a form of hyaluronic acid.As a humectant, it pulls in water from the air and helps to retain moisture to keep skin hydrated"
          },
          {
            product: "Wheat hyrdolysate protein",
            comment  : "It is generally derived from wheat germ,It contains glutamine which is known to strengthen hair."
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

export default Miscellaneous;
