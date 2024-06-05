import React from "react";
import { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const Protein = () => {
  const b = [
    {
        "PROTEINS AND AMINO ACIDS": [
          {
            product: "Hydrolyzed Barley protein",
            comment :  "It is made from golden barley. Anti- Irritating, Moisturizing and strengthen skin's natural protection barrier."
          },
          {
            product: "Hydrolyzed Collagen",
            comment :  "It slow down skin ageing and provide suppleness to hair. Act as emollient, film-former, and skin-conditioning agent"
          },
          {
            product: "Hydrolyzed Keratin",
            comment :  "It is derived from wool/feather, repair, moisturizes and conditions both skin and hair "
          },
          {
            product: "Hydrolyzed Linseed seed",
            comment :  "It promote the alignment of hair fibers, reducing frizz,derived from Flaxseed"
          },
          {
            product: "Hydrolyzed Milk protein",
            comment :  "It act as skin and hair conditioning agent"
          },
          {
            product: "Hydrolyzed Oat protein",
            comment :  "Derived from oat, acts as a moisturizing, elasticizing, anti-wrinkle and vitalizing agent "
          },
          {
            product: "Hydrolyzed Quinoa",
            comment :  "It helps repair damage, enhance shine and protect color,derived from Quinoa seed"
          },
          {
            product: "Hydrolyzed Rice protein",
            comment :  "It has excellent moisturizing properties, helps to improve hair strength and elasticity, and promotes skin hydration."
          },
          {
            product: "Hydrolyzed Soy protein",
            comment :  "It promotes skin tissue metabolism and repair functions. Acts as conditioning, hair softening and moisture retentive agent"
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
                    backgroundImage: "url('/image/more.jpg')",
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

export default Protein;
