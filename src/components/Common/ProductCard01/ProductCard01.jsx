import React from "react";
import product_01 from "../../../assets/images/product-img-1.png";
import { FaStar, FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { GiRecycle } from "react-icons/gi";

const ProductCard01 = ({item}) => {

  return (
    <div className="relative group w-[509px] h-[190px] p-4 flex items-center gap-8 bg-white  transition-shadow duration-300">
      <div className="flex-shrink-0">
        <img
          src={item.img}
          alt="Product"
          className="w-32 h-32 object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="flex gap-1 text-yellow-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p className="text-gray-800 mt-2">
          Senmei ipsum dolore eiusmod dolor officia do nisi
        </p>
        <div className="mt-2 text-gray-600">
          <del>$20.64</del>
          <p className="text-lg text-gray-900 font-semibold">$27.61</p>
        </div>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Add To Cart
        </button>
      </div>
      <div className="absolute right-0 top-0 h-full w-full flex items-center justify-end">
        <div className="transform translate-x-16 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
          <div className="card-icon flex flex-col gap-5">
            <FaShoppingCart size={30} />
            <GiRecycle size={30} />
            <FaRegHeart size={30} />
            {/* <FaShoppingCart className="text-2xl" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard01;
