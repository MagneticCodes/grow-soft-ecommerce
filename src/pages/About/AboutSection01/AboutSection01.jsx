import React from "react";

const AboutSection01 = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-[570px] md:h-[560px]">
          <img
            src="https://images.pexels.com/photos/1841579/pexels-photo-1841579.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="About Banner"
            className="rounded-lg shadow-lg w-full h-full"
          />
        </div>
        <div className="md:w-1/2 md:ml-8 mt-6 md:mt-0 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            What is e-commerce business?
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries but also the on leap into electronic
            typesetting.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li className="mb-2">Slim body with metal cover</li>
            <li className="mb-2">High-resolution display</li>
            <li className="mb-2">Long-lasting battery life</li>
            <li className="mb-2">Lightweight and portable</li>
          </ul>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection01;
