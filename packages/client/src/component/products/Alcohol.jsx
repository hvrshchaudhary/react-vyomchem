import { BsArrowReturnRight } from "react-icons/bs";
import React from "react";
import { useState } from "react";

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
      {
        product: "For More Products Contact Us",
        // comment : "Millicapsules are synthesized by interfacial polymerization,Used to make  herbal facial cleanser. It mainly contains natural ingredients"
      },
    ],
  },
];
const Alcohol = () => {
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
              <div className="flex justify-center">
                {/* <span className="md:text-4xl text-sm  md:mt-0 font-bold text-black">
                  {Object.keys(categories)[0]}
                </span> */}
              </div>
              <div className="flex w-full justify-center">
                <div className="flex justify-center xl:w-full w-4/5 ">
                  <div
                    className="md:w-full  rounded-md  w-full   mt-5"
                    style={{
                      backgroundImage: "url('/image/algae-extract-3.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <main className="mx-auto px-4 md:pt-6 pb-6 flex flex-wrap justify-center">
                      {/* Map through and render content */}
                      {categories[Object.keys(categories)[0]].map(
                        (ele, index) => {
                          return (
                            <div
                              key={index}
                              onMouseEnter={() => handleMouseEnter(index)}
                              onMouseLeave={handleMouseLeave}
                              className="relative text-center rounded-lg m-4 opacity-75 hover:opacity-90 bg-white shadow-md w-64"
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
                                    boxShadow:
                                      "5px 5px 10px rgba(0, 0, 0, 0.1)",
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
                        }
                      )}
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
