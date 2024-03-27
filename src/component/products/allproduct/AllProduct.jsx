import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import Extract from "../Extract";
import Alcohol from "../Alcohol";
import Milliglobules from "../Milliglobules";
import Miscellaneous from "../Miscellaneous";
import WaxButter from "../WaxButter";
import Protein from "../Protein";
import Booster from "../Booster";
import AntiOxidant from "../AntiOxidant";
import Fixatives from "../Fixatives";
import Parabens from "../Parabens";
import PearlisingAgent from "../PearlisingAgents";
import Sunscreen from "../Sunscreen";
import ConditioningAgent from "../ConditioningAgent";
import Moisturizers from "../Moisturizers";

const productComponents = [
  { slug: "extract-liquid", name: "Extract (Liquid)", component: <Extract /> },
  { name: "Alcohol Sulphate", component: <Alcohol /> },
  { name: "Milliglobules", component: <Milliglobules /> },
  { name: "Active & Miscellaneous", component: <Miscellaneous /> },
  { name: "Wax & Butter", component: <WaxButter /> },
  { name: "Protein", component: <Protein /> },
  { name: "Booster", component: <Booster /> },
  {
    name: "Anti-Oxidants/ Parabens Free Preservatives",
    component: <AntiOxidant />,
  },
  { name: "Fixatives", component: <Fixatives /> },
  { name: "Paraben", component: <Parabens /> },
  { name: "Pearlising Agents", component: <PearlisingAgent /> },
  { name: "Sunscreens", component: <Sunscreen /> },
  { name: "Conditioning Agents", component: <ConditioningAgent /> },
  { name: "Moisturizers", component: <Moisturizers /> },
];

const AllProduct = () => {
  const location = useLocation();
  const [selectedProduct, setSelectedProduct] = useState("Extract (Liquid)");
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
      <div className="md:hidden absolute  ">
        {!isSidebarOpen && (
          <div className="flex bg-white mt-[-20px] ml-2">
            <FiMenu
              className="mt-1 mr-5"
              onClick={() => setIsSidebarOpen(true)}
              size={20}
            />

            <span className="text-xl font-serif"> Product categories</span>
          </div>
        )}
        <div className={`md:hidden mt-[-20px] h-screen ${isSidebarOpen ? "block" : "hidden"}`}>
          <div className="flex justify-between items-center p-2 bg-gray-200 w-3/4 ">
            <h1 className="text-lg font-semibold">Categories</h1>
            <FiX onClick={() => setIsSidebarOpen(false)} size={20} />
          </div>
          <ul className="px-4 py-2 w-3/4 bg-white">
            {productComponents.map((product) => (
              <li key={product.name}>
                <NavLink
                  to={`/cosmeceuticals/#${product.name}`}
                  className="block px-4 py-2 text-sm m-4 font-semibold hover:text-white border rounded-sm border-black hover:bg-black "
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
        className=" text-black w-1/4  hidden md:block flex-none"
      >
        <div
          className="rounded-lg  border-black border-2 p-4 m-4 mt-6 bg-white"
          style={{
            boxShadow: "8px 8px lightblue",
          }}
        >
          <div className=" text-center">
            <h1 className="md:text-4xl text-black font-fira-neue font-semibold">
              Categories
            </h1>
          </div>
          <ul className="md:py-4  ">
            {productComponents.map((product) => (
              <li key={product.name}>
                <NavLink
                  to={`/cosmeceuticals/#${product.name}`}
                  className="block px-4 py-2 text-sm m-4 font-semibold hover:text-white border rounded-sm border-black hover:bg-black "
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
        <h1 className=" mb-4">
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
