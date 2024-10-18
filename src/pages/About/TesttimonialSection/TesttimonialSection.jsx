import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Container from "../../../components/Common/Container";

const TestimonialSection = () => {
  const testimonialData = [
    {
      id: 1,
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nunc, eget aliquam nisl nisl sit amet nisl.",
      company: "ABC Company",
      designation: "CEO",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://randomuser.me/api/portraits/women/47.jpg",
      description:
        "Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta.",
      company: "XYZ Inc.",
      designation: "CTO",
    },
    {
      id: 3,
      name: "Michael Johnson",
      image: "https://randomuser.me/api/portraits/men/48.jpg",
      description:
        "Phasellus vel arcu sit amet purus fermentum cursus. Integer gravida nulla quis quam ultrices aliquet.",
      company: "Tech Solutions",
      designation: "Lead Developer",
    },
    {
      id: 4,
      name: "Emily Davis",
      image: "https://randomuser.me/api/portraits/women/49.jpg",
      description:
        "Aenean et sodales purus. Nulla facilisi. Proin vel orci eget mauris consequat pharetra.",
      company: "Creative Agency",
      designation: "Marketing Manager",
    },
    {
      id: 5,
      name: "William Brown",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
      description:
        "Suspendisse potenti. Integer fringilla, purus ut placerat dapibus, lorem ligula suscipit risus, ac dapibus mi lorem eget mauris.",
      company: "Innovatech",
      designation: "Product Manager",
    },
    {
      id: 6,
      name: "Olivia Wilson",
      image: "https://randomuser.me/api/portraits/women/51.jpg",
      description:
        "Fusce non nisi pretium, convallis ligula in, eleifend justo. Integer lacinia felis at purus pellentesque, ac scelerisque quam aliquet.",
      company: "Design Studio",
      designation: "Art Director",
    },
    {
      id: 7,
      name: "James Anderson",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      description:
        "Etiam posuere ex eget nisl lobortis, ac malesuada metus fermentum. Nam bibendum nisi vel augue dictum, sit amet pharetra metus venenatis.",
      company: "Financial Group",
      designation: "CFO",
    },
    {
      id: 8,
      name: "Sophia Martinez",
      image: "https://randomuser.me/api/portraits/women/53.jpg",
      description:
        "Praesent vitae nulla malesuada, sagittis libero id, tempus sapien. Donec eu erat euismod, congue elit vel, consequat elit.",
      company: "Media Corp",
      designation: "Content Strategist",
    },
    {
      id: 9,
      name: "David Taylor",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      description:
        "Curabitur hendrerit augue at libero aliquam, non condimentum quam hendrerit. Integer nec bibendum lacus, ac cursus est.",
      company: "E-commerce Ltd.",
      designation: "Operations Manager",
    },
    {
      id: 10,
      name: "Isabella Lee",
      image: "https://randomuser.me/api/portraits/women/55.jpg",
      description:
        "Nam convallis, orci ac vehicula fermentum, tortor sapien molestie erat, sed interdum nunc velit sit amet est.",
      company: "HealthTech",
      designation: "HR Manager",
    },
  ];

  return (
    <Container>
      <div>
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 my-16 text-center">
          Testimonials
        </h1>
        <Swiper
          slidesPerView={3} // Display 3 testimonials at a time
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">
                  {testimonial.description}
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {testimonial.designation}
                    </span>
                  </span>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default TestimonialSection;
