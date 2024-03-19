import { FiMail, FiPhone, FiExternalLink } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-green-950 text-white pt-8 pb-5"> {/* Increase or decrease py-16 to adjust height */}
    <div className="container mx-auto flex flex-wrap justify-center w-4/5">
      {/* About Section */}
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <h2 className="text-xl font-semibold mb-4">About</h2>
        <p className="text-sm text-justify">
          This group is the brainchild of professionals who during their years of interactions/ exposure in various capacities in the API, Nutrition and allied industry realized that a discerning buyer in the industry requires, apart from cost-effectiveness and reliable service, perpetual information about the latest innovations and all other developments/happenings in the line. Founders of this group are widely traveled, highly dedicated, and focused people.
        </p>
      </div>
  
      {/* Quick Links Section */}
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
        <div className="space-y-2">
          <NavLink to="/" className="flex items-center font-semibold hover:text-green-500">
            Home
          </NavLink>
          <NavLink to="/About" className="flex items-center font-semibold hover:text-green-500">
            About
          </NavLink>
          <NavLink to="https://www.vionabiopharma.com/undenatured-native-chicken-collagen-type-ii.php" className="flex items-center font-semibold hover:text-green-500" target="_blank">
            Exclusive Product
          </NavLink>
        </div>
      </div>
  
      {/* Our Product Section */}
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <h2 className="text-xl font-semibold mb-4">Our Product</h2>
        <div className="space-y-2">
          <NavLink to="/cosmeceuticals" className="flex items-center font-semibold hover:text-green-500">
            <FiMail className="mr-2" /> Cosmecuticals
          </NavLink>
          <NavLink to="https://www.vyomchem.com/pdf/Cosmeceuticals-Brochure.pdf" className="flex items-center font-semibold hover:text-green-500" target="_blank">
            <FiMail className="mr-2" /> Cosmeceuticals Brochure
          </NavLink>
        </div>
      </div>
  
      {/* Contact Us Section */}
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
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
    {/* Footer Last Line */}
    <div className="text-center text-xs mt-4">
      <p>© 2022 Vyomchem Specialities. All Rights Reserved. Website Designed By : Ink Web Solutions</p>
    </div>
  </div>
  
  );
};

export default Footer;
