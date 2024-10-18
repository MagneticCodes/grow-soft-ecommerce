import React from "react";
import { Link } from "react-router-dom";
import { Select, Option } from "@material-tailwind/react";

function TopNavBar() {
  return (
    <div>
      <div className="container">
        <div className="row flex justify-between py-2">
          <div className="left_side font-nunito">
            <Link className="font-[500] text-[14px] mx-2" to="/account">
              Account
            </Link>
            <Link className="font-[500] text-[14px] mx-2" to="/track-order">
              Track Order
            </Link>
            <Link className="font-[500] text-[14px] mx-2" to="/support">
              Support
            </Link>
          </div>
          <div className="right_side flex">
            {/* first selector */}
            <div>
              <div className="relative inline-block w-[110px]">
                <select className="w-full px-3 py-1 pr-4 text-[12px] text-gray-700 bg-white border-none appearance-none focus:outline-none">
                  <option>Bangladesh</option>
                  <option>United State</option>
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
            {/* second selector */}
            <div>
              <div className="relative inline-block w-[70px]">
                <select className="w-full px-3 py-1 pr-4 text-[12px] text-gray-700 bg-white border-none appearance-none focus:outline-none">
                  <option>BDT</option>
                  <option>USD</option>
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
            {/* Third selector */}
            <div>
              <div className="relative inline-block w-[80px]">
                <select className="w-full px-3 py-1 pr-4 text-[12px] text-gray-700 bg-white border-none appearance-none focus:outline-none">
                  <option>Bangla</option>
                  <option>English</option>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;
