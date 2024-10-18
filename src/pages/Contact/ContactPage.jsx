import React from "react";
import MapAndFormSection from "./MapAndFormSection/MapAndFormSection";
import NewsletterSection from "./NewsletterSection/NewsletterSection";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10  ">
      <div className="relative text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-wider">
          Contact
        </h1>
        <span className="absolute top-0 left-0 w-full h-full text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-black ">
          Contact
        </span>
      </div>
      <MapAndFormSection />
      <NewsletterSection />
    </div>
  );
};

export default ContactPage;
