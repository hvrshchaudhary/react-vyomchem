import React from "react";
import { BsTelephone } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { LuMail } from "react-icons/lu";

const ContactUs = () => {
  return (
    <div>
      <div className="h-full ">
        <img
          className="h-40  w-full md:h-52 object-cover"
          style={{
            filter: "brightness(50%)",
          }}
          src="./public/image/contactus.jpg"
          alt=""
        />
        <div
          className="md:top-36 top-28 md:left-16 left-5  text-white font-bold text-4xl absolute"
          style={{
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          Contact Us
        </div>
      </div>
      <div className="md:flex justify-center w-full  bg--100 md:pt-5 pb-5">
        <div className=" md:p-9 flex w-full">
          <div className="bg-white md:m-8 m-3 w-full border rounded-lg bottom-4" style={{
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",

          }}>
            <div className="flex w-full md:flex-row flex-col gap-5 ">
              <div className="flex-1 bg-black pt-10 pb-10 md:rounded-none rounded-lg pl-6 pr-6 ">
                <div className="text-left ">
                  <span className="text-5xl text-white">Get in touch</span>
                </div>
                <div className="md:mt-2 mt-3 text-left">
                  <div className=" md:w-1/2 text-lg text-white">
                    Any Question ? we would be happy to help you!
                  </div>
                </div>
                <div
                  className="flex flex-col flex-shrink md:w-[60%]"
                >
                  <div className="border mt-5 rounded-md p-3 border-gray-500 flex flex-row pl-5 items-center content-center text-white hover:bg-white hover:text-black hover:translate-x-1 hover:scale-110  transition-all">
                    <div className="mr-2">
                      <BsTelephone />
                    </div>
                    <div>+91 9882020609</div>
                  </div>
                  <div className="border mt-5 rounded-md p-3 border-gray-500 flex flex-row pl-5 items-center content-center text-white hover:bg-white hover:text-black hover:translate-x-1 hover:scale-110  transition-all">
                    <div className="mr-2">
                      <LuMail />
                    </div>
                    <div>minakshi@vyomchem.com</div>
                  </div>
                  <div className="border mt-5 rounded-md p-3 border-gray-500 flex flex-row pl-5 items-center content-center text-white hover:bg-white hover:text-black hover:translate-x-1 hover:scale-110  transition-all">
                    <div className="mr-2 mb-[70px]">
                      <GrLocation />
                    </div>
                    <div>Ground floor, Show room no. G-05, Home Land City Mall Baddi, Chakkan Road, Baddi, Dist. Solan(H.P.) 173205</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 p-5">
                <form
                  action="#"
                  method="post"
                  className="grid md:grid-cols-6 gap-4"
                >
                  <div className="col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 pl-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Subject
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                    Product Categories
                    </label>
                    <div className="mt-2">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="block w-full rounded-md pl-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white"
                        style={{ padding: 10 }}
                      >
                        <option value="">Select a category</option>
                        <option value="category1">API'S/Enzymes</option>
                        <option value="category2">Chemicals</option>
                        <option value="category3">Cosmetic Ingredients</option>
                        <option value="category4">
                          Essentials Oil's/Flavours
                        </option>
                        <option value="category5">Herbal Extracts</option>
                        <option value="category5">Nutraceuticals</option>
                        <option value="category5">Probiotics</option>
                        <option value="category5">Fragrance</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Message
                    </label>
                    <div className="mt-2 ">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                    </div>
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

    <div class=" flex justify-center items-center">
        <div class="w-full  relative">
            <iframe class="w-full h-72 md:h-96" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.2112297509398!2d76.79652877474084!3d30.936664574486475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff5047c5be861%3A0x2601629e3a84fec6!2sVYOMCHEM%20SPECIALITIES!5e0!3m2!1sen!2suk!4v1710176833379!5m2!1sen!2suk" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>     
    </div>
  );
};

export default ContactUs;
