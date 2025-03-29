import React from "react";
import img1 from "../../assets/bgImage1.png";
import img2 from "../../assets/bgImage2.png";
import img3 from "../../assets/bgImage3.png";
import { Link } from "react-router-dom";

const Craft = () => {
  return (
    <div className="w-screen h-[500px] flex overflow-hidden mt-5 max-sm:flex-col max-sm:overflow-auto">
      {/* Image 1 with Text Overlay */}
      <div className="relative flex-1">
        <img className="w-full h-full object-cover" src={img1} alt="Image 1" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
          <h3 className="h-20 text-center text-2xl font-bold">
            THOUGHTFULLY SOURCED
          </h3>
          <p className="h-32 text-center w-3/4 mt-2">
            We manufacture sustainable hardwood products by salvaging the
            natural resources around us.
          </p>
          <Link className="mt-28" to="/About">
            READ MORE
          </Link>
        </div>
      </div>

      {/* Image 2 with Text Overlay */}
      <div className="relative flex-1">
        <img className="w-full h-full object-cover" src={img2} alt="Image 2" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
          <h3 className="h-20 text-2xl font-bold">LOCALLY MADE</h3>
          <p className="h-32 text-center w-3/4 mt-2">
            We control the entire process from forest to floor, sourcing all raw
            materials from within the United States.
          </p>
          <Link className="mt-28" to="/About">
            READ MORE
          </Link>
        </div>
      </div>

      {/* Image 3 with Text Overlay */}
      <div className="relative flex-1">
        <img className="w-full h-full object-cover" src={img3} alt="Image 3" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
          <h3 className="h-20 text-center text-2xl font-bold">
            AUTHENTICALLY CRAFTED
          </h3>
          <p className="h-32 text-center w-3/4 mt-2">
            We use old-school methods to finish each and every piece by hand,
            creating an unparalleled hardwood product.
          </p>
          <Link className="mt-28" to="/About">
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Craft;
