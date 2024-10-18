import React from "react";
import { FaEnvelopeOpenText, FaPhoneAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

const MapAndFormSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div>
        <h1 className="text-xl font-semibold my-3">Contact Information</h1>
        <p className="text-gray-600 my-3">
          Fill the form below or write us. We will help you as soon as possible.
        </p>
        {/* Card Section Start */}
        <div className="flex gap-5 mb-5">
          <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center w-[230px] h-[166px] border border-red-500">
            <div className="border size-[44px] border-yellow-800 p- flex items-center justify-center rounded-full">
              <FaPhoneAlt className="text-xl" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-800 text-center my-2">
                Phone
              </h1>
              <p className="text-gray-600">+880 123456789</p>
              <p className="text-gray-600">+880 123456789</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center w-[230px] h-[166px] border border-red-500">
            <div className="border size-[44px] border-yellow-800 p- flex items-center justify-center rounded-full">
              <FaEnvelopeOpenText className="text-xl" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-800 text-center my-2">
                Email
              </h1>
              <p className="text-gray-600">growsoft@gmail.com</p>
              <p className="text-gray-600">info@growsoft.com</p>
            </div>
          </div>
        </div>
        {/* Card Section End */}
        {/* Map Section Start */}
        <div className="border border-red-500 w-full shadow-lg rounded-lg ">
          <div className="p-6 flex items-center gap-4 border">
            <div className="border size-[44px] border-yellow-800 p- flex text-yellow-900 items-center justify-center rounded-full">
              <FiMapPin className="text-2xl" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-800 mb-2">
                Address
              </h1>
              <p className="text-gray-600 leading-relaxed">
                4517 Washington Ave. Manchester, Road 2342, <br />
                Kentucky 39495
              </p>
            </div>
          </div>
          {/* Embedded Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.909941678875!2d90.39945261498196!3d23.75098468459102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b850c7f017ed%3A0x7c57653a30945450!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1693537608762!5m2!1sen!2sus"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Map Section End */}
      </div>
      <div className="">
        <div className="flexs justify-center">
          <h1 className="text-xl font-semibold">Get In Touch</h1>
          <div className=" w-64 h-1 bg-gray-500  mt-1"></div>
        </div>
        <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8 my-6">
          <form>
            <div className="-mx-2 md:items-center md:flex">
              <div className="flex-1 px-2">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John "
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="flex-1 px-2 mt-4 md:mt-0">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Subject
              </label>
              <input
                type="text"
                placeholder="say something"
                className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Email address
              </label>
              <input
                type="email"
                placeholder="johndoe@example.com"
                className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="w-full mt-4">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Message
              </label>
              <textarea
                className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Message"
              ></textarea>
            </div>

            <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500  hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MapAndFormSection;
