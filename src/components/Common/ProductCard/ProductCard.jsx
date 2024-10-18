import React from "react";
import "./ProductCard.css";
import { FaRegHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { GiRecycle } from "react-icons/gi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";

const ProductCard = ({ item, itemInfo }) => {
  return (
    <div className="card border border-indigo-600 border-opacity-20">
      <div className="w-full h-[300px] ">
        <img className="w-full h-full p-5" src={item.img} alt="" />
      </div>
      <div className=" h-[150px] px-4 py-5">
        <div className="flex gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <Link
          to={`/products/${item.id}`}
          state={{ productData: itemInfo }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <p className="card-info my-2">{item?.title}</p>
        </Link>
        <div className="flex gap-2 my-4 ml-[50px] ">
          <del className="text-xl">$99.99</del>
          <p>$80.99</p>
        </div>
      </div>
      <div className="card-icon flex flex-col gap-5 border rounded-full bg-orange-400 px-2 py-3">
        {/* <FaShoppingCart size={30} /> */}
        <GrCart className="text-red-500 hover:text-red-700" size={25} />
        <GiRecycle size={25} />
        <FaRegHeart size={25} />
        {/* <FaShoppingCart className="text-2xl" /> */}
      </div>
      <button className="card-btn  bg-orange-700 mx-auto justify-center flex whitespace-nowrap items-center gap-2">
        <MdOutlineShoppingBag className="text-xl" />
        <span className="mt-[2px] font-semibold">Add to Cart</span>
      </button>
    </div>
  );
};

export default ProductCard;
