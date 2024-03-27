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
      className=" bg-white shadow-lg border-b-2 h-[46px] md:h-auto l border-gray-800 sticky  md:w-full"
    >
      <div className="max-w-7xl mx-auto md:pl-12 md:pr-12 pl-1 pr-1 ">
        <div className="flex justify-between items-center md:h-16">
          {/* Logo */}
          <div className="flex-shrink-0 ">
            <NavLink to="/">
              <img
                src="/image/logo.png"
                className="w-14 md:h-auto md:w-20 "
                alt=""
              />
            </NavLink>
          </div>
          <h1 className="md:hidden text-2xl font-bold text-green-800 font-serif ">
           <NavLink to="/">Vyomchem</NavLink> 
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
                className=" font-sans text-xl font-semibold text-black hover:text-green-500 px-3 py-2"
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                Products
                {dropdown && (
                  <div className="absolute  mt-1 -left-2 bg-white shadow-md rounded-md">
                    <NavLink
                      to="/cosmeceuticals/#Extract (Liquid)"
                      className="block px-4 py-2  text-lg text-black hover:bg-gray-100"
                    >
                      Cosmecuticals
                    </NavLink>
                    <NavLink
                      href="https://www.vyomchem.com/pdf/Cosmeceuticals-Brochure.pdf"
                      target="_blank"
                      className="block px-4  py-2 text-lg text-black hover:bg-gray-100"
                    >
                      Cosmeceuticals Brochure
                    </NavLink>
                  </div>
                )}
              </a>
            </div>
            <div className="relative hidden md:block">
              <a
                href="#"
                className="z-10 font-sans text-xl text-black font-semibold hover:text-green-500 px-3 py-2"
                onMouseEnter={toggleDropdown2}
                onMouseLeave={toggleDropdown2}
              >
                Exclusive Product
                {dropdown2 && (
                  <div className="absolute top-full m-[-16px] left-0 mt-[2px] bg-white shadow-md rounded-md">
                    <a
                      href="https://www.vionabiopharma.com/undenatured-native-chicken-collagen-type-ii.php"
                      className="block px-5 py-3  text-sm text-black hover:bg-gray-100"
                      target="_blank"
                    >
                      Undenatured Chicken collagen Type II (Smarticol)
                    </a>
                  </div>
                )}
              </a>
            </div>
            <div className="relative hidden md:block">
              <a
                href="/Principle"
                className="z-10 font-sans text-xl text-black font-semibold hover:text-green-500 px-3 py-2"
                onMouseEnter={toggleDropdown3}
                onMouseLeave={toggleDropdown3}
              >
                Our Principles
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
              className="font-sans text-xl text-black font-semibold hover:text-green-500  px-3 py-2"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="font-sans text-xl text-black font-semibold hover:text-green-500 px-3 py-2"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="font-sans text-xl text-black font-semibold hover:text-green-500 px-3 py-2"
            >
              Contact Us
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu (visible on smaller screens) */}
        <div className="md:flex z-10">
          <div
            className={`md:hidden ${isOpen ? "block" : "hidden"}`}
            onClick={toggleMenu}
          >
            <NavLink
              to="/"
              className="block text-black font-sans font-semibold bg-white hover:bg-green-100 hover:text-green-900 px-3 py-2"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block text-black font-sans font-semibold bg-white hover:bg-green-100 hover:text-green-900 px-3 py-2"
            >
              About Us
            </NavLink>
          </div>
          <div className={`md:hiddem ${isOpen ? "block" : "hidden"}`}>
            <div className=" relative block md:hidden">
              <div
                // to="#"
                className=" block text-black font-sans font-semibold bg-white   hover:bg-green-100 hover:text-green-900 px-3 py-2"
                onClick={toggleDropdown}
              >
                Product
                {dropdown && (
                  <div
                    className=" top-full left- mt-1 bg-white shadow-md rounded-md"
                    onClick={toggleMenu}
                  >
                    <NavLink
                      to="/cosmeceuticals/#Extract (Liquid)"
                      className="block px-4 py-2 text-sm bg-green-300 text-black hover:bg-gray-100"
                    >
                      Cosmecuticals
                    </NavLink>
                    <a
                      href="https://www.vyomchem.com/pdf/Cosmeceuticals-Brochure.pdf"
                      target="_blank"
                      className="block px-4 py-2 text-sm bg-green-300 text-black hover:bg-gray-100"
                    >
                      Cosmeceuticals Brochure
                    </a>
                  </div>
                )}
              </div>
              <div
                // to="#"
                className=" block text-black font-sans font-semibold bg-white   hover:bg-green-100 hover:text-green-900 px-3 py-2"
                onClick={toggleDropdown2}
              >
                Exclusive Product
                {dropdown2 && (
                  <div
                    className=" top-full left- mt-1 bg-white shadow-md rounded-md"
                    onClick={toggleMenu}
                  >
                    <a
                      href="https://www.vionabiopharma.com/undenatured-native-chicken-collagen-type-ii.php"
                      target="_blank"
                      className="block px-4 py-2 text-sm bg-green-300 text-black hover:bg-gray-100"
                    >
                      Undenatured Chicken collagen Type II (Smarticol)
                    </a>
                  </div>
                )}
              </div>
              <div>
                <a
                href="/Principle"
                className=" block text-black font-sans font-semibold bg-white   hover:bg-green-100 hover:text-green-900 px-3 py-2"
                onMouseEnter={toggleDropdown3}
                onMouseLeave={toggleDropdown3}
              >
                Our Principles
              </a>
              </div>
              <NavLink
                to="/contact"
                className="block text-black font-sans font-semibold bg-white hover:bg-green-100 hover:text-green-900 px-3 py-2"
                onClick={toggleMenu}
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
