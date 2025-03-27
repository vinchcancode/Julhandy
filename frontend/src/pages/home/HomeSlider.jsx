import React from "react";
import bannerHome from "../../assets/banner.png";

const HomeSlider = () => {
  return (
    <div className="w-screen h-[700px] overflow-hidden">
      <img className="w-full h-full object-cover" src={bannerHome} alt="" />
    </div>
  );
};

export default HomeSlider;
