import { FiMail, FiPhone, FiExternalLink } from "react-icons/fi";
import { FaGreaterThan } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-green-950 text-white pt-8 pb-5">
      {" "}
      {/* Increase or decrease py-16 to adjust height */}
      <div className="container mx-auto flex flex-wrap   w-[80%]">
        <div className=" md:flex  w-full justify-between md:pb-10 pb-1 md:border-b-[1px] border-white">
          <div className="phone flex md:mb-0 mb-8">
            <img src="/image/phone-logo.png" className="md:w-12 w-8 h-8 md:h-auto mt-1 md:mt-0 mr-2 " alt="" />
            <div className="flex flex-col ">
              <NavLink className={"font-bold text-sm md:text-lg"} to="tel:+919882020609">
                +91-9882020609
              </NavLink>

              <h5 className="md:text-sm text-xs">Contact us if you have a question</h5>
            </div>
          </div>
          <div className="mail flex md:mb-0 mb-9">
            <img
              src="/image/email-logo.png"
              alt=""
              className="md:w-12 w-8 h-8 md:h-auto mt-1 md:mt-1 mr-2"
            />
            <div className="flex flex-col ">
              <NavLink
                className={"font-bold text-sm md:text-lg"}
                to="mailto:minakshi@vyomchem.com"
              >
                minakshi@vyomchem.com
              </NavLink>
              <h5 className="md:text-sm text-xs">
                Drop us an email and we will get back to you
              </h5>
            </div>
          </div>
          <div className="time flex md:mb-0 mb-8">
            <img src="/image/clock-logo.png" alt="" className="md:w-12 w-8 h-8 md:h-auto mt-1 md:mt-0 mr-2" />
            <div className="flex flex-col ">
              <span className="font-bold text-sm md:text-lg">Monday to Saturday</span>
              <h5 className="md:text-sm text-xs">We are open from 9:30 AM to 6:00 PM</h5>
            </div>
          </div>
        </div>
        <div className="md:flex justify-evenly md:pt-10 pt-1">
      

          {/* Quick Links Section */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-2 md:px-4 mb-8">
            <h2 className="text-xl text-orange-400 font-semibold mb-4">
              Quick Links
            </h2>
            <div className="space-y-2">
              <NavLink
                onClick={() => {
                  window.location.href = "/";
                }}
                className="flex items-center font-semibold hover:text-green-500"
              >
                <FaGreaterThan className="w-2"/>
                <FaGreaterThan className="mr-2 w-2"/>

                Home
              </NavLink>
              <NavLink
                onClick={() => {
                  window.location.href = "/contact";
                }}
                className="flex items-center font-semibold hover:text-green-500"
              >
                 <FaGreaterThan className="w-2"/>
                <FaGreaterThan className="mr-2 w-2"/>
                Contact Us
              </NavLink>
              <NavLink
                to="https://www.vionabiopharma.com/undenatured-native-chicken-collagen-type-ii.php"
                className="flex items-center font-semibold hover:text-green-500"
                target="_blank"
              >
                 <FaGreaterThan className="w-2"/>
                <FaGreaterThan className="mr-2 w-2"/>
                Exclusive Product
              </NavLink>
            </div>
          </div>

          {/* Our Product Section */}
          <div className="w-full md:w-1/2 lg:w-1/4 md:px-4 px-2 mb-8">
            <h2 className="text-xl text-orange-400 font-semibold mb-4">
              Our Product
            </h2>
            <div className="space-y-2">
              <NavLink
                onClick={() => {
                  window.location.href = "/cosmeceuticals/#Alcohol Sulphate";
                }}
                className="flex items-center font-semibold hover:text-green-500"
              >
                <FiMail className="mr-2" /> Cosmecuticals
              </NavLink>
              <NavLink
                to="https://www.vyomchem.com/pdf/Cosmeceuticals-Brochure.pdf"
                className="flex items-center font-semibold hover:text-green-500"
                target="_blank"
              >
                <FiMail className="mr-2" /> Cosmeceuticals Brochure
              </NavLink>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-2 md:px-4 mb-8">
            <h2 className="text-xl text-orange-400 font-semibold mb-4">
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
