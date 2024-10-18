import React from "react";
import brand_01 from "../../../assets/images/client_logo/brand-1.png";
import brand_02 from "../../../assets/images/client_logo/brand-2.png";
import brand_03 from "../../../assets/images/client_logo/brand-3.png";
import brand_04 from "../../../assets/images/client_logo/brand-4.png";
import brand_05 from "../../../assets/images/client_logo/brand-5.png";
import brand_06 from "../../../assets/images/client_logo/brand-6.png";
import brand_07 from "../../../assets/images/client_logo/brand-7.png";
import brand_08 from "../../../assets/images/client_logo/brand-8.png";
import brand_09 from "../../../assets/images/client_logo/brand-9.png";
import brand_10 from "../../../assets/images/client_logo/brand-10.png";
import brand_11 from "../../../assets/images/client_logo/brand-11.png";
import brand_12 from "../../../assets/images/client_logo/brand-12.png";
import Container from "../../../components/Common/Container";

const ClientSectionThree = () => {
  const clientData = [
    {
      id: 1,
      image: brand_01,
    },
    {
      id: 2,
      image: brand_02,
    },
    {
      id: 3,
      image: brand_03,
    },
    {
      id: 4,
      image: brand_04,
    },
    {
      id: 5,
      image: brand_05,
    },
    {
      id: 6,
      image: brand_06,
    },
    {
      id: 7,
      image: brand_07,
    },
    {
      id: 8,
      image: brand_08,
    },
    {
      id: 9,
      image: brand_09,
    },
    {
      id: 10,
      image: brand_10,
    },
    {
      id: 11,
      image: brand_11,
    },
    {
      id: 12,
      image: brand_12,
    },
  ];

  return (
    <div>
      <Container>
        <div className="py-12 bg-gray-50">
          <h1 className="text-3xl font-bold text-center mb-8">Our Clients</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
            {clientData.map((client) => (
              <div key={client.id} className="flex items-center w-[194px] h-[100px] justify-center">
                <img
                  src={client.image}
                  alt={`Client ${client.id}`}
                  className="w-full h-full px-10 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ClientSectionThree;
