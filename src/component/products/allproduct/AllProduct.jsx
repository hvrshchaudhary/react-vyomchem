import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import Alcohol from "../Alcohol";
import Milliglobules from "../Milliglobules";
import Miscellaneous from "../Miscellaneous";
import WaxButter from "../WaxButter";
import Protein from "../Protein";
import Booster from "../Booster";
import AntiOxidant from "../AntiOxidant";
import Parabens from "../Parabens";
import PearlisingAgent from "../PearlisingAgents";
import Sunscreen from "../Sunscreen";
import ConditioningAgent from "../ConditioningAgent";
import Moisturizers from "../Moisturizers";
import Skincare from "../Skincare";
import Bioferments from "../Bioferments";
import Haircare from "../Haircare";
import Antibacterial from "../Antibacterial";
import Oils from "../Oils";

const productComponents = [
  {name: "Alcohol Sulphate", component: <Alcohol /> },
  { name: "Active & Miscellaneous", component: <Miscellaneous /> },
  {
    name: "Anti-Oxidants/ Parabens Free Preservatives",
    component: <AntiOxidant />,
  },
  {name : "Antibacterial" , component: <Antibacterial/>},
  { name: "Booster", component: <Booster /> },
  {name : "Bio-Ferments", component : <Bioferments/>},
  { name: "Conditioning Agents", component: <ConditioningAgent /> },
  {name : "Hair-Care", component: <Haircare/>},
  { name: "Milliglobules", component: <Milliglobules /> },
  { name: "Moisturizers", component: <Moisturizers /> },
  {name:"Oils" , component : <Oils/>},
  { name: "Protein", component: <Protein /> },
  { name: "Paraben", component: <Parabens /> },
  { name: "Pearlising Agents", component: <PearlisingAgent /> },
  { name: "Sunscreens", component: <Sunscreen /> },
  {name: "Skin-Care", component: <Skincare/>},
  { name: "Wax & Butter", component: <WaxButter /> },
];

const AllProduct = () => {
  const location = useLocation();
  const [selectedProduct, setSelectedProduct] = useState("Alcohol Sulphate");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setSelectedProduct(decodeURIComponent(location.hash).replace("#", ""));
    return () => {};
  }, [location.hash]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-row pt-5  ">
      {/* Sidebar for mobile view */}
      <div className="xl:hidden  absolute   ">
        {!isSidebarOpen && (
          <div className="flex   mt-[-20px] ml-2">
            <FiMenu
              className="mt-[16px] ml-3 mr-2"
              onClick={() => setIsSidebarOpen(true)}
              size={20}
            />

            <div onClick={()=>setIsSidebarOpen(true)} className="text-lg text-green-900 mt-3 font-serif"> Product categories</div>
          </div>
        )}
        <div className={`xl:hidden mt-[-20px]  ${isSidebarOpen ? "block" : "hidden"}`}>
          <div className="flex justify-between  items-center p-2 bg-gray-200  ">
            <h1 className="text-xl text-green-800  ml-6 font-semibold">Categories</h1>
            <FiX onClick={() => setIsSidebarOpen(false)} size={20} />
          </div>
          <ul className="px-4 py-2 h-[2100px] bg-white">
            {productComponents.map((product, index) => (
              <li key={product.name}>
                <NavLink
                  to={`/cosmeceuticals/#${product.name}`}
                  className={`block px-4 py-2 text-sm m-4 font-semibold hover:text-white border rounded-sm border-black ${
                    index % 2 === 0 ? 'bg-green-300 hover:bg-green-200 text-black' : 'bg-yellow-200 hover:bg-yellow-100'
                  } "`}
                  target=""
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {product.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
      {/* Sidebar for desktop view */}
      <div
        data-aos="fade-up"
        className=" text-black w-1/4  xl:block md:hidden hidden flex-none"
      >
        <div
          className="rounded-lg  border-black border-2 p-4 m-4 mt-6 bg-white"
          style={{
            boxShadow: "8px 8px lightblue",
          }}
        >
          <div className=" text-center">
            <h1 className="md:text-4xl text-green-800 font-fira-neue font-semibold">
              Categories
            </h1>
          </div>
          <ul className="md:py-4  ">
            {productComponents.map((product, index) => (
              <li key={product.name}>
                <NavLink
                  to={`/cosmeceuticals/#${product.name}`}
                  className={`block px-4 py-2 text-sm m-4 font-semibold  border rounded-sm border-black ${
                    index % 2 === 0 ? 'bg-green-300 hover:bg-green-200 text-black' : 'bg-yellow-200 hover:bg-yellow-100'
                  } `}
                  target=""
                >
                  {product.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1">
        <h1 className=" mb-4 " >
          {
            productComponents.find(
              (product) => product.name === selectedProduct
            )?.component
          }
        </h1>
      </div>
    </div>
  );
};

export default AllProduct;
