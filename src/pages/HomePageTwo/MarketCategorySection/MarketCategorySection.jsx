import React from "react";
import SectionTitle from "../../../components/Common/SectionTitle";
import Container from "../../../components/Common/Container";

const MarketCategorySection = () => {
  const marketCategorySectionData = [
    {
      id: 1,
      title: "Sofa",
      img: "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "Dining Table",
      img: "https://images.pexels.com/photos/271696/pexels-photo-271696.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Bed",
      img: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      title: "Chair",
      img: "https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      title: "Wardrobe",
      img: "https://images.pexels.com/photos/271722/pexels-photo-271722.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      title: "Bookshelf",
      img: "https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 7,
      title: "Coffee Table",
      img: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 8,
      title: "TV Stand",
      img: "https://images.pexels.com/photos/15396235/pexels-photo-15396235/free-photo-of-people-sitting-at-a-business-meeting-and-looking-at-two-men-doing-a-presentation.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 9,
      title: "Recliner",
      img: "https://images.pexels.com/photos/27177148/pexels-photo-27177148/free-photo-of-a-toddler-sitting-on-the-floor-playing-with-a-cell-phone.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 10,
      title: "Desk",
      img: "https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 11,
      title: "Nightstand",
      img: "https://images.pexels.com/photos/1571450/pexels-photo-1571450.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 12,
      title: "Outdoor Furniture",
      img: "https://images.pexels.com/photos/271815/pexels-photo-271815.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 13,
      title: "Ottoman",
      img: "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 14,
      title: "Console Table",
      img: "https://images.pexels.com/photos/7214731/pexels-photo-7214731.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 15,
      title: "Cabinet",
      img: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 16,
      title: "Accent Chair",
      img: "https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="my-16">
      <Container>
        <div>
          <SectionTitle title={"My Market Category"} />
          <div className="grid grid-cols-2 sm:grid-cols-8 gap-8 mt-8">
            {marketCategorySectionData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center gap-4 cursor-pointer"
              >
                <div className="w-[112px] h-[112px] rounded-full overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-center">{item.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MarketCategorySection;
