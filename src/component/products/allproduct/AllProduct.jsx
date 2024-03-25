import React from 'react'

import { useState } from 'react';
import Alcohol from '../Alcohol';
import Extract from '../Extract';
import Milliglobules from '../Milliglobules';
import Miscellaneous from '../Miscellaneous';
import WaxButter from '../WaxButter';
import Protein from '../Protein';
import Booster from '../Booster';
import AntiOxidant from '../AntiOxidant';
import Fixatives from '../Fixatives';
import Parabens from '../Parabens';
import PearlisingAgent from '../PearlisingAgents';
import Sunscreen from '../../Sunscreen';
import ConditioningAgent from '../ConditioningAgent';
import Moisturizers from '../Moisturizers';
const productComponents = [
    { name: "Extract (Liquid)", component: <Extract /> },
    { name: "Alcohol Sulphate", component: <Alcohol /> },
    { name: "Milliglobules", component: <Milliglobules /> },
    { name: "Active & Miscellaneous", component: <Miscellaneous /> },
    { name: "Wax & Butter", component: <WaxButter /> },
    { name: "Protein", component: <Protein /> },
    { name: "Booster", component: <Booster /> },
    { name: "Anti-Oxidants/ Parabens Free Preservatives", component: <AntiOxidant /> },
    { name: "Fixatives", component: <Fixatives /> },
    { name: "Paraben", component: <Parabens /> },
    { name: "Pearlising Agents", component: <PearlisingAgent /> },
    { name: "Sunscreens", component: <Sunscreen /> },
    { name: "Conditioning Agents", component: <ConditioningAgent /> },
    { name: "Moisturizers", component: <Moisturizers /> },
  ];
  
  const AllProduct = () => {
    const [selectedProduct, setSelectedProduct] = useState("Extract (Liquid)");
  
    const handleProductClick = (productName) => {
      setSelectedProduct(productName);
    };
  
    return (
      <div className="flex h-full">
        {/* Sidebar  */}
        <div className="bg-gray-800 text-white w-80 flex-none">
          <div className="p-4">
            <h1 className="text-3xl font-bold">Our Product</h1>
          </div>
          <ul className="py-4">
            {productComponents.map(product => (
              <li key={product.name}>
                <a
                  href={`/cosmeceuticals/#${product.name}`}
                  onClick={() => handleProductClick(product.name)}
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  {product.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Main Content  */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">
            {productComponents.find(product => product.name === selectedProduct)?.component}
          </h1>
          <p></p>
        </div>
      </div>
    );
  }
  
  export default AllProduct;
