import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Container from "./Container";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex justify-between items-center pb-10">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="flex items-center gap-2">
        <span>View More</span> <FaArrowRight />
      </div>
    </div>
  );
};

export default SectionTitle;
