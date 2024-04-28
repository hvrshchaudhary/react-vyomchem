import React, { useEffect, useState } from "react";
// import emailjs from '@emailjs/browser';
const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    skillLevel: "",
    streetAddress: "",
    city: "",
    region: "",
    postalCode: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, resume: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const recipientEmail = "minakshi@vyomchem.com";
    const subject = "New Job Application";

    const mailtoURL = `mailto:${encodeURIComponent(
      recipientEmail
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `First Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nEmail: ${formData.email}\nSkill Level: ${formData.skillLevel}\nStreet Address: ${formData.streetAddress}\nCity: ${formData.city}\nRegion: ${formData.region}\nPostal Code: ${formData.postalCode}`
    )}`;

    window.location.href = mailtoURL;
  };
  const [files, setFiles] = useState([]);
  useEffect(() => {
    document.getElementById("file-upload").addEventListener("change", (e) => {
        console.log(e.target.files[0])
      if (e.target.files.length) {

        setFiles([...files,e.target.files[0]]);
      }
    });
  });
  return (
    <div className="flex justify-center">
    <div className="container mx-auto bg-gray-200 rounded-md m-5 w-4/5 p-5">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          JOB APPLICATION FORM
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Please fill out all the required fields and attach your resume below.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* First Name */}
          <div>
            <label htmlFor="first-name" className="block  text-sm font-medium text-gray-900">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              id="first-name"
              autoComplete="given-name"
              className="mt-1 focus:ring-indigo-500 pl-1  focus:border-indigo-500 block w-full shadow-sm md:text-lg text-sm border-gray-300 rounded-md"
              onChange={handleChange}
            />
          </div>
          {/* Last Name */}
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              id="last-name"
              autoComplete="family-name"
              className="mt-1 focus:ring-indigo-500 pl-1 focus:border-indigo-500 block w-full shadow-sm md:text-lg text-sm border-gray-300 rounded-md"
              onChange={handleChange}
            />
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="mt-1 focus:ring-indigo-500 pl-1 focus:border-indigo-500 block w-full shadow-sm md:text-lg text-sm border-gray-300 rounded-md"
              onChange={handleChange}
            />
          </div>
          {/* Phone Number */}
          <div>
            <label htmlFor="phone-number" className="block text-sm font-medium text-gray-900">
              Phone number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phone-number"
              autoComplete="tel"
              className="mt-1 focus:ring-indigo-500 pl-1 focus:border-indigo-500 block w-full shadow-sm md:text-lg text-sm border-gray-300 rounded-md"
              onChange={handleChange}
            />
          </div>
          {/* Skill Level */}
          <div>
            <label htmlFor="skill-level" className="block text-sm font-medium text-gray-900">
              Skill Level
            </label>
            <select
              id="skill-level"
              name="skillLevel"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-white border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  rounded-md"
              onChange={handleChange}
            >
              <option>College Graduate</option>
              <option>Career Changer</option>
              <option>Inexperienced</option>
              <option>Experienced</option>
            </select>
          </div>
          {/* Street Address */}
          <div className="sm:col-span-2">
            <label htmlFor="street-address" className="block text-sm font-medium text-gray-900">
              Street address
            </label>
            <input
              type="text"
              name="streetAddress"
              id="street-address"
              autoComplete="street-address"
              className="mt-1 focus:ring-indigo-500 pl-1 focus:border-indigo-500 block w-full shadow-sm md:text-lg text-sm border-gray-300 rounded-md"
              onChange={handleChange}
            />
          </div>
          {/* City */}
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-900">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              autoComplete="address-level2"
              className="mt-1 focus:ring-indigo-500 pl-1 focus:border-indigo-500 block w-full shadow-sm md:text-lg text-sm border-gray-300 rounded-md"
              onChange={handleChange}
            />
          </div>
          {/* Region */}
          <div>
            <label htmlFor="region" className="block text-sm font-medium text-gray-900">
              State / Province
            </label>
            <input
              type="text"
              name="region"
              id="region"
              autoComplete="address-level1"
              className="mt-1 focus:ring-indigo-500 pl-1 focus:border-indigo-500 block w-full shadow-sm md:text-lg text-sm bg-white border-white rounded-md"
              onChange={handleChange}
            />
          </div>
          {/* Postal Code */}
          <div>
            <label htmlFor="postal-code" className="block text-sm font-medium text-gray-900">
              ZIP / Postal code
            </label>
            <input
              type="text"
              name="postalCode"
              id="postal-code"
              autoComplete="postal-code"
              className="mt-1 focus:ring-indigo-500 pl-1 focus:border-indigo-500 block w-full shadow-sm md:text-lg text-sm border-gray-500 rounded-md"
              onChange={handleChange}
            />
          </div>
          {/* Upload Resume */}
          <div className="sm:col-span-2">
            <label htmlFor="file-upload" className="block text-sm font-medium text-gray-900">
              Upload Resume
            </label>
            <div className="mt-1 flex justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7 7 7 7m0 0l7-7-7-7m14-8v24m10-12H9"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer  rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept=".pdf, .png, .jpg, .gif"
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PDF, PNG, JPG, GIF up to 10MB</p>
                {formData.resume && (
                  <p className="text-xs text-gray-500">{formData.resume.name}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  </div>

        
  );
};

export default Form;
