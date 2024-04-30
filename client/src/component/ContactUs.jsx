import React, { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { LuMail } from "react-icons/lu";
import { NavLink } from "react-router-dom";
// import { useState } from "react";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    phone: "",
    category: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Email address to send the email to
    const recipientEmail = "minakshi@vyomchem.com";

    // Subject of the email
    const subject = formData.subject || "Submission";

    // Compose the mailto URL
    const mailtoURL = `mailto:${encodeURIComponent(
      recipientEmail
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nCategory: ${formData.category}\nMessage: ${formData.message}`
    )}`;

    // Open the default email client with the mailto URL
    window.location.href = mailtoURL;
  };
  return (
    <div>
    <div className="h-full ">
      <img
        className="h-40  w-full md:h-52 object-cover"
        style={{
          filter: "brightness(50%)",
        }}
        src="/image/contactus.jpg"
        alt=""
      />
      <div
        className="md:top-60 top-32 md:left-16 left-5  text-white font-bold text-3xl md:text-4xl absolute"
        style={{
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        Contact Us
      </div>
    </div>
    <div className="md:flex justify-center w-full  bg--100 md:pt-5 pb-5">
      <div className=" md:p-9 flex container">
        <div
          className="bg-white md:m-8 m-3 w-full border rounded-lg bottom-4"
          style={{
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex w-full flex-col md:flex-col xl:flex-row gap-5 ">
            <div className="flex-1 bg-black pt-10 pb-10 md:rounded-none rounded-lg pl-6 pr-6 ">
              <div className="text-left ">
                <span className="md:text-5xl text-4xl text-white">Get in touch</span>
              </div>
              <div className="md:mt-2 mt-3 text-left">
                <div className=" md:w-1/2 text-lg text-white">
                  Any Question ? we would be happy to help you!
                </div>
              </div>
              <div className="flex flex-col flex-shrink md:w-[60%]">
                <div className="border mt-5 rounded-md p-3 border-gray-500 flex flex-row pl-5 items-center content-center text-white hover:bg-white hover:text-black hover:translate-x-1 hover:scale-110  transition-all">
                  <div className="mr-2">
                    <BsTelephone />
                  </div>
                  <div>
                    <NavLink to="tel:+919882020609">+91-9882020609</NavLink>
                  </div>
                </div>
                <div className="border mt-5 rounded-md p-3 border-gray-500 flex flex-row pl-5 items-center content-center text-white hover:bg-white hover:text-black hover:translate-x-1 hover:scale-110  transition-all">
                  <div className="mr-2">
                    <LuMail />
                  </div>
                  <div>
                    <NavLink to="mailto:minakshi@vyomchem.com">
                      minakshi@vyomchem.com
                    </NavLink>
                  </div>
                </div>
                <div className="border mt-5 rounded-md p-3 border-gray-500 flex flex-row pl-5 items-center content-center text-white hover:bg-white hover:text-black hover:translate-x-1 hover:scale-110  transition-all">
                  <div className="mr-2 mb-[70px]">
                    <GrLocation />
                  </div>
                  <div>
                    Ground floor, Show room no. G-05, Home Land City Mall
                    Baddi, Chakkan Road, Baddi, Dist. Solan(H.P.) 173205
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 p-5">
              <form
                onSubmit={handleSubmit}
                action="#"
                method="post"
                className="grid md:grid-cols-6 gap-4"
              >
                <div className="col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="block w-full rounded-md border-0 pl-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
                <div className="col-span-3">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="block w-full rounded-md border-0 pl-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="col-span-3">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="block w-full rounded-md border-0 pl-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
                <div className="col-span-3">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Product Categories
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="block w-full rounded-md pl-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white"
                    style={{ padding: 10 }}
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="API'S/Enzymes">API'S/Enzymes</option>
                    <option value="Chemicals">Chemicals</option>
                    <option value="Cosmetic Ingredients">Cosmetic Ingredients</option>
                    <option value="Essentials Oil's/Flavours">Essentials Oil's/Flavours</option>
                    <option value="Herbal Extracts">Herbal Extracts</option>
                    <option value="Nutraceuticals">Nutraceuticals</option>
                    <option value="Probiotics">Probiotics</option>
                    <option value="Fragrance">Fragrance</option>
                  </select>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Write your message here"
                    required
                  />
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Write a Message Here.
                  </p>
                </div>
                <div className="col-span-3 ">
                  <button
                    type="submit"
                    className="col-span-full mt-5 w-28 h-10 bg-black text-white rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className=" flex justify-center items-center">
      <div className="w-full  relative">
        <iframe
          className="w-full h-72 md:h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.2112297509398!2d76.79652877474084!3d30.936664574486475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff5047c5be861%3A0x2601629e3a84fec6!2sVYOMCHEM%20SPECIALITIES!5e0!3m2!1sen!2suk!4v1710176833379!5m2!1sen!2suk"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
  );
};

export default ContactUs;
