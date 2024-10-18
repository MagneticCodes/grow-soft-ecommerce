import React from "react";
import AboutSection01 from "./AboutSection01/AboutSection01";
import TesttimonialSection from "./TesttimonialSection/TesttimonialSection";
import ShippingSection from "../Home/ShippingSection/ShippingSection";
import LatestNewsSection from "./LatestNewsSection/LatestNewsSection";
import NewsletterSection from "../Contact/NewsletterSection/NewsletterSection";

const AboutPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-16">
        <h1 className="text-4xl font-bold text-blue-600">About Page</h1>
      </div>
      <AboutSection01 />
      <TesttimonialSection />
      <ShippingSection />
      <LatestNewsSection />
      <NewsletterSection />
    </div>
  );
};

export default AboutPage;
