import React from "react";
import Container from "../../../components/Common/Container";
import productImgOne from "../../../assets/images/product-img-1.png";
import productImgTwo from "../../../assets/images/product-img-2.png";
import productImgThree from "../../../assets/images/product-img-3.png";
import productImgFour from "../../../assets/images/product-img-4.png";
import productImgFive from "../../../assets/images/product-img-5.png";
import productImgSix from "../../../assets/images/product-img-6.png";
import productImgSeven from "../../../assets/images/product-img-7.png";
import productImgEight from "../../../assets/images/product-img-8.png";
import productImgNine from "../../../assets/images/product-img-9.png";
import productImgTen from "../../../assets/images/product-img-10.png";
import { FaArrowRight } from "react-icons/fa";
import SectionTitle from "../../../components/Common/SectionTitle";
import AddSectionOne from "../AddSectionOne/AddSectionOne";
import addImg_01 from "../../../assets/images/ads-4.png";

const PopularSellSection = () => {
  const popularSellSectionData = [
    {
      id: 1,
      img: productImgOne,
      title: "Product 1",
      regular_price: 20,
      offered_price: 18,
    },
    {
      id: 2,
      img: productImgTwo,
      title: "Product 2",
      regular_price: 25,
      offered_price: 22,
    },
    {
      id: 3,
      img: productImgThree,
      title: "Product 3",
      regular_price: 30,
      offered_price: 27,
    },
    {
      id: 4,
      img: productImgFour,
      title: "Product 4",
      regular_price: 35,
      offered_price: 32,
    },
    {
      id: 5,
      img: productImgFive,
      title: "Product 5",
      regular_price: 40,
      offered_price: 36,
    },
    {
      id: 6,
      img: productImgSix,
      title: "Product 6",
      regular_price: 45,
      offered_price: 40,
    },
    {
      id: 7,
      img: productImgSeven,
      title: "Product 7",
      regular_price: 50,
      offered_price: 45,
    },
    {
      id: 8,
      img: productImgEight,
      title: "Product 8",
      regular_price: 55,
      offered_price: 50,
    },
    {
      id: 9,
      img: productImgNine,
      title: "Product 9",
      regular_price: 60,
      offered_price: 54,
    },
    {
      id: 10,
      img: productImgTen,
      title: "Product 10",
      regular_price: 65,
      offered_price: 58,
    },
    {
      id: 11,
      img: productImgFive,
      title: "Product 11",
      regular_price: 70,
      offered_price: 63,
    },
    {
      id: 12,
      img: productImgOne,
      title: "Product 12",
      regular_price: 75,
      offered_price: 67,
    },
  ];

  return (
    <div>
      <Container>
        {/* <div className="flex justify-between items-center">
          <h1>Popular Seles</h1>
          <div className="flex items-center gap-2">
            <span>View More</span> <FaArrowRight />
          </div>
        </div> */}
        <SectionTitle title={"Popular Sells"} />
        {/* TODO: Link up Product Page */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 cursor-pointer">
          {popularSellSectionData.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <img src={item.img} alt="" className="size-24" />
              <div>
                <h1>{item.title}</h1>
                <div className="flex gap-3">
                  <del>${item.regular_price}</del>
                  <h1>${item.offered_price}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <div className="mt-20">
        <AddSectionOne img={addImg_01} />
      </div>
    </div>
  );
};

export default PopularSellSection;
