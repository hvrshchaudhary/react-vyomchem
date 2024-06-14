import React from "react";
import { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";


const Haircare = () => {
  const b = [
    {
        "HAIR CARE": [
          {
            product: "Ammonium thioglycolate",
            comment : "It is commonly known as perm salt.It is a reducing agent that helps to break down the hair's disulfide bonds."

          },
          {
            product: "Capryloyl Glycine",
            comment : "It is used for  hair conditioning, used as humectant,can cleanse, produce foam and act as emulsifiers"
          },
          {
            product: "Ciclopirox",
            comment : "It is used to prevent or treat a certain scalp condition like seborrheic dermatitis of the scalp"
          },
          {
            product: "Ciclopirox olamine",
            comment : "synthetic broad-spectrum antifungal agent,for mild to moderate dandruff"
          },
          {
            product: "Piroctone olamine",
            comment :"reduces hair fall and increases the hair diameter, treat dandruff and other scalp conditions"
          },
          {
            product: "Zinc Pyrithione",
            comment : "It is used in anti-dandruff shampoos, conditioners, and other hair care products. Promote hair growth"
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
                    backgroundImage: "url('/category-images/hairCare.jpg')",
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

export default Haircare;
