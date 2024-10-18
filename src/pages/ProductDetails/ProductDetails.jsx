import React, { useState } from "react";
import Container from "../../components/Common/Container";
import { HiOutlineShoppingCart } from "react-icons/hi";
import ReactImageMagnify from "react-image-magnify";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();
  const productData = location?.state?.productData;

  if (!productData) {
    return <div>Loading...</div>; // Or handle it as per your design
  }

  const relatedProducts = [
    {
      id: 1,
      title: "Product A",
      price: 79.99,
      image: "https://images.pexels.com/photos/142520/pexels-photo-142520.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "Product B",
      price: 89.99,
      image: "https://images.pexels.com/photos/142520/pexels-photo-142520.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="my-20">
      <Container>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
            <div className="flex flex-col items-center">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Product Image",
                    isFluidWidth: true,
                    src: productData.images[selectedImageIndex],
                  },
                  largeImage: {
                    src: productData.images[selectedImageIndex],
                    width: 790,
                    height: 1000,
                  },
                  enlargedImageContainerDimensions: {
                    width: "100%",
                    height: "100%",
                  },
                  lencStyle: {
                    display: "none",
                  },
                  imageClassName: "rounded-md",
                }}
              />
              <div className="flex space-x-2 mt-4 overflow-x-auto">
                {productData.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Product ${index + 1}`}
                    className={`w-16 h-16 object-cover cursor-pointer rounded-md transition-all duration-300 ${
                      selectedImageIndex === index
                        ? "border-2 border-blue-500 shadow-md"
                        : "opacity-70 hover:opacity-100"
                    }`}
                    onClick={() => setSelectedImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-bold">{productData.title}</h1>
              <p className="text-2xl text-red-600 font-semibold mt-2">
                ${productData.price.offered_price.toFixed(2)}
              </p>

              <p className="text-gray-600 mt-4">
                {productData.description}
              </p>

              <div className="mt-4">
                <h3 className="text-lg font-semibold">Ingredients:</h3>
                {/* <ul className="list-disc ml-6 text-gray-700 mt-2">
                  {productData.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul> */}
              </div>

              <p className="text-sm text-green-600 font-medium mt-2">
                In Stock - Order now and get it delivered within 3-5 business
                days.
              </p>

              <div className="mt-8 flex gap-4 ">
                <a
                  className="inline-flex items-center gap-2 duration-500 rounded border border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                  href="#"
                >
                  <span className="text-sm font-medium"> Buy now </span>
                  <svg
                    className="size-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 duration-300"
                  href="#"
                >
                  <HiOutlineShoppingCart className="size-5 rtl:rotate-180" />
                  <span className="text-sm font-medium"> Add to cart </span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
              {relatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="border p-4 rounded-lg hover:shadow-md transition-shadow duration-300"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <h3 className="mt-4 text-lg font-semibold">
                    {product.title}
                  </h3>
                  <p className="text-red-600 font-medium">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
