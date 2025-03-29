import React from "react";
import bannerHome from "../../assets/banner.png";

const HomeSlider = () => {
  return (
    <div className="relative w-screen h-[700px]">
      {/* Text Overlay */}
      <h2 className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold text-center">
        Makers of Architectural Wood Products
      </h2>

      {/* Background Image */}
      <img className="w-full h-full object-cover" src={bannerHome} alt="" />
    </div>
  );
};

export default HomeSlider;
