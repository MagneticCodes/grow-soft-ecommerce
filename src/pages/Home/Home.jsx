import { Button } from "@material-tailwind/react";
import React from "react";
import HeroSlider from "./HeroSlider/HeroSlider";
import ShippingSection from "./ShippingSection/ShippingSection";
import PopularSellSection from "./PopularSellSection/PopularSellSection";
import NewArrivalsSection from "./NewArrivalsSection/NewArrivalsSection";
import TopSellingProducts from "./TopSellingProducts/TopSellingProducts";
import DiscountSection from "./DiscountSection/DiscountSection";
import TechWorldSection from "./TechWorldSection/TechWorldSection";
import AddSectionOne from "./AddSectionOne/AddSectionOne";

function Home() {
  return (
    <div>
      <HeroSlider />
      <ShippingSection />
      <TechWorldSection />
      <PopularSellSection />
      <NewArrivalsSection />
      <DiscountSection />
      <TopSellingProducts />
    </div>
  );
}

export default Home;
