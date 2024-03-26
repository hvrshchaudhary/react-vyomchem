import React from "react";
import AllProduct from "./products/allproduct/AllProduct";

const CosmeceuticalsProduct = () => {
  return (
    <div>
      <div className=" w-full flex flex-col justify-center">
        <img
          className="h-40  w-full md:h-52 object-cover"
          style={{
            filter: "brightness(50%)",
          }}
          src="/image/contactus.jpg"
          alt=""
        />
        <div
          className="md:top-36 top-28 md:left-16 left-5  text-white font-bold text-4xl absolute"
          style={{
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          Cosmeceuticals
        </div>
        <div>
          <AllProduct />
        </div>
        {/* <div className="w-full md:flex  justify-center">
          <div className="md:w-4/5 md:flex m-5 bg-blue-300">
            <div className=" md:w-1/2 ">

              {a.map((category, index) => {
                return (
                  <div className="pl-[25px] pr-[25px] mt-4 ">
                    <span
                      id={Object.keys(category)[0]}
                      className="pl-1 border-b-2  font-semibold border-black text-2xl"
                    >
                      {Object.keys(category)[0]}
                    </span>
                    {category[Object.keys(category)[0]].map((ele) => {
                      return (
                        <div className="bg-green-400 hover:text-black   hover:bg-green-200 hover:font-semibold mt-2">
                          <li className="flex justify-between  products-center pl-1 py-2 ">
                            <span>{ele.product}</span>
                          </li>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            <div className="md:w-1/2 ">
              {b.map((category, index) => {
                console.log(category);
                return (
                  <div className="pl-[25px] pr-[25px] mt-4 ">
                    <span className="pl-1 border-b-2  font-semibold border-black text-2xl"
                      id={Object.keys(category)[0]}

                    >
                      {Object.keys(category)[0]}
                    </span>
                    {category[Object.keys(category)[0]].map((ele) => {
                      return (
                        <div className="bg-green-400 hover:text-black   hover:bg-green-200 hover:font-semibold mt-2">
                          <li className="flex justify-between   products-center pl-1 py-2 ">
                            <span>{ele.product}</span>
                          </li>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CosmeceuticalsProduct;
