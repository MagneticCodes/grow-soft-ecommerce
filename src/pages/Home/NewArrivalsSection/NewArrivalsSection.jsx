import React from "react";
import Container from "../../../components/Common/Container";
import { FaArrowRight } from "react-icons/fa";
import ProductCard from "../../../components/Common/ProductCard/ProductCard";
import SectionTitle from "../../../components/Common/SectionTitle";
import { vegetableData } from "../../../../public/productData";
// import { vegetableData } from "./path-to-your-data-file"; // Adjust the path accordingly

const NewArrivalsSection = () => {
  return (
    <div className="bg-[#f2efef] py-10">
      <Container>
        <SectionTitle title={"New Arrivals"} />
        <div className="grid grid-cols-4 gap-4">
          {vegetableData.slice(0, 8).map((item) => (
            <ProductCard
              key={item.id}
              item={{
                img: item.images[0], // Using the first image from the array
                title: item.title,
                rating: item.rating,
                regular_price: item.price.regular_price,
                offered_price: item.price.offered_price,
              }}
              itemInfo={item}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default NewArrivalsSection;
