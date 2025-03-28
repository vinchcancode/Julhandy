import React from "react";
import StoryImage from "../assets/StoryImage.png";

const Story = () => {
  return (
    <div className="max-w-5xl mx-auto mt-4 py-5">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>

      {/* Content Wrapper - Text & Image Side by Side */}
      <div className="flex flex-col md:flex-row items-center md:items-start text-left gap-8">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <p className="text-lg leading-relaxed font-secondary font-extralight">
            At Any way flooring Australia, we intentionally source and
            manufacture premium wide plank hardwood flooring and other hardwood
            products for the design-oriented individual. Our niche products are
            made to order based on individual specifications and design styles.
            With over 20 years of experience, we work with each individual
            client to determine which product, texture, finish, and platform
            would best suit their design. This level of product customization
            and the manufacturing of our products is what sets us apart from
            generic flooring companies. Hardwood Design Company seeks to salvage
            and manufacture quality local wood species that would otherwise be
            burned or destroyed. Specializing in Texas Post Oak, Southern Pecan,
            Live Sawn Oak and Texas Mesquite we have become known in the
            industry as the leading manufacturer of these unique hardwood
            species. Our signature Natural Face Wide Plank flooring in desired
            among the world's most affluent interior designers, architects, and
            home owners. The use of such raw materials helps the environment,
            renews natural resources, and boosts the local economy. We choose to
            be different and see beauty where others don't. We sought to develop
            a product unlike any other on the market, and in doing so,
            discovered a product that was truly sustainable and unique.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-auto object-cover"
            src={StoryImage}
            alt="Our Story"
          />
        </div>
      </div>
    </div>
  );
};

export default Story;
