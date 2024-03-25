import React from "react";

const Protein = () => {
  const b = [
    {
        Proteins: [
          {
            product: "Hydrolyzed Barley protein",
          },
          {
            product: "Hydrolyzed Collagen",
          },
          {
            product: "Hydrolyzed Keratin",
          },
          {
            product: "Hydrolyzed Linseed seed",
          },
          {
            product: "Hydrolyzed Milk protein",
          },
          {
            product: "Hydrolyzed Oat protein",
          },
          {
            product: "Hydrolyzed Quinoa",
          },
          {
            product: "Hydrolyzed Rice protein",
          },
          {
            product: "Hydrolyzed Soy protein",
          },
          {
            product: "Lecithin",
          },
          {
            product: "Potassium cocoyl hydrolyzed  collagen ",
          },
          {
            product: "TEA cocoyl hydrolyzed collagen",
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

export default Protein;
