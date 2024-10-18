import React from "react";

const DiscountSection = () => {
  return (
    <div>
      <section className="py-14 my-10 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
          <div className="max-w-xl md:mx-auto">
            <h3 className="text-white text-3xl font-semibold sm:text-4xl">
              Get 20% Off Discount Coupon
            </h3>
            <p className="mt-3 text-deep-orange-50">
              by Subscribe our Newsletter EMAIL ADDRESS
            </p>
          </div>
          <div className="flex gap-3 items-center mt-4 md:justify-center">
            <a
              href="javascript:void(0)"
              className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none"
            >
              Get started
            </a>
            <a
              href="javascript:void(0)"
              className="inline-block py-2 px-4 text-gray-800 font-medium duration-150 border hover:bg-gray-50 active:bg-gray-100 rounded-lg"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiscountSection;
