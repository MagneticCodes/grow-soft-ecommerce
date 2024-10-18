import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BannerSection = () => {
  const bannerSectionData = [
    {
      id: 1,
      title: "Innovate Your Business",
      img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Technology at Your Fingertips",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Transform Your Workflow",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 4,
      title: "Innovative Design Solutions",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 5,
      title: "Empower Your Team",
      img: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  return (
    <div className="min-h-[400px]">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {bannerSectionData.map((banner) => (
          <SwiperSlide key={banner.id}>
            <header>
              <div
                className="w-full bg-center bg-cover h-[100vh] relative"
                style={{
                  backgroundImage: `url(${banner.img})`,
                }}
              >
                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b h-[100vh] from-gray-900/40 to-gray-900/80"></div>

                <div className="flex items-center justify-center w-full h-full relative">
                  <div className="text-center text-white">
                    {/* Subtle animation for text */}
                    <h1 className="text-4xl font-semibold lg:text-5xl animate-fadeInUp">
                      {banner.title}
                    </h1>
                    {/* Call to action with a modern button design */}
                    <button className="px-6 py-3 mt-6 font-medium text-sm lg:text-base transition-all bg-gradient-to-r from-blue-500 to-purple-600 rounded-md hover:from-blue-600 hover:to-purple-700 hover:scale-105 focus:outline-none">
                      Start Project
                    </button>
                  </div>
                </div>
              </div>
            </header>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSection;
