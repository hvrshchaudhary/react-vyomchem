import { FiMail, FiPhone, FiExternalLink } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-green-950 text-white pt-8 pb-5"> {/* Increase or decrease py-16 to adjust height */}
    <div className="container mx-auto flex flex-wrap   w-[90%]">
      <div className=" md:flex  w-full justify-between pb-4 md:border-b-[1px] border-white">
        <div className="phone flex md:mb-0 mb-9">
          <img src="/image/phone-logo.png" className="w-12 mr-2 " alt="" />
          <div className="flex flex-col ">
          <NavLink className={"font-bold text-lg"} to = "tel:+919882020609">+91-9882020609</NavLink>

          <h5 className="text-sm">Contact us if you have a question</h5>
          </div>
        </div>
        <div className="mail flex md:mb-0 mb-9">
          <img src="/image/email-logo.png" alt="" className="w-12 md:mt-1 mr-2" />
          <div className="flex flex-col ">
          <NavLink className={"font-bold text-lg"} to="mailto:minakshi@vyomchem.com">minakshi@vyomchem.com</NavLink>
          <h5 className="text-sm">Drop us an email and we will get back to you</h5>
          </div>
        </div>
        <div className="time flex md:mb-0 mb-9">
          <img src="/image/clock-logo.png" alt="" className="w-12 mr-2" />
          <div className="flex flex-col ">
          <span className="font-bold text-lg">Monday to Saturday</span>
          <h5 className="text-sm">We are open from 9:30 AM to 6:00 PM</h5>
          </div>
        </div>
      </div>
      <div className="md:flex mt-4">
      {/* About Section */}
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <h2 className="text-xl text-orange-400 font-semibold mb-4">About</h2>
        <p className="text-sm text-justify">
          This group is the brainchild of professionals who during their years of interactions/ exposure in various capacities in the API, Nutrition and allied industry realized that a discerning buyer in the industry requires, apart from cost-effectiveness and reliable service, perpetual information about the latest innovations and all other developments/happenings in the line. Founders of this group are widely traveled, highly dedicated, and focused people.
        </p>
      </div>
  
      {/* Quick Links Section */}
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <h2 className="text-xl text-orange-400 font-semibold mb-4">Quick Links</h2>
        <div className="space-y-2">
          <NavLink   onClick={() => { window.location.href = '/'; }} className="flex items-center font-semibold hover:text-green-500">
            Home
          </NavLink>
          <NavLink   onClick={() => { window.location.href = '/contact'; }} className="flex items-center font-semibold hover:text-green-500">
            Contact Us
          </NavLink>
          <NavLink to="https://www.vionabiopharma.com/undenatured-native-chicken-collagen-type-ii.php" className="flex items-center font-semibold hover:text-green-500" target="_blank">
            Exclusive Product
          </NavLink>
        </div>
      </div>
  
      {/* Our Product Section */}
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <h2 className="text-xl text-orange-400 font-semibold mb-4">Our Product</h2>
        <div className="space-y-2">
          <NavLink   onClick={() => { window.location.href = '/cosmeceuticals/#Extract (Liquid)'; }}  className="flex items-center font-semibold hover:text-green-500">
            <FiMail className="mr-2" /> Cosmecuticals
          </NavLink>
          <NavLink to="https://www.vyomchem.com/pdf/Cosmeceuticals-Brochure.pdf" className="flex items-center font-semibold hover:text-green-500" target="_blank">
            <FiMail className="mr-2" /> Cosmeceuticals Brochure
          </NavLink>
        </div>
      </div>
  
      {/* Contact Us Section */}
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <h2 className="text-xl text-orange-400 font-semibold mb-4">Contact Us</h2>
        <p className="text-sm">
          Vyomchem Specialities: Ground floor, Showroom no. G-05, Home Land City Mall Baddi, Chakkan Road, Baddi, Dist. Solan (H.P.) 173205
        </p>
        <p className="text-sm flex items-center mt-3">
          <FiMail className="mr-2" />
          <NavLink to="mailto:minakshi@vyomchem.com">minakshi@vyomchem.com</NavLink>
        </p>
        <p className="text-sm flex items-center mt-1">
          <FiPhone className="mr-2" />
      <NavLink to = "tel:+919882020609">+91-9882020609</NavLink>
        </p>
        <p className="text-sm flex items-center mt-1">
          <FiExternalLink className="mr-2" />
          <NavLink to="https://www.vyomchem.com">www.vyomchem.com</NavLink>
        </p>
      </div>
      </div>
    </div>
    {/* Footer Last Line */}
    <div className="text-center text-xs mt-4">
    </div>
  </div>
  
  );
};

export default Footer;
