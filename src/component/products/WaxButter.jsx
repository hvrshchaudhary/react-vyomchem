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
              <div key={index} className="pl-[25px] pr-[25px] mt-4">
                <div className="text-center pb-4">
                  <span
                    id={Object.keys(category)[0]}
                    className="pl-1 border-b-2 font-semibold border-black text-4xl"
                  >
                    {Object.keys(category)[0]}
                  </span>
                </div>
                {category[Object.keys(category)[0]].map((ele, index) => {
                  return (
                    <div key={index} className="bg-green-400 hover:text-black hover:bg-green-200 mt-2">
                      <li className="flex justify-between products-center pl-1 py-2">
                        <span className="text-lg font-semibold hover:font-bold">{ele.product}</span>
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
