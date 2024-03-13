import { useLayoutEffect } from "react";
import Navbar from "./component/Navbar";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Footer from "./component/Footer";

import AboutUs from "./component/AboutUs";
import ContactUs from "./component/ContactUs";
import CosmeceuticalsProduct from "./component/CosmeceuticalsProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import OurPrinciplepage from "./component/OurPrinciplepage";
function App() {
  useLayoutEffect(() => {
    AOS.init();
  });
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cosmeceuticals" element ={<CosmeceuticalsProduct/>}/> 
          <Route path="/principle" element ={<OurPrinciplepage/>}/>
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/About" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

// <div className={` md:flex z-10 justify-evenly pr-12 md:flex-grow md:items-center ${isOpen ? 'hidden' : ''}`}>
// <div className=" relative hidden md:block">
//   <a href="#" className=" font-kode-mono text-black hover:text-gray-500 px-3 py-2" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
//     Product
//     {dropdown && (
//       <div className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-md">
//         <a href="#" className="block px-4 py-2 text-xs text-black hover:bg-gray-100">
//           Cosmecuticals
//         </a>
//         <a href="#" className="block px-4 py-2 text-xs text-black hover:bg-gray-100">
//           Cosmeceuticals Brochure
//         </a>
//       </div>
//     )}
//   </a>
// </div>
// <div className="relative hidden md:block">
//   <a href="#" className="z-10 font-kode-mono text-black hover:text-gray-500 px-3 py-2" onMouseEnter={toggleDropdown2} onMouseLeave={toggleDropdown2}>
//     Exclusive Product
//     {dropdown2 && (
//       <div className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-md">
//         <a href="#" className="block px-4 py-2 text-xs text-black hover:bg-gray-100">
//         Undenatured Chicken collagen Type II (Smarticol)
//         </a>
//       </div>
//     )}
//   </a>
// </div>

// // banner.js
// import React, { useState } from 'react';
// import { HiMenu } from 'react-icons/hi';
// import { IoClose } from 'react-icons/io5';

// const Banner = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdown, setDropdown] = useState(false);
//   const [dropdown2 ,setDropdown2] = useState(false);

//   const toggleDropdown = () => {
//     setDropdown(!dropdown);
//   };

//   const toggleDropdown2 = () => {
//     setDropdown2(!dropdown2);
//   };

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-white shadow-lg border-b-2 border-gray-800">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center md:h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <img src="./public/image/logo.png" className="w-20 h-auto" alt="Logo" />
//           </div>
//           {/* Mobile Menu Button (visible on smaller screens) */}
//           <div className="md:hidden">
//             <button onClick={toggleMenu} className="text-black hover:text-gray-500 px-3 py-2">
//               {isOpen ? (
//                 <IoClose className="h-6 w-6" />
//               ) : (
//                 <HiMenu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//           {/* Navigation Links (visible on larger screens) */}
//           <div className={` md:flex z-10 justify-evenly pr-12 md:flex-grow md:items-center hidden :block`}>
//             <div className=" relative hidden md:block">
//               <a href="#" className=" font-kode-mono text-black hover:text-gray-500 px-3 py-2" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
//                 Product
//                 {dropdown && (
//                   <div className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-md">
//                     <a href="#" className="block px-4 py-2 text-xs text-black hover:bg-gray-100">
//                       Cosmecuticals
//                     </a>
//                     <a href="#" className="block px-4 py-2 text-xs text-black hover:bg-gray-100">
//                       Cosmeceuticals Brochure
//                     </a>
//                   </div>
//                 )}
//               </a>
//             </div>
//             <div className="relative hidden md:block">
//               <a href="#" className="z-10 font-kode-mono text-black hover:text-gray-500 px-3 py-2" onMouseEnter={toggleDropdown2} onMouseLeave={toggleDropdown2}>
//                 Exclusive Product
//                 {dropdown2 && (
//                   <div className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-md">
//                     <a href="#" className="block px-4 py-2 text-xs text-black hover:bg-gray-100">
//                     Undenatured Chicken collagen Type II (Smarticol)
//                     </a>

//                   </div>
//                 )}
//               </a>
//             </div>
//             <a href="#" className="hidden md:block font-kode-mono text-black hover:text-gray-500 px-3 py-2">Our Principle</a>
//           </div>
//           <div className={`md:flex hidden justify-evenly pl-12 md:flex-grow md:items-center ${isOpen ? 'hidden' : ''}`}>
//             <a href="#" className="font-kode-mono text-black hover:text-gray-500 px-3 py-2">Home</a>
//             <a href="#" className="font-kode-mono text-black hover:text-gray-500 px-3 py-2">About</a>
//             <a href="#" className="font-kode-mono text-black hover:text-gray-500 px-3 py-2">Contact</a>
//           </div>
//         </div>
//         {/* Mobile Menu (visible on smaller screens) */}
//         <div className='md:flex'>
//           <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
//             <a href="#" className="block  text-black hover:text-gray-500 px-3 py-2">Product</a>
//             <a href="#" className="block text-black hover:text-gray-500 px-3 py-2">Exclusive Product</a>
//             <a href="#" className="block text-black hover:text-gray-500 px-3 py-2">Our Principle</a>
//           </div>
//           <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
//             <a href="#" className="block text-black hover:text-gray-500 px-3 py-2">Home</a>
//             <a href="#" className="block text-black hover:text-gray-500 px-3 py-2">About</a>
//             <a href="#" className="block text-black hover:text-gray-500 px-3 py-2">Contact</a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Banner;
