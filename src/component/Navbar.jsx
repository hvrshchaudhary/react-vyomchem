import React from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const toggleDropdown2 = () => {
    setDropdown2(!dropdown2);
  };
  const toggleDropdown3 = () => {
    setDropdown3(!dropdown3);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      style={{ zIndex: 3 }}
      className=" bg-white shadow-lg border-b-2 md:h-auto l border-gray-800 sticky top- w-full"
    >
      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <div className="flex justify-between items-center md:h-16">
          {/* Logo */}
          <div className="flex-shrink-0 ">
            <img
              src="./image/logo.png"
              className="w-14 md:h-auto md:w-20 "
              alt="Logo"
            />
          </div>
          <h1 className="md:hidden text-3xl font-bold text-green-800 font-serif ">
            Vyomchem
            <div
              className="  sm:mb-0"
              style={{
                padding: 0,
                background: "black",
                marginTop: -3,
                width: "100%",
              }}
            ></div>
          </h1>

          {/* Mobile Menu Button (visible on smaller screens) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-gray-500 px-3 py-2"
            >
              {isOpen ? (
                <IoClose className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
          {/* Navigation Links (visible on larger screens) */}
          <div
            className={` md:flex z-10 justify-evenly pr-12 md:flex-grow md:items-center hidden :block`}
          >
            <div className=" relative hidden md:block">
              <a
                href="#"
                className=" font-kode-mono font-semibold text-black hover:text-green-500 px-3 py-2"
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                Product
                {dropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-md">
                    <NavLink
                      
                      to="/cosmeceuticals"
                      className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                    >
                      Cosmecuticals
                    </NavLink>
                    <a
                      href="https://www.vionabiopharma.com/undenatured-native-chicken-collagen-type-ii.php"
                      className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                    >
                      Cosmeceuticals Brochure
                    </a>
                  </div>
                )}
              </a>
            </div>
            <div className="relative hidden md:block">
              <a
                href="#"
                className="z-10 font-kode-mono text-black font-semibold hover:text-green-500 px-3 py-2"
                onMouseEnter={toggleDropdown2}
                onMouseLeave={toggleDropdown2}
              >
                Exclusive Product
                {dropdown2 && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-md">
                    <a
                      href="https://www.vyomchem.com/pdf/Cosmeceuticals-Brochure.pdf"
                      className="block px-4 py-2 text-xs text-black hover:bg-gray-100"
                    >
                      Undenatured Chicken collagen Type II (Smarticol)
                    </a>
                  </div>
                )}
              </a>
            </div>
            <div className="relative hidden md:block">
              <a
                href="#"
                className="z-10 font-kode-mono text-black font-semibold hover:text-green-500 px-3 py-2"
                onMouseEnter={toggleDropdown3}
                onMouseLeave={toggleDropdown3}
              >
                Our Principle
                {dropdown3 && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-md">
                    <NavLink
                      to="/Principle"
                      className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                    >
                      Cosmeceuticals
                    </NavLink>
                  </div>
                )}
              </a>
            </div>
          </div>
          <div
            className={`md:flex hidden justify-evenly pl-12 md:flex-grow md:items-center ${
              isOpen ? "hidden" : ""
            }`}
          >
            <NavLink
              to="/"
              className="font-kode-mono text-black font-semibold hover:text-green-500  px-3 py-2"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="font-kode-mono text-black font-semibold hover:text-green-500 px-3 py-2"
            >
              About
            </NavLink>
            <NavLink
              
              to="/contact"
              className="font-kode-mono text-black font-semibold hover:text-green-500 px-3 py-2"
            >
              Contact
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu (visible on smaller screens) */}
        <div className="md:flex z-10">
          <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
            <a
              to="/"
              className="block text-black font-kode-mono font-semibold bg-white hover:bg-green-100 hover:text-green-900 px-3 py-2"
              onClick={isOpen}
            >
              Home
            </a>
            <a
              to="/about"
              className="block text-black font-kode-mono font-semibold bg-white hover:bg-green-100 hover:text-green-900 px-3 py-2"
              onClick={isOpen}
            >
              About
            </a>
          </div>
          <div className={`md:hiddem ${isOpen ? "block" : "hidden"}`}>
            <div className=" relative block md:hidden">
              <a
                href="#"
                className=" block text-black font-kode-mono font-semibold bg-white   hover:bg-green-100 hover:text-green-900 px-3 py-2"
                onClick={toggleDropdown}
              >
                Product
                {dropdown && (
                  <div className=" top-full left- mt-1 bg-white shadow-md rounded-md">
                    <a
                      to="/cosmeceuticals"
                      className="block px-4 py-2 text-sm bg-green-300 text-black hover:bg-gray-100"
                      onClick={isOpen}
                    >
                      Cosmecuticals
                    </a>
                    <a
                      href="https://www.vionabiopharma.com/undenatured-native-chicken-collagen-type-ii.php"
                      className="block px-4 py-2 text-sm bg-green-300 text-black hover:bg-gray-100"
                      onClick={isOpen}
                    >
                      
                      Cosmeceuticals Brochure
                    </a>
                  </div>
                )}
              </a>
            </div>

            <div className=" relative block md:hidden">
              <a
                href="#"
                className=" block text-black font-kode-mono font-semibold bg-white  hover:bg-green-100 hover:text-green-900 px-3 py-2"
                onClick={toggleDropdown2}
              >
                Exclusive Product
                {dropdown2 && (
                  <div className=" top-full left- mt-1 bg-white shadow-md rounded-md">
                    <a
                      href="https://www.vyomchem.com/pdf/Cosmeceuticals-Brochure.pdf"
                      className="block px-4 py-2 bg-green-300 text-sm text-black hover:bg-gray-100"
                      onClick={isOpen}
                    >
                      Undenatured Chicken collagen Type II (Smarticol)
                    </a>
                  </div>
                )}
              </a>
            </div>

            <div className=" relative block md:hidden">
              <a
                href="#"
                className=" block text-black font-kode-mono font-semibold bg-white  hover:bg-green-100 hover:text-green-900 px-3 py-2"
                onClick={toggleDropdown3}
              >
                Our Principles
                {dropdown3 && (
                  <div className="  top-full left- mt-1 bg-white shadow-md rounded-md">
                    <a
                      to="/Principle"
                      className="block px-4 py-2 bg-green-300 text-sm text-black hover:bg-gray-100"
                      onClick={isOpen}
                    >
                      Cosmecuticals
                    </a>
                  </div>
                )}
              </a>
              <a
                to="/contact"
                className="block text-black font-kode-mono font-semibold bg-white hover:bg-green-100 hover:text-green-900 px-3 py-2"
                onClick={isOpen}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
