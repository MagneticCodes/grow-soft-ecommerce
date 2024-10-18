import React from "react";
import Container from "../../../components/Common/Container";
import SectionTitle from "../../../components/Common/SectionTitle";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import ProductCard from "../../../components/Common/ProductCard/ProductCard";
import AddSectionOne from "../AddSectionOne/AddSectionOne";
import addImg_01 from "../../../assets/images/ads-3.png";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const TechWorldSection = () => {
  const data = [
    {
      label: "Smartphones & Accessories",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
                  What matters is the people who are sparked by it. And the people
                  who are like offended by it, it doesn't matter.`,
      products: [
        {
          id: 1,
          name: "iPhone 13 Pro",
          img: "https://images.pexels.com/photos/14666034/pexels-photo-14666034.jpeg?auto=compress&cs=tinysrgb&w=600",
          regular_price: "$999",
          offered_price: "$899",
          rating: "4.8",
        },
        {
          id: 2,
          name: "Samsung Galaxy S21",
          img: "https://images.pexels.com/photos/17944743/pexels-photo-17944743/free-photo-of-close-up-of-a-man-holding-a-green-samsung-galaxy-s21.jpeg?auto=compress&cs=tinysrgb&w=600",
          regular_price: "$799",
          offered_price: "$699",
          rating: "4.7",
        },
        {
          id: 3,
          name: "OnePlus 9 Pro",
          img: "https://images.pexels.com/photos/63690/pexels-photo-63690.jpeg?auto=compress&cs=tinysrgb&w=600",
          regular_price: "$969",
          offered_price: "$869",
          rating: "4.6",
        },
        {
          id: 4,
          name: "OnePlus 9 Pro",
          img: "https://images.pexels.com/photos/63690/pexels-photo-63690.jpeg?auto=compress&cs=tinysrgb&w=600",
          regular_price: "$969",
          offered_price: "$869",
          rating: "4.6",
        },
      ],
    },
    {
      label: "Laptops & Computers",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
                  to follow my dreams and inspire other people to follow their dreams, too.`,
      products: [
        {
          id: 1,
          name: "MacBook Pro 16",
          img: "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=600",
          regular_price: "$2399",
          offered_price: "$2199",
          rating: "4.9",
        },
        {
          id: 2,
          name: "Dell XPS 13",
          img: "https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg?auto=compress&cs=tinysrgb&w=600", // Placeholder image
          regular_price: "$999",
          offered_price: "$899",
          rating: "4.8",
        },
        {
          id: 3,
          name: "HP Spectre x360",
          img: "https://images.pexels.com/photos/17706646/pexels-photo-17706646/free-photo-of-news-on-laptop-screen.jpeg?auto=compress&cs=tinysrgb&w=600", // Placeholder image
          regular_price: "$1299",
          offered_price: "$1199",
          rating: "4.7",
        },
      ],
    },
    {
      label: "Tablets & E-Readers",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
                  We're constantly growing. We're constantly making mistakes. We're
                  constantly trying to express ourselves and actualize our dreams.`,
      products: [
        {
          id: 1,
          name: "iPad Pro 12.9",
          img: "https://images.pexels.com/photos/4453103/pexels-photo-4453103.jpeg?auto=compress&cs=tinysrgb&w=600", // Placeholder image
          regular_price: "$1099",
          offered_price: "$999",
          rating: "4.9",
        },
        {
          id: 2,
          name: "Samsung Galaxy Tab S7",
          img: "https://images.pexels.com/photos/20348037/pexels-photo-20348037/free-photo-of-back-of-the-samsung-galaxy-s24-smartphone.jpeg?auto=compress&cs=tinysrgb&w=600", // Placeholder image
          regular_price: "$649",
          offered_price: "$549",
          rating: "4.7",
        },
        {
          id: 3,
          name: "Amazon Kindle Oasis",
          img: "https://images.pexels.com/photos/12627/pexels-photo-12627.jpeg?auto=compress&cs=tinysrgb&w=600", // Placeholder image
          regular_price: "$249",
          offered_price: "$229",
          rating: "4.8",
        },
      ],
    },
    {
      label: "Audio & Headphones",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
                  to follow my dreams and inspire other people to follow their dreams, too.`,
      products: [
        {
          id: 1,
          name: "Sony WH-1000XM4",
          img: "https://images.pexels.com/photos/2929412/pexels-photo-2929412.jpeg?auto=compress&cs=tinysrgb&w=600", // Placeholder image
          regular_price: "$349",
          offered_price: "$299",
          rating: "4.8",
        },
        {
          id: 2,
          name: "Bose QuietComfort 35 II",
          img: "https://images.pexels.com/photos/7206225/pexels-photo-7206225.jpeg?auto=compress&cs=tinysrgb&w=600", // Placeholder image
          regular_price: "$299",
          offered_price: "$249",
          rating: "4.7",
        },
        {
          id: 3,
          name: "AirPods Pro",
          img: "https://images.pexels.com/photos/5712070/pexels-photo-5712070.jpeg?auto=compress&cs=tinysrgb&w=600", // Placeholder image
          regular_price: "$249",
          offered_price: "$199",
          rating: "4.6",
        },
      ],
    },
    {
      label: "Drones & Robotics",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
                  We're constantly growing. We're constantly making mistakes. We're
                  constantly trying to express ourselves and actualize our dreams.`,
      products: [
        {
          id: 1,
          name: "DJI Mavic Air 2",
          img: "https://images.pexels.com/photos/8170164/pexels-photo-8170164.jpeg?auto=compress&cs=tinysrgb&w=600", // Placeholder image
          regular_price: "$799",
          offered_price: "$749",
          rating: "4.9",
        },
        {
          id: 2,
          name: "DJI Phantom 4 Pro",
          img: "https://images.pexels.com/photos/4355180/pexels-photo-4355180.jpeg?auto=compress&cs=tinysrgb&w=600", // Placeholder image
          regular_price: "$1599",
          offered_price: "$1499",
          rating: "4.8",
        },
        {
          id: 3,
          name: "Parrot Anafi",
          img: "https://images.pexels.com/photos/26050817/pexels-photo-26050817/free-photo-of-scarlet-macaw-in-flight.jpeg?auto=compress&cs=tinysrgb&w=600", // Placeholder image
          regular_price: "$699",
          offered_price: "$649",
          rating: "4.7",
        },
      ],
    },
  ];

  return (
    <div>
      <Container>
        <SectionTitle title={"Tech World"} />
        <div>
          <div className="">
            <Tabs value="html" orientation="vertical">
              <TabsHeader className="w-[270px] h-auto sm:h-[442px] bg-gradient-to-r from-amber-600 to-indigo-600 border rounded-lg p-2 sm:p-4 space-y-2 sm:space-y-4 overflow-auto">
                {data.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    className=" font-semibold py-2 px-4 rounded-md hover:bg-amber-400 hover:text-indigo-900 transition-colors ease-in-out duration-300"
                  >
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody>
                {data.map(({ value, products }) => (
                  <TabPanel key={value} value={value} className="py-0  ">
                    {/* Swiper Section Start here */}
                    <Swiper
                      spaceBetween={30}
                      slidesPerView={3}
                      // centeredSlides={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      modules={[Autoplay, Pagination, Navigation]}
                      className="mySwiper grid grid-cols-1 sm:grid-cols-3 gap-5"
                    >
                      <div className=" grid grid-cols-1 sm:grid-cols-3 gap-5">
                        {products.map((product) => (
                          <SwiperSlide>
                            <div>
                              <ProductCard key={product.id} item={product} />
                            </div>
                          </SwiperSlide>
                        ))}
                      </div>
                      {/* <SwiperSlide>Slide 2</SwiperSlide>
                      <SwiperSlide>Slide 3</SwiperSlide>
                      <SwiperSlide>Slide 4</SwiperSlide>
                      <SwiperSlide>Slide 5</SwiperSlide>
                      <SwiperSlide>Slide 6</SwiperSlide>
                      <SwiperSlide>Slide 7</SwiperSlide>
                      <SwiperSlide>Slide 8</SwiperSlide>
                      <SwiperSlide>Slide 9</SwiperSlide> */}
                    </Swiper>
                    {/* Swiper Section End here */}
                    {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      {products.map((product) => (
                        <ProductCard key={product.id} item={product} />
                      ))}
                    </div> */}
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>
        </div>
      </Container>
      <AddSectionOne img={addImg_01} />
    </div>
  );
};

export default TechWorldSection;
