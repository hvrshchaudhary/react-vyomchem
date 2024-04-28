import React from "react";
import { NavLink } from "react-router-dom";
const ContactUsNav = () => {
  return (
  <div className="flex bg-gray-100 justify-center">   
     <div className="  h-screen flex w-4/5 justify-center items-center  ">
      <div className="md:flex container  ">
        <div className=" flex-1" data-aos="fade-right">
          <div>
            <div className="pb-8 md:pb-0">
              <h5 className="text-4xl md:text-5xl font-bold text-black font-sans mb-3"  >
                Get in touch
              </h5>
              <h2 className="text-2xl  font-bold  mb-3"  style={{
                color: "#7CE6B3",
                }}>
                We would like to hear <br className="" /> from you!
              </h2>
              <p className="mb-5">
                If you would like more information about our company and
                products,
                <br /> please contact us. We will be happy to Serve!
              </p>
              <NavLink  >
              <button className="border-black border w-32 h-8 hover:text-white bg-white hover:bg-black text-black rounded-lg"
              onClick={() => { window.location.href = '/contact'; }}
              >
                Contact Us
              </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className=" flex-1 " data-aos="fade-left">
          <img
            src="/image/Ayurvedic-image.jpg"
            alt=""
            className="object-fill "
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUsNav;

