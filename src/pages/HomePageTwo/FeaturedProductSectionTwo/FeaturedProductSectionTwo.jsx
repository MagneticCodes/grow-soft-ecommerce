import React from "react";
import SectionTitle from "../../../components/Common/SectionTitle";
import Container from "../../../components/Common/Container";
import productOne from "../../../assets/images/product-img-1.png";
import producttwo from "../../../assets/images/product-img-2.png";
import productthree from "../../../assets/images/product-img-3.png";
import productFour from "../../../assets/images/product-img-4.png";
import productFive from "../../../assets/images/product-img-5.png";
import productSix from "../../../assets/images/product-img-6.png";
import productSeven from "../../../assets/images/product-img-7.png";
import productEight from "../../../assets/images/product-img-8.png";
import ProductCard from "../../../components/Common/ProductCard/ProductCard";

const FeaturedProductSectionTwo = () => {
  const FeaturedProducts = [
    {
      id: 1,
      img: productOne,
      rating: 5,
      title: "Product 1",
      regular_price: 200,
      offered_price: 150,
    },
    {
      id: 2,
      img: producttwo,
      rating: 4.5,
      title: "Product 2",
      regular_price: 250,
      offered_price: 200,
    },
    {
      id: 3,
      img: productthree,
      rating: 4,
      title: "Product 3",
      regular_price: 180,
      offered_price: 130,
    },
    {
      id: 4,
      img: productFour,
      rating: 5,
      title: "Product 4",
      regular_price: 220,
      offered_price: 175,
    },
    {
      id: 5,
      img: productFive,
      rating: 4.8,
      title: "Product 5",
      regular_price: 300,
      offered_price: 250,
    },
    {
      id: 6,
      img: productSix,
      rating: 4.2,
      title: "Product 6",
      regular_price: 190,
      offered_price: 140,
    },
    {
      id: 7,
      img: productSeven,
      rating: 4.7,
      title: "Product 7",
      regular_price: 270,
      offered_price: 220,
    },
    {
      id: 8,
      img: productEight,
      rating: 4.9,
      title: "Product 8",
      regular_price: 260,
      offered_price: 210,
    },
  ];
  return (
    <Container>
      <div>
        <SectionTitle title={"Featured Products"} />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {FeaturedProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default FeaturedProductSectionTwo;
