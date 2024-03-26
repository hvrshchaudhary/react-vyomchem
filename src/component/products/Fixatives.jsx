import React from "react";

const Fixatives = () => {
  const b = [
    {
        Fixatives: [
          {
            product: "Polyvinyl Pyrolydinone (PVP K30)",
          },
          {
            product: "Polyvinyl Pyrolydinone (PVP K90)",
          },
          {
            product: "PVP VA 64",
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
                  <div className="text-center md:pb-4 pb-2">
                    <span
                      id={Object.keys(category)[0]}
                      className="pl-1 border-b-2 font-semibold border-black md:text-4xl"
                    >
                      {Object.keys(category)[0]}
                    </span>
                  </div>
                  {category[Object.keys(category)[0]].map((ele, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-green-400 hover:text-black hover:bg-green-200 mt-2"
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

export default Fixatives;
