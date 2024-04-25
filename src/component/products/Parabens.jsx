import React from "react";
import { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const Parabens = () => {
  const b = [
    {
        Parabens: [
          {
            product: "Butyl Paraben",
            comment : "It is used as a antimicrobial preservative,found in shaving creams, moisturizers, shampoos, lubricants"
          },
          {
            product: "Ethyl Paraben",
            comment : "It is mainly used as antiseptics in cosmetics and personal care products."
          },
          {
            product: "Methyl Paraben",
            comment : "It is a synthetic preservative commonly used in cosmetics and personal care products"
          },
          {
            product: "Propyl Paraben",
            comment : "A preservative typically used in many water-based cosmetic products."
          },
          {
            product: "Sodium Butyl Paraben",
            comment : "An antimicrobial preservative used in cosmetics"
          },
          {
            product: "Sodium Ethyl Paraben",
            comment : "It is suitable to preserve both rinse- off and leave- on formulations"
          },
          {
            product: "Sodium Methyl Paraben",
            comment : "MPS is a versatile preservative with a wide range of industrial & manufacturing applications."
          },
          {
            product: "Sodium Propyl Paraben",
            comment : "PPS is a water-soluble antiseptic mainly used as a safe, high efficiency, broad-spectrum antibiotic for cosmetics"
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
            <div className="flex justify-center" >
              <span className="md:text-4xl text-sm  md:mt-0 font-bold text-black">
                {Object.keys(categories)[0]}
              </span>
            </div>
            <div className="flex w-full justify-center">
            <div className="flex justify-center xl:w-full w-4/5 ">
            <div className="md:w-full  rounded-md  w-full   mt-5"  style={{ backgroundImage: "url('/image/pearlising.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
              <main className="mx-auto px-4 md:pt-6 pb-6 flex flex-wrap justify-center">
                {/* Map through and render content */}
                {categories[Object.keys(categories)[0]].map((ele, index) => {
                  return (
                    <div
                      key={index}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      className="relative text-center rounded-lg m-4 opacity-90 bg-white shadow-md w-64"
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
                            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)",
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
                })}
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

export default Parabens;
