import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Antibacterial = () => {
  const b = [
    {
      "ANTI BACTERIAL": [
        {
          product: "Bakuchiol (natural retinol)",
          comment: "Bakuchiol is a natural alternative to a retinoid, helps prevent fine lines and wrinkles, "
        },
        {
          product: "Benzalkonium Chloride",
          comment: "It is used as disinfectants, preservatives, and sanitizers."
        },
        {
          product: "Benzethonium Chloride",
          comment: "It is used in the formulation of bath, skin, personal cleanliness, shaving, and suntan products, Safe for use in leave on cosmetic products"
        },
        {
          product: "Cetyl pyridinium chloride monohydrate",
          comment: "It is used as an antibacterial agent in cosmetics, toiletries. It is an antiseptic that kills bacteria and other microorganisms"
        },
        {
          product: "Chloroxylenol",
          comment: "It is an antiseptic and disinfectant agent, act as a preservative "
        },
        {
          product: "Triclosan",
          comment: "Triclosan is an antimicrobial agent found in a wide variety of antibacterial soaps, detergents, and deodorants"
        },
        {
          product: "Zinc citrate trihydrate",
          comment: "It is an antibacterial ingredient that inhibits the growth of odor-causing bacteria."
        },
        {
          product: "Zinc lactate dihydrate",
          comment: "It has skin-soothing and anti-inflammatory properties, functioning as an emollient, skin conditioning agent, and exfoliant"
        },
      ],
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

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
          <div key={_index} className="container mx-auto w-4/5 my-8">
            <h2 className="text-3xl font-bold text-center mb-4">{Object.keys(categories)[0]}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories[Object.keys(categories)[0]].map((ele, index) => {
                return (
                  <div
                    key={index}
                    className="blog-card relative overflow-hidden bg-white rounded-lg shadow-md"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      src="/image/antibacterial.jpg"
                      alt="Product"
                      className="w-full h-48 object-cover"
                    />
                    <div className="title-content p-4">
                      <h3 className="font-semibold text-lg">{ele.product}</h3>
                      {/* <p className="intro text-sm">{ele.comment}</p> */}
                    </div>
                    {selectedIndex === index && (
                      <div className="card-info absolute top-0 left-0 w-full h-full  bg-gray-800 bg-opacity-75 flex justify-center items-center text-white">
                        <span className="text-center p-1">{ele.comment}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Antibacterial;
