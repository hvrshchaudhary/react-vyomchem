import React from "react";

const Moisturizers = () => {
  const b = [
    {
        Moisturizers: [
          {
            product: "Sodium PCA",
          },
          {
            product: "Allantoin",
          },
          {
            product: "Betaines",
          },
          {
            product: "Hydroxyethyl Urea",
          },
          {
            product: "Sodium Hyaluronate",
          },
          {
            product: "D-Panthenol",
          },
          {
            product: "Iso Propyl Myristate (IPM)",
          },
          {
            product: "Iso Propyl palmitate (IPP)",
          },
          {
            product: "Zinc PCA",
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
                <div key={index} className="pl-[25px] pr-[25px] md:mt-[24px] mt-10 m-5 pb-5 pt-2 border rounded-md bg-gray-200">
                  <div className="text-center md:pb-4 pb-2 ">
                    <span
                      id={Object.keys(category)[0]}
                      className="pl-1 border-b-2 font-semibold font-fira-neue border-black md:text-4xl"
                    >
                      {Object.keys(category)[0]}
                    </span>
                  </div>
                  {category[Object.keys(category)[0]].map((ele, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-green-400 hover:text-black border rounded-sm border-black hover:bg-green-200 mt-2"
                      >
                        <li className="flex justify-between products-center pl-1 md:py-2 py-1">
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

export default Moisturizers;
