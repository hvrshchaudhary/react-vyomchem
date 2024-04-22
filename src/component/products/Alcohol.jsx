import { BsArrowReturnRight } from "react-icons/bs";
import React from "react";
import { useState } from "react";

const Alcohol = () => {
  const b = [
    {
      "Alcohol Sulphate": [
        {
          img: "/image/more.jpg",
          product: "Ammonium Lauryl Sulphate",
          comment:
            "A sulfate ester, made from coconut or palm kernel oil. Widely used surfactant in shampoos or bath products",
        },
        {
          img: "", // Add image URL here if available
          product: "Disodium Laureth Sulfosuccinate",
          comment:
            "It is a mild, anionic, and non-irritating surfactant with great foaming properties. Primarily used in cleansing products, including bubble baths, bath soaps, and detergents",
        },
        {
          img: "", // Add image URL here if available
          product: "Sodium Lauryl Ether Sulphate",
          comment:
            "It is an anionic surfactant, primarily used as an active detergent in shampoo ",
        },
        {
          img: "", // Add image URL here if available
          product: "Sodium Lauryl Sulphate",
          comment: "It is found in both beauty and cleaning products",
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
          <div key={_index} className="w-full  md:flex ">
            <div className=" flex-col container md:w-full md:flex ">
              <div className="flex justify-center">
                <span className="md:text-6xl text-xl mt-6 md:mt-0 font-bold text-green-800">
                  {Object.keys(categories)[0]}
                </span>
              </div>
              <div className="md:w-full">
                <main className=" mx-auto px-4 md:pt-6 pb-6 flex justify-center">
                  <div className="flex justify-center flex-wrap ">
                    {categories[Object.keys(categories)[0]].map(
                      (ele, index) => {
                        return (
                          <div
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            className="relative  bg-white rounded-lg m-4 shadow-md w-64"
                          >
                            <img
                              src="/image/more.jpg"
                              alt="Product"
                              className="w-64 h-48 object-cover rounded-t-lg"
                            />
                            <div className="">
                              <h2 className="text-xl h-[66px] p-2 font-semibold text-center  text-green-800 ">
                                {ele.product}
                              </h2>
                              {selectedIndex === index && (
                                // style={{ backgroundImage: `url(${ele.img})`, filter: "brightness(50%) " , backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}

                                <>
                                  {/* {isOpen && index === selectedIndex && (
                                   <div key={index} onClick={()=> toggleComment(index)} className=" md:hidden flex">
                                   <span className="text-black bg-white  absolute   top-0  bottom-0 left-0   overflow-scroll hover:scale-110 transition-all ">{
                                 categories[Object.keys(categories)[0]][
                                   selectedIndex
                                 ].comment
                               }</span>
                                 </div>
                                )} */}

                                  {/* <div className=""> */}
                                  {/* <div className="absolute bg-green-200 top-0 bottom-16 left-0 right-0 hover:scale-110 transition-all ">
                                    <div className="w-full h-full ">
                                      <span className="p-1 absolute top-5 text-xs font-mono flex items-center text-center text-black">
                                        {ele.comment}
                                      </span>
                                    </div>
                                  </div> */}

                                  {/* </div> */}
                                  
                                <div
                                  className="absolute z-10 bg-white  top-0 bottom-0 left-0 right-0 hover:scale-110  transition-all "
                                  style={{
                                    boxShadow:
                                      "5px 5px 10px rgba(0.5, 0, 0, 0.1)",
                                  }}
                                >
                                  <div className="flex w-full h-2/6 justify-center text-center items-center">
                                    <span className="text-lg p-1 font-semibold text-wrap">
                                      {ele.product}
                                    </span>
                                  </div>
                                  <div className="w-full h-1/2 flex  i  ">
                                    <span className="p-1  absolute item-center text-center  text-sm font-mono flex  m-2 text-black">
                                      {ele.comment}
                                    </span>
                                  </div>
                                </div>
                              
                                </>
                              )}
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </main>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Alcohol;

// {b.map((category, _index) => {
//   return (
//     <div
//       key={_index}
//       className="pl-[25px] pr-[25px] md:mt-[24px] mt-10 m-5 pb-5 pt-2 border-2 rounded-md border-black   bg-gray-50 "
//       data-aos="fade-up-left"
//       style={{
//         // boxShadow:"10px 10px lightblue"
//         boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <div className="text-center md:pt-3 md:pb-4 pb-2 ">
//         <span
//           id={Object.keys(category)[0]}
//           className="pl-1  font-semibold text-green-800 font-fira-neue  md:text-4xl"
//         >
//           {Object.keys(category)[0]}
//         </span>
//       </div>
//       {category[Object.keys(category)[0]].map((ele, index) => {
//         return (
//           <>
//             <div
//               key={index}
//               onClick={() => toggleComment(index)}
//               className={` border cursor-pointer rounded-sm border-black mt-2 ${
//                 index % 2 === 0
//                   ? "bg-green-300 hover:bg-green-200 text-black"
//                   : "bg-yellow-200 hover:bg-yellow-100"
//               }`}
//             >
//               <li
//                 className="flex justify-between products-center pl-3  md:py-2 py-1"

//               >
//                 <span className="md:text-lg text-sm md:font-semibold  hover:font-bold">
//                   {ele.product}
//                 </span>
//               </li>
//             </div>
//             {isOpen && index === selectedIndex && (
//               <div className=" h-max w-full flex mt-3 justify-end text-lg font-normal">
//                 <BsArrowReturnRight className=" mt-1 text-3xl md:text-4xl mr-1 ml-2" />
//                 <span
//                 data-aos="fade-left"
//                   className="w-11/12 px-3 py-2  bg-white border hover:bg-gray-100 border-black md:text-lg text-sm text-black md:font-semibold rounded-md "
//                 >
//                   {
//                     category[Object.keys(category)[0]][
//                       selectedIndex
//                     ].comment
//                   }
//                 </span>
//               </div>
//             )}
//           </>
//         );
//       })}
//     </div>
//   );
// })}
