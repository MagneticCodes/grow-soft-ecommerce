import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HeroSectionThree.css";

const HeroSectionThree = () => {
  const slides = [
    {
      id: 1,
      title: "Slide One",
      image:
        "https://images.pexels.com/photos/12304526/pexels-photo-12304526.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "Slide Two",
      image:
        "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Slide Three",
      image:
        "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      title: "Slide Four",
      image:
        "https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="carousel-container mx-auto  ">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        className="relative"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[100vh] overflow-hidden rounded-lg shadow-lg">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-fill transform transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-4xl font-bold drop-shadow-lg">
                  {slide.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSectionThree;
