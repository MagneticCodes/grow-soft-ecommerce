import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Custom icons

const HeroSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const heroimages = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/68525/soap-colorful-color-fruit-68525.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1750304/pexels-photo-1750304.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {heroimages.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-[530px]">
              <img
                className="w-full h-full object-cover"
                src={item.img}
                alt={`Slide ${item.id}`}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white space-y-4">
                  <h2 className="text-3xl font-bold lg:text-4xl">
                    Discover Beautiful Designs
                  </h2>
                  <p className="text-base lg:text-lg max-w-md mx-auto">
                    Explore our amazing collection of modern and sleek design
                    ideas that elevate your lifestyle.
                  </p>
                  <button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 transition-all rounded-md shadow-md">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-5 z-10">
          <button
            ref={prevRef}
            className="text-white bg-black/30 hover:bg-black/50 p-3 rounded-full shadow-lg"
          >
            <FaArrowLeft className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-5 z-10">
          <button
            ref={nextRef}
            className="text-white bg-black/30 hover:bg-black/50 p-3 rounded-full shadow-lg"
          >
            <FaArrowRight className="w-5 h-5" />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
