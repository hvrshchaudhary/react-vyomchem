import { comment } from "postcss";
import { space } from "postcss/lib/list";
import React, { useState } from "react";

const Alcohol = () => {
  const b = [
    {
        "Alcohol Sulphate": [
          {
            product: "Ammonium Lauryl Sulphate",
            comment : "A sulfate ester,made from coconut or palm kernel oil.Widely used surfactant in shampoos or bath products"
          },
          {
            product: "Disodium Laureth Sulfosuccinate",
            comment : "It is a mild, anionic, and non-irritating surfactant with great foaming properties.Primarily used in cleansing products, including bubble baths, bath soaps and detergents"
          },
          {
            product: "Sodium Lauryl Ether Sulphate",
            comment : "It is an anionic surfactant,primarily used as active detergent in shampoo"         },
          {
            product: "Sodium Lauryl Sulphate",
            comment : "It is found in both beauty and cleaning products"
          },
        ],
      },
  ];

  const [isOpen , setIsOpen] = useState(false);
  const [selectedIndex, setselectedIndex] = useState(null);
  const toggleComment =(index)=>{
    setIsOpen(!isOpen)
    setselectedIndex(index);
  }

  return (
    <>
      <div className="w-full md:flex  justify-center">
        <div className="md:w-full md:flex  ">
          <div className=" md:w-full ">
          {b.map((category, _index) => {
              return (
                <div key={_index} className="pl-[25px] pr-[25px] md:mt-[24px] mt-10 m-5 pb-5 pt-2 border-2 rounded-md border-black   bg-gray-50 " data-aos="fade-up-left" style={{
                  // boxShadow:"10px 10px lightblue"
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",


                }} >
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
                        className={` border rounded-sm border-black mt-2 ${
                          index % 2 === 0 ? 'bg-green-300 hover:bg-green-200 text-black' : 'bg-yellow-200 hover:bg-yellow-100'
                        }`}
                      >
                        <li className="flex justify-between products-center pl-3 md:py-2 py-1" onMouseEnter={()=>toggleComment(index)} onMouseLeave={()=>toggleComment(index)}>
                          <span className="md:text-lg text-sm md:font-semibold hover:font-bold" >
                            {ele.product} 
                          </span>
                        </li>
                      </div>
                        {isOpen && index === selectedIndex &&(
                          <div className=" h-max w-full flex mt-3 justify-end text-lg font-normal">
                            <span className="w-11/12 px-3 py-3 bg-red-300">{category[Object.keys(category)[0]][selectedIndex].comment}</span>
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

export default Alcohol;
