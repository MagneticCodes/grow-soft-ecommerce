import React from "react";
import newsletter_bg from "../../../assets/images/bg_img/discount-banner-1.jpg";

const NewsletterSection = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white py-16 px-6 w-full "
      style={{
        backgroundImage: `url(${newsletter_bg})`,
         padding: "0px 150px",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      <div className="relative z-10 text-center max-w-4xl py-10 mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">
          Get <span className="text-yellow-400">20% Off</span> Discount Coupon
        </h1>
        <p className="text-lg mb-8">
          By subscribing to our newsletter
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="EMAIL ADDRESS"
            className="py-3 px-4 rounded-l-lg text-gray-800 focus:outline-none w-full max-w-xs"
          />
          <button className="bg-yellow-400 text-gray-800 font-bold py-3 px-6 rounded-r-lg hover:bg-yellow-500 transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
