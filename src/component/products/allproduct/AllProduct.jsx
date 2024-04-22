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
  { name: "Alcohol-Sulphate", component: <Alcohol /> },
  { name: "Active-&-Miscellaneous", component: <Miscellaneous /> },
  {
    name: "Anti-Oxidants",
    component: <AntiOxidant />,
  },
  { name: "Antibacterial", component: <Antibacterial /> },
  { name: "Booster", component: <Booster /> },
  { name: "Bio-Ferments", component: <Bioferments /> },
  { name: "Conditioning Agents", component: <ConditioningAgent /> },
  { name: "Hair-Care", component: <Haircare /> },
  { name: "Milliglobules", component: <Milliglobules /> },
  { name: "Moisturizers", component: <Moisturizers /> },
  { name: "Oils", component: <Oils /> },
  { name: "Protein", component: <Protein /> },
  { name: "Paraben", component: <Parabens /> },
  { name: "Pearlising-Agents", component: <PearlisingAgent /> },
  { name: "Sunscreens", component: <Sunscreen /> },
  { name: "Skin-Care", component: <Skincare /> },
  { name: "Wax-&-Butter", component: <WaxButter /> },
];

const AllProduct = () => {
  const [checkedItem, setCheckedItem] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash.replace("#", "");
      const matchingComponent = productComponents.find(
        (product) => product.name === currentHash
      );
      if (matchingComponent) {
        setCheckedItem(matchingComponent.name);
      } else {
        // If no matching component found, default to the first item
        setCheckedItem(productComponents[0].name);
      }
    };

    handleHashChange(); // Call once when component mounts to set initial state

    window.addEventListener("hashchange", handleHashChange);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleCheckboxChange = (name) => {
    setCheckedItem(name);
    window.location.hash = name; // Update URL hash
  };
// const defaultLink = "/cosmeceuticals/#Alcohol-Sulphate"

  const location = useLocation();
  const [selectedProduct, setSelectedProduct] = useState("Alcohol-Sulphate");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setSelectedProduct(decodeURIComponent(location.hash).replace("#", ""));
    return () => {};
  }, [location.hash]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex md:justify-center flex-row pt-5  ">
      {/* Sidebar for mobile view */}
      <div className="md:hidden  absolute   ">
        {!isSidebarOpen && (
          <div className="flex   mt-[-20px] ml-2">
            <FiMenu
              className="mt-[16px] ml-3 mr-2"
              onClick={() => setIsSidebarOpen(true)}
              size={20}
            />

            <div
              onClick={() => setIsSidebarOpen(true)}
              className="text-lg text-green-900 mt-3 font-serif"
            >
              {" "}
              Product categories
            </div>
          </div>
        )}
        <div
          className={`xl:hidden mt-[-20px]  ${
            isSidebarOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-between  items-center p-2 bg-gray-200  ">
            <h1 className="text-xl text-green-800  ml-6 font-semibold">
              Categories
            </h1>
            <FiX onClick={() => setIsSidebarOpen(false)} size={20} />
          </div>
          <ul className="px-4 py-2 h-[2100px] bg-white">
            {productComponents.map((product, index) => (
              <li key={product.name}>
                <NavLink
                    // to={'/cosmeceuticals/#${product.name}'}
                  className={`block px-4 py-2 text-sm m-4 font-semibold hover:text-white border rounded-sm border-black  "`}
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
      <div className="flex md:mx-12 container">
      <div className="text-black w-full xl:w-1/4 xl:block md:hidden hidden flex-none">
      <div className="rounded-lg p-4 m-4 mt-6 bg-white shadow-md">
        <div className="text-center">
          <h1 className="text-2xl text-black font-bold mb-4">
            Categories
          </h1>
        </div>
        <ul className="space-y-2">
          {productComponents.map((product, index) => (
            <li key={product.name}>
               <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-green-600"
                checked={checkedItem === product.name}
                onChange={() => handleCheckboxChange(product.name)}
              />
              <span className="ml-2 text-sm font-semibold">
                {product.name}
              </span>
            </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
        {/* Main Content */}
        <div className="flex-1">
          <h1 className=" mb-4 ">
            {
              productComponents.find(
                (product) => product.name === selectedProduct
              )?.component
            }
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
