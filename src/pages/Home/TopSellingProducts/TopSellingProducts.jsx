import React from "react";
import SectionTitle from "../../../components/Common/SectionTitle";
import ProductCard01 from "../../../components/Common/ProductCard01/ProductCard01";
import productImg_01 from "../../../assets/images/product-img-1.png";
import productImg_02 from "../../../assets/images/product-img-2.png";
import productImg_03 from "../../../assets/images/product-img-3.png";
import productImg_04 from "../../../assets/images/product-img-4.png";
import Container from "../../../components/Common/Container";

const TopSellingProducts = () => {
  const topSellingProducts = [
    {
      id: 1,
      name: "Wireless Earbuds",
      img: productImg_01,
      rating: 5,
      regular_price: 150,
      offered_price: 99,
    },
    {
      id: 2,
      name: "Smartphone Case",
      img: productImg_02,
      rating: 4,
      regular_price: 30,
      offered_price: 20,
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      img: productImg_03,
      rating: 4.5,
      regular_price: 120,
      offered_price: 85,
    },
    {
      id: 4,
      name: "Fitness Tracker",
      img: productImg_04,
      rating: 4,
      regular_price: 100,
      offered_price: 75,
    },
  ];

  return (
    <Container>
      <div className="my-10">
        <SectionTitle title={"Top Selling Products"} />
        <div className="grid grid-cols-2 gap-x-5 gap-y-10">
          {topSellingProducts.map((item, index) => (
            <ProductCard01 key={index} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TopSellingProducts;
