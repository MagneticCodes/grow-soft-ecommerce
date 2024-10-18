import React from "react";
import { FaRegHeart, FaRegUser, FaShoppingCart } from "react-icons/fa";
import { GiRecycle } from "react-icons/gi";
import Container from "../../Common/Container";
import logo from "../../../assets/logo.png";

function MiddleNavBar() {
  return (
    <Container>
      <div className="flex justify-between items-center h-[86px]">
        <div className="w-[152px] h-[36px]">
          {/* <img src="" alt="" /> */}
          <img src={logo} alt="" />
        </div>
        <div className="w-[517px] border border-[#efefef] border-opacity-0">
          <div className="relative flex w-full items-center">
            <input
              type="text"
              id="search"
              className="w-full pl-8 pr-3 py-2 focus:outline-none text-sm border text-black shadow-sm placeholder-gray-700 placeholder-opacity-75 placeholder-border-2"
              placeholder="Search Product..."
            />
            <div>
              <div className="absolute top-0 left-60 mt-2 inline-block w-[160px] border-s-2 h-6 ">
                <select className="w-full px-3 py-1 pr-4 text-[14px]  text-gray-500 focus:outline-none h-full bg-white border-none appearance-none ">
                  <option>All Categories</option>
                  <option>Electronics</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-3 h-4 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="absolute right-0  bg-yellow-900 px-8 py-2 text-center text-white hover:bg-yellow-800 "
            >
              Search
            </button>
          </div>
        </div>
        <div className="flex gap-2">
          <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
            <li>
              <GiRecycle className="text-2xl" />
            </li>
            <li>
              <FaRegHeart className="text-2xl" />
            </li>
            <li>
              <FaShoppingCart className="text-2xl" />
            </li>
            <li>
              <FaRegUser className="text-2xl" />
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default MiddleNavBar;
