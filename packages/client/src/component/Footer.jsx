import { FiMail, FiPhone, FiExternalLink } from "react-icons/fi";
import { FaGreaterThan } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-green-950 text-white pt-8 pb-5">
      {" "}
      {/* Increase or decrease py-16 to adjust height */}
      <div className="container mx-auto flex flex-wrap   w-[80%]">
        <div className=" xl:flex  w-full justify-between xl:pb-10 pb-1 xl:border-b-[1px] border-white">
          <div className="phone flex xl:mb-0 mb-8">
            <img
              src="/image/phone-logo.png"
              className="xl:w-12 w-8 h-8 xl:h-auto mt-1 xl:mt-0 mr-2 "
              alt=""
            />
            <div className="flex flex-col ">
              <NavLink
                className={"font-bold text-sm xl:text-xl"}
                to="tel:+919882020609"
              >
                +91-9882020609
              </NavLink>

              <h5 className="xl:text-sm text-xs">
                Contact us if you have a question
              </h5>
            </div>
          </div>
          <div className="mail flex xl:mb-0 mb-9">
            <img
              src="/image/email-logo.png"
              alt=""
              className="xl:w-12 w-8 h-8 xl:h-auto mt-1 xl:mt-1 mr-2"
            />
            <div className="flex flex-col ">
              <NavLink
                className={"font-bold text-sm xl:text-xl"}
                to="mailto:minakshi@vyomchem.com"
              >
                minakshi@vyomchem.com
              </NavLink>
              <h5 className="xl:text-sm text-xs">
                Drop us an email and we will get back to you
              </h5>
            </div>
          </div>
          <div className="time flex xl:mb-0 mb-8">
            <img
              src="/image/clock-logo.png"
              alt=""
              className="xl:w-12 w-8 h-8 xl:h-auto mt-1 xl:mt-0 mr-2"
            />
            <div className="flex flex-col ">
              <span className="font-bold text-sm xl:text-xl">
                Monday to Saturday
              </span>
              <h5 className="xl:text-sm text-xs">
                We are open from 9:30 AM to 6:00 PM
              </h5>
            </div>
          </div>
        </div>
        <div className="xl:flex justify-evenly xl:pt-10 pt-1">
          {/* Quick Links Section */}
          <div className="w-full xl:w-1/2 xl::w-1/4 px-2 xl:px-4 mb-8">
            <h2 className="text-xl: text-orange-400 font-semibold mb-4">
              Quick Links
            </h2>
            <div className="space-y-2">
              <NavLink
                onClick={() => {
                  window.location.href = "/";
                }}
                className="flex items-center font-semibold hover:text-green-500"
              >
                <FaGreaterThan className="w-2" />
                <FaGreaterThan className="mr-2 w-2" />
                Home
              </NavLink>
              <NavLink
                onClick={() => {
                  window.location.href = "/contact";
                }}
                className="flex items-center font-semibold hover:text-green-500"
              >
                <FaGreaterThan className="w-2" />
                <FaGreaterThan className="mr-2 w-2" />
                Contact Us
              </NavLink>
              <NavLink
                to="https://www.vionabiopharma.com/undenatured-native-chicken-collagen-type-ii.php"
                className="flex items-center font-semibold hover:text-green-500"
                target="_blank"
              >
                <FaGreaterThan className="w-2" />
                <FaGreaterThan className="mr-2 w-2" />
                Exclusive Product
              </NavLink>
              {/* <NavLink
                to="/form"
                className="flex items-center font-semibold hover:text-green-500"
              >
                 <FaGreaterThan className="w-2"/>
                <FaGreaterThan className="mr-2 w-2"/>
                Apply for job
              </NavLink> */}
            </div>
          </div>

          {/* Our Product Section */}
          <div className="w-full xl:w-1/2 xl::w-1/4 xl:px-4 px-2 mb-8">
            <h2 className="text-xl: text-orange-400 font-semibold mb-4">
              Our Product
            </h2>
            <div className="space-y-2">
              <NavLink
                onClick={() => {
                  window.location.href = "/cosmeceuticals/#Alcohol-Sulphate";
                }}
                className="flex items-center font-semibold hover:text-green-500"
              >
                <FaGreaterThan className="w-2" />
                <FaGreaterThan className="mr-2 w-2" />
                Cosmecuticals
              </NavLink>
              <div className="space-y-2">
                <div
                  to="#"
                  className="flex items-center font-semibold "
                  // target="_blank"
                >
                  <FaGreaterThan className="w-2" />
                  <FaGreaterThan className="mr-2 w-2" />
                  Cosmeceuticals Brochure
                </div>
                <NavLink
                  to="/pdf/CosmeceuticalsBrochure.pdf"
                  className="flex items-center font-semibold hover:text-green-500 bullet-point"
                  target="_blank"
                >
                  Category Wise
                </NavLink>
                <NavLink
                  to="https://www.vyomchem.com/pdf/Cosmeceuticals-Brochure.pdf"
                  className="flex items-center font-semibold hover:text-green-500 bullet-point"
                  target="_blank"
                >
                  Brand Wise
                </NavLink>

              </div>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="w-full xl:w-1/2 xl::w-1/4 px-2 xl:px-4 mb-8">
            <h2 className="text-xl: text-orange-400 font-semibold mb-4">
              Contact Us
            </h2>
            <p className="text-sm">
              Vyomchem Specialities: Ground floor, Showroom no. G-05, Home Land
              City Mall Baddi, Chakkan Road, Baddi, Dist. Solan (H.P.) 173205
            </p>
            <p className="text-sm flex items-center mt-3">
              <FiMail className="mr-2" />
              <NavLink to="mailto:minakshi@vyomchem.com">
                minakshi@vyomchem.com
              </NavLink>
            </p>
            <p className="text-sm flex items-center mt-1">
              <FiPhone className="mr-2" />
              <NavLink to="tel:+919882020609">+91-9882020609</NavLink>
            </p>
            <p className="text-sm flex items-center mt-1">
              <FiExternalLink className="mr-2" />
              <NavLink to="https://www.vyomchem.com">www.vyomchem.com</NavLink>
            </p>
          </div>
        </div>
      </div>
      {/* Footer Last Line */}
      <div className="text-center text-xs mt-4"></div>
    </div>
  );
};

export default Footer;
