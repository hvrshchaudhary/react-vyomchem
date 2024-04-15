import React from "react";

const WaxButter = () => {
  const b = [
    {
      "Wax & Butter": [
        {
          product: "Aloe Vera butter",
        },
        {
          product: "Apricot butter",
        },
        {
          product: "Argan Oil",
        },
        {
          product: "Arnica butter",
        },
        {
          product: "Avocado butter",
        },
        {
          product: "Beeswax Natural Pure",
        },
        {
          product: "Beeswax White ",
        },
        {
          product: "Beeswax Yellow",
        },
        {
          product: "Candelilla Wax",
        },
        {
          product: "Carnauba Wax",
        },
        {
          product: "Ceresin Wax White",
        },
        {
          product: "Cocoa butter",
        },
        {
          product: "Emulsifying Wax Anionic ",
        },
        {
          product: "Emulsifying Wax Non ionic ",
        },
        {
          product: "Grapeseed butter",
        },
        {
          product: "Jojoba butter",
        },
        {
          product: "Kokum butter",
        },
        {
          product: "Mango butter ",
        },
        {
          product: "Microcrystalline Wax White",
        },
        {
          product: "Moringa butter",
        },
        {
          product: "Murumuru butter",
        },
        {
          product: "Olive butter",
        },
        {
          product: "Paraffin Wax",
        },
        {
          product: "Petroleum Jelly White/Yellow",
        },
        {
          product: "Pumpkin seed butter",
        },
        {
          product: "Rice Bran Wax",
        },
        {
          product: "Shea butter",
        },
        {
          product: "Sunflower Wax",
        },
        {
          product: "Sweet almond butter",
        },
        {
          product: "& many more….....",
        },
      ],
    },
  ];

  return (
    <>
      <div className="w-full md:flex  justify-center">
        <div className="md:w-full md:flex  ">
          <div className=" md:w-full ">
          {b.map((category, index) => {
              return (
                <div key={index} className="pl-[25px] pr-[25px] md:mt-[24px] mt-10 m-5 pb-5 pt-2 border-2 rounded-md border-black   bg-gray-50 " data-aos="fade-up-left" style={{
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
                      <div
                        key={index}
                        className={` border rounded-sm border-black mt-2 ${
                          index % 2 === 0 ? 'bg-green-300 hover:bg-green-200 text-black' : 'bg-yellow-200 hover:bg-yellow-100'
                        }`}
                      >
                        <li className="flex justify-between products-center pl-3 md:py-2 py-1">
                          <span className="md:text-lg text-sm md:font-semibold hover:font-bold">
                            {ele.product}
                          </span>
                        </li>
                      </div>
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

export default WaxButter;
