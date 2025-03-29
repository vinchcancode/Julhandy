import React from "react";
import LaminateFlooring from "../../assets/LaminateFlooring.png";
import HybridFloorign from "../../assets/hybrid-flooring.png";
import TimberFlooring from "../../assets/timber-flooring.png";
import Decking from "../../assets/decking.png";
import Bamboo from "../../assets/bamboo-flooring.png";

const Wood = () => {
  return (
    <div className="max-w-7xl flex flex-col justify-center mx-auto py-8">
      <h1 className="text-3xl max-sm:text-center">Flooring</h1>
      <p className="max-sm:px-2 text-sm">
        Your flooring is such an important part of how your home feels. As a
        fundamental part of your experience with your property, a new floor can
        completely revitalise a space, both in terms of livability and resale
        value. At KLD Home, we a e a leading provider of quality Australian home
        flooring solutions. For decades, we've had the pleasure of supporting
        Melbourne's homes and businesses with fantastic flooring in a range of
        styles and designs. Explore our range today, and make the right choice
        for your next renovation.
      </p>
      <div className="sm:flex mt-4 gap-4">
        <div className="flex-1">
          <img src={LaminateFlooring} alt="" />
          <p>Laminate Flooring</p>
        </div>
        <div className="flex-1">
          <img src={HybridFloorign} alt="" />
          <p>Hybrid</p>
        </div>
        <div className="flex-1">
          <img src={TimberFlooring} alt="" />
          <p>Timber</p>
        </div>
        <div className="flex-1">
          <img src={Decking} alt="" />
          <p>Decking</p>
        </div>
        <div className="flex-1">
          <img src={Bamboo} alt="" />
          <p>Bamboo</p>
        </div>
      </div>
    </div>
  );
};

export default Wood;
