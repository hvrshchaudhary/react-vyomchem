import { HiMenu } from "react-icons/hi";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { SelectPicker } from "rsuite";
import { AutoComplete, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import "rsuite/dist/rsuite-rtl.css";
import { ProductList } from "./products/ProductList";
const Navbar = () => {
  const product = [
    {
      name: " Alcohol-Sulphate",
      link: "/cosmeceuticals/#Alcohol-Sulphate",
    },
    {
      name: "Active & Chemical",
      link: "/cosmeceuticals/#Active-&-Miscellaneous",
    },
    {
      name: "Anti-Oxidants",
      link: "/cosmeceuticals/#Anti-Oxidants",
    },
    {
      name: "Milliglobules",
      link: "/cosmeceuticals/#Milliglobules",
    },

    {
      name: "Wax & Butter",
      link: "/cosmeceuticals/#Wax-&-Butter",
    },
    {
      name: "Proteins",
      link: "/cosmeceuticals/#Protein",
    },
    {
      name: "Booster",
      link: "/cosmeceuticals/#Booster",
    },

    {
      name: "Paraben",
      link: "/cosmeceuticals/#Paraben",
    },
    {
      name: "Pearlising Agents",
      link: "/cosmeceuticals/#Pearlising-Agents",
    },
    {
      name: "Sunscreens",
      link: "/cosmeceuticals/#Sunscreens",
    },
    {
      name: "Conditioning Agents",
      link: "/cosmeceuticals/#Conditioning-Agents",
    },
    {
      name: "Moisturizers",
      link: "/cosmeceuticals/#Moisturizers",
    },
    {
      name: "Skin Care",
      link: "/cosmeceuticals/#Skin-Care",
    },
    {
      name: "Bio Ferments",
      link: "/cosmeceuticals/#Bio-Ferments",
    },
    {
      name: "Hair Care",
      link: "/cosmeceuticals/#Hair-Care",
    },
    {
      name: "Antibacterial",
      link: "/cosmeceuticals/#Antibacterial",
    },
    {
      name: "Oils",
      link: "/cosmeceuticals/#Oils",
    },
    {
      name: "Liquid Extracts",
      link: "/cosmeceuticals/#Liquid-Extracts",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);
  const styles = {
    width: 300,
    // marginBottom: 10,
  };
    const toggleDropdown2 = () => {
      setDropdown2(!dropdown2);
    };
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const toggleDropdown3 = () => {
    setDropdown3(!dropdown3);
  };
  const toggleDropdown4 = () => {
    setDropdown4(!dropdown4);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value, item) => {
    window.location.href = item.val;
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
        <div className="hidden md:flex shadow-lg h-max md:h-max p-2 border-gray-800 md:w-full items-center" style={{ backgroundColor: '#00B989' }}>
        {/* Contact Info Section */}
        <div className="flex justify-evenly w-1/2 items-center">
          {/* Phone Info */}
          <div className="flex items-center">
            <FiPhone className="mr-2 mt-1 text-white" />
            <NavLink
              className="font-semibold text-sm text-white"
              to="tel:+919882020609"
            >
              +91-9882020609
            </NavLink>
          </div>
          {/* Email Info */}
          <div className="flex items-center">
            <FiMail className="mr-2 mt-1 text-white" />
            <NavLink
              className="font-semibold text-sm text-white"
              to="mailto:minakshi@vyomchem.com"
            >
              minakshi@vyomchem.com
            </NavLink>
          </div>
        </div>

        {/* Office Info Section */}
        <div className="flex justify-evenly w-1/2 items-center">
          {/* Office Hours Info */}
          <div className="flex items-center">
            <FaRegClock className="mr-2 text-white mt-[3px]" />
            <span className="font-semibold text-sm text-white">
              Office hours 9:30 AM to 6:00 PM
            </span>
          </div>
          {/* Quote Button */}
          {/* <NavLink
            to="/contact"
            className="font-semibold text-xs p-1 rounded-md px-4 bg-green-500 text-white"
          >
            GET A QUOTE
          </NavLink> */}
          {/* Product Selector */}

          {/* <SelectPicker style={{ width: '300px' }} data={ProductList} onSelect={handleSelect}/> */}
          {/* <InputGroup style={styles} > */}
          <AutoComplete
            data={ProductList}
            onSelect={handleSelect}
            placeholder="Search"
          />
          {/* <InputGroup.Button> */}
          {/* <SearchIcon /> */}
          {/* </InputGroup.Button> */}
          {/* </InputGroup> */}
        </div>
      </div>
      <div
        className={`${
          isScrolled ? "sticky top-0 z-50" : ""
        } w-full transition-all duration-300 ease-in-out`}
      >
        <nav
          style={{
            zIndex: 3,
          }}
          className=" bg-white  shadow-lg border-b-2 h-max md:h-max p-2 border-gray-800   md:w-full"
        >
          <div className="container max-w-7xl mx-auto xl:pl-12 xl:pr-12 pl-1 pr-1 ">
            <div className="flex justify-between items-center ">
              {/* Logo */}
              <div className="flex-shrink-0 md:hidden ">
                <NavLink to={{ pathname: "/", hash: "" }}>
                  <img
                    src="/image/vc-logo-new.png"
                    className="h-14  "
                    alt=""
                  />
                </NavLink>
              </div>
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
                className={`md:flex z-10 justify-evenly  md:flex-grow md:items-center hidden :block`}
              >
                <div className="">
                  <NavLink to="/">
                    <img
                      src="/image/vc-logo-new.png"
                      className="h-16 xl:h-24 xl:w-auto"
                      alt=""
                    />
                  </NavLink>
                </div>
              </div>
              <div
                className={`md:flex hidden justify-center mt-2  md:flex-grow md:items-center ${
                  isOpen ? "hidden" : ""
                }`}
              >
                <NavLink
                  to="/"
                  className="font-sans xl:text-lg text-sm text-[#00B989] font-semibold hover:text-[#00B989] visited:text-[#00B989] px-3 py-2"
                  >
                  Home
                </NavLink>
                {/* Products Dropdown */}
                <div className="relative hidden md:block">
                  <div
                    className="font-sans xl:text-lg inline text-sm text-[#12916F] font-semibold pb-5 hover:text-[#12916F] px-3 py-2"
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    Products
                    {dropdown && (
                      <div
                        data-aos="fade-up"
                        className="absolute w-max mt-4 left-0 bg-white z-10 shadow-md"
                      >
                        {/* Cosmecuticals Trigger */}
                        <div
                          className="relative block px-2 py-1 xl:text-lg border-b border-black text-xs text-black hover:bg-green-200"
                          onMouseEnter={() => setDropdown3(true)}
                          onMouseLeave={() => setDropdown3(false)}
                        >
                          Cosmecuticals
                          {/* Nested Dropdown */}
                          {dropdown3 && (
                            <div
                              data-aos="fade-left"
                              className="absolute top-0 left-full grid grid-cols-1 w-max h-96 overflow-scroll bg-green-200"
                            >
                              {product
                                .sort((a, b) => a.name.localeCompare(b.name))
                                .map((ele, index) => (
                                  <div key={index} className="flex-1 p-1">
                                    <NavLink
                                      to={ele.link}
                                      onClick={() => {
                                        toggleDropdown();
                                        toggleDropdown3();
                                      }}
                                      className="block px-2 w-48 text-left font-sans py-1 text-lg pl-3 text-black hover:bg-white hover:text-black hover:no-underline"
                                    >
                                      {ele.name}
                                    </NavLink>
                                  </div>
                                ))}
                            </div>
                          )}
                        </div>

                        {/* Cosmecuticals Brochure Trigger */}
                        <div
                          className="relative block px-2 py-1 xl:text-lg border-b border-black text-xs text-black hover:bg-green-200"
                          onMouseEnter={() => setDropdown4(true)}
                          onMouseLeave={() => setDropdown4(false)}
                        >
                          Cosmecuticals Brochure
                          {/* Nested Dropdown */}
                          {dropdown4 && (
                            <div
                              data-aos="fade-left"
                              className="absolute top-0 left-full grid grid-cols-1 w-max bg-green-200"
                            >
                              <div className="flex-1 p-1">
                                <a
                                  href="/pdf/CosmeceuticalsBrochure.pdf"
                                  target="_blank"
                                  className="block px-2 w-48 text-left font-sans py-1 text-lg pl-3 text-black hover:bg-white hover:text-black hover:no-underline"
                                >
                                  Category Wise
                                </a>
                              </div>
                              <div className="flex-1 p-1">
                                <a
                                  href="/pdf/BrandWiseCosmeceuticalsBrochure.pdf"
                                  target="_blank"
                                  className="block px-2 w-48 text-left font-sans py-1 text-lg pl-3 text-black hover:bg-white hover:text-black hover:no-underline"
                                >
                                  Brand Wise
                                </a>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Exclusive Products Dropdown */}
                <div className="relative hidden md:block">
                  <div
                    className="font-sans xl:text-lg inline text-sm text-[#12916F] font-semibold pb-5 hover:text-[#12916F] px-3 py-2"
                    onMouseEnter={toggleDropdown2}
                    onMouseLeave={toggleDropdown2}
                  >
                    Exclusive products
                    {dropdown2 && (
                      <div
                        data-aos="fade-up"
                        className="absolute w-max mt-4 left-0 bg-white z-10 shadow-md"
                      >
                        <a
                          href="https://www.vionabiopharma.com/undenatured-native-chicken-collagen-type-ii.php"
                          className="block px-2 py-1 xl:text-lg border-b border-black text-xs text-black hover:bg-green-200 hover:text-black hover:no-underline"
                          target="_blank"
                        >
                          Undenatured Chicken collagen Type II (Smarticol)
                        </a>
                        <a
                          href="https://www.vionabiopharma.com/elasticol-hydrolyzed-elastin.php"
                          className="block px-2 py-1 xl:text-lg border-b border-black text-xs text-black hover:bg-green-200 hover:text-black hover:no-underline"
                          target="_blank"
                        >
                          Hydrolyzed Elastin
                        </a>
                        <a
                          href="https://www.vionabiopharma.com/native-undenatured-salmon-proteoglycan.php"
                          className="block px-2 py-1 xl:text-lg border-b border-black text-xs text-black hover:bg-green-200 hover:text-black hover:no-underline"
                          target="_blank"
                        >
                          Native Undenatured Salmon Proteoglycan
                        </a>
                        <a
                          href="https://www.vionabiopharma.com/native-undenatured-tertiary-intact-collagen-type-ii.php"
                          className="block px-2 py-1 xl:text-lg border-b border-black text-xs text-black hover:bg-green-200 hover:text-black hover:no-underline"
                          target="_blank"
                        >
                          Native Undenatured Tertiary Intact Collagen Type II
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* <div className="relative hidden md:block">
                  <NavLink
                    to="/Principal"
                    className="z-10 font-sans xl:text-lg text-sm text-black font-semibold hover:text-green-800 px-3 py-2"
                    onMouseEnter={toggleDropdown3}
                    onMouseLeave={toggleDropdown3}
                  >
                    Major Principals
                  </NavLink>
                </div> */}
                <div className="relative hidden md:block">
                  <NavLink
                    to="/gallery"
                    className="z-10 font-sans xl:text-lg text-sm pb-3 text-[#12916F] font-semibold hover:text-[#12916F] visited:text-[#12916F] px-3 py-2"
                  >
                    Gallery
                  </NavLink>
                </div>
                <NavLink
                  to="/contact"
                  className="font-sans xl:text-lg text-sm text-[#12916F] font-semibold hover:text-[#12916F] visited:text-[#12916F] px-3 py-2"
                >
                  Contact Us
                </NavLink>
              </div>
            </div>

            {/* Mobile Menu (visible on smaller screens) */}
            <div className="md:flex z-10 ">
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
                <div className=" relative block md:hidden z-10">
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
                          to="/cosmeceuticals/#Alcohol-Sulphate"
                          className="block px-4 py-2 text-sm bg-green-300 text-black hover:bg-gray-100"
                        >
                          Cosmecuticals
                        </NavLink>
                        <a
                          href="#"
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
                    <NavLink
                      to="/Principal"
                      className=" block text-black font-sans font-semibold bg-white   hover:bg-green-100 hover:text-green-900 px-3 py-2"
                      onClick={toggleMenu}
                    >
                      Major Principals
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      to="/gallery"
                      className="block text-black font-sans font-semibold bg-white hover:bg-green-100 hover:text-green-900 px-3 py-2"
                      onClick={toggleMenu}
                    >
                      Gallery
                    </NavLink>
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
        <div>
          {/* <marquee className="bg-white border-t-2">
            <img
              src="/marqueeimage.jpg"
              alt="Marquee"
              className="h-10 mr-2 inline"
            />
            <span className=" text-xl text-black">
              Proud exhibitor of Cosmohome Tech Expo, to be held at Pragati
              Maidan Delhi on 26th & 27th June24.
            </span>
            <img
              src="/marqueeimage.jpg"
              alt="Marquee"
              className="h-10 mr-2 inline"
            />
          </marquee> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
