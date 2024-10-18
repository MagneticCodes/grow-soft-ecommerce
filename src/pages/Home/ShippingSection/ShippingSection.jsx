import React from "react";
import Container from "../../../components/Common/Container";
import shippingVan from "../../../assets/icons/shippingcart.svg";
import secureicon from "../../../assets/icons/secureicon.svg";
import returnicon from "../../../assets/icons/returnicon.svg";
import qualityicon from "../../../assets/icons/qualityicon.svg";

const ShippingSection = () => {
  return (
    <div className="py-20">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="flex items-center gap-3">
            <img
              src={shippingVan}
              alt="Shipping Van"
              className="w-6 h-6 mr-2"
            />
            <div>
              <h1 className="">Free Shipping</h1>
              <p className="text-sm text-gray-600">When Ordering over $100</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img src={returnicon} alt="Shipping Van" className="w-6 h-6 mr-2" />
            <div>
              <h1 className="">Free Return</h1>
              <p className="text-sm text-gray-600">Get Return within 30 days</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img src={secureicon} alt="Shipping Van" className="w-6 h-6 mr-2" />
            <div>
              <h1 className="">Secure Payment</h1>
              <p className="text-sm text-gray-600">
                100% Secure Online Payment
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img
              src={qualityicon}
              alt="Shipping Van"
              className="w-6 h-6 mr-2"
            />
            <div>
              <h1 className="">Best Quality</h1>
              <p className="text-sm text-gray-600">
                Original Product Guarented
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShippingSection;
