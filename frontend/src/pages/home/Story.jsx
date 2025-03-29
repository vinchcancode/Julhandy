import React from "react";
import StoryImage from "../../assets/StoryImage.png";

const Story = () => {
  return (
    <div className="max-w-5xl mx-auto mt-4 py-5">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>

      {/* Content Wrapper - Text & Image Side by Side */}
      <div className="flex flex-col md:flex-row items-center md:items-start text-left gap-8">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <p className="text-xl/8 leading-relaxed font-secondary font-extralight max-sm:text-md px-2">
            At Any Way Flooring Australia, we specialize in premium, custom-made
            wide plank hardwood flooring and other hardwood products for
            design-focused clients. With over 20 years of experience, we tailor
            each product's texture, finish, and platform to individual
            preferences. Unlike generic flooring companies, we salvage and
            manufacture unique local wood species like Texas Post Oak, Southern
            Pecan, Live Sawn Oak, and Texas Mesquite. Our signature Natural Face
            Wide Plank flooring is sought after by top designers, architects,
            and homeowners. Committed to sustainability, we repurpose raw
            materials to support the environment and the local economy while
            creating truly unique flooring solutions.
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
