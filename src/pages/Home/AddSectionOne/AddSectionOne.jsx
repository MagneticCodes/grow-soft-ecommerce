import React from "react";
import addImg_01 from "../../../assets/images/ads-3.png";
import Container from "../../../components/Common/Container";

const AddSectionOne = ({img}) => {
  return (
    <div>
      <Container>
        <div className=" my-10">
          <img className="rounded-lg" src={img} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default AddSectionOne;
