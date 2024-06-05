import React from "react";
import { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const Miscellaneous = () => {
  const b = [
    {
      "ACTIVES & SPECIALITY CHEMICAL": [
        {
          product: "Alpha arbutin",
          comment:
            "It is naturally found in the bearberry plant and an efficient skin-lightening agent, reducing pigmentation and spots.",
        },
        {
          product: "Aminexil ",
          comment:
            "It derives from minoxidil, acting directly at the root of the hair.Aminexil is used for the treatment of hair loss and promotes hair growth",
        },
        {
          product: "Azelic acid",
          comment:
            "It has antimicrobial and anti-inflammatory properties, which make it effective in the treatment of skin conditions like acne and rosacea",
        },
        {
          product: "Ascorbyl Glucoside ",
          comment:
            "Ascorbyl Glucoside is a highly effective antioxidant, improves collagen synthesis and reduces wrinkles and have skin-lightening effect. ",
        },
        {
          product: "Ascorbyl palmitate",
          comment:
            "Ascorbyl palmitate is a highly bioavailable, fat-soluble form of vitamin C.Widely used as add-on ingredient in skin-lightening products ",
        },
        {
          product: "Beta arbutin",
          comment:
            "It is a great cosmetic ingredient for the skin lightening and whitening. In addition, it is a remarkable antioxidant.",
        },
        {
          product: "Ethtyl ascoric acid",
          comment:
            "EA has been used in cosmetic products as a stable alternative to AA for a number of years. Vitamin C has three proven magic abilities: antioxidant, collagen booster, and skin brightener.",
        },
        {
          product: "Glycolic acid 99%",
          comment:
            "Glycolic acid works as an exfoliant and a buffering agent in cosmetics and personal care products.It is a member of the alpha-hydroxy acid (AHA) family.",
        },
        {
          product: "Hyaluronic acid",
          comment:
            "Hyaluronic acid can help increase the moisture content in your skin,HA has unique capacity of retaining water.",
        },
        {
          product: "Keratin hydrolysate protein",
          comment:
            "Keratin is a fibrous and insoluble protein with excellent mechanical properties. It moisturizes and conditions both skin and hair ",
        },
        {
          product: "Kojic acid",
          comment:
            "Kojic acid is a chemical produced from different types of fungi. It is largely used as a skin lightening or depigmenting agent in cosmetic products",
        },
        {
          product: "Kojic acid dipalmitate",
          comment:
            "It is an ester of kojic acid offering superior stability.It may be used to treat skin conditions  dark spots and hyper-pigmentation",
        },
        {
          product: "L-Glutathione reduced",
          comment:
            "Glutathione is a substance made from the amino acids. It plays an important role in preventing oxidative damage to the skin",
        },
        {
          product: "Magnesium Ascorbyl Phosphate (MAP)",
          comment:
            "It is a stable, water soluble derivative of Vitamin C.It is also used for UV protection and repair, collagen production, skin lightening and brightening",
        },
        {
          product: "Minoxidil",
          comment:
            "Topical minoxidil is used for the  treatment of hair loss and hair loss-related conditions,",
        },
        {
          product: "Minoxidil sulphate",
          comment:
            "It is a sulfate ester of minoxidil,use for hair related issues.",
        },
        {
          product: "Potassium hydroxide pellets",
          comment:
            "It's a very alkaline stuff that helps to set the pH of the cosmetic formula to be just right.It is used in making liquid soaps ,creams and other personal care products",
        },
        {
          product: "Silk protein",
          comment:
            "Silk proteins are beneficial for skin, hair and nails having a vast application in cosmetics",
        },
        {
          product: "Sodium  Ascorbyl phosphate",
          comment:
            "It functions as an antioxidant on and within skin.It brightening a dull skin tone, smoothing wrinkles, visibly firming skin.",
        },
        {
          product: "Sodium Hyaluronate",
          comment:
            "Sodium hyaluronate is a form of hyaluronic acid.As a humectant, it pulls in water from the air and helps to retain moisture to keep skin hydrated",
        },
        {
          product: "Wheat hyrdolysate protein",
          comment:
            "It is generally derived from wheat germ,It contains glutamine which is known to strengthen hair.",
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
                    backgroundImage: "url('/image/Bambooextract.jpg')",
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

export default Miscellaneous;
