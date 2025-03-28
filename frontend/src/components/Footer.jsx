import React from "react";
import headerLogo from "../assets/Header-logo.png";

const Footer = () => {
  return (
    <div className="w-full py-8">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-between items-start px-6">
        {/* Left Section - Logo & Links */}
        <div className="w-1/2 min-w-[250px]">
          <img src={headerLogo} alt="Logo" className="w-36 mb-4" />
          <ul className="space-y-2 text-gray-700">
            <li className="hover:text-black cursor-pointer">Flooring</li>
            <li className="hover:text-black cursor-pointer">Renovation</li>
            <li className="hover:text-black cursor-pointer">Kitchen</li>
            <li className="hover:text-black cursor-pointer">Dining</li>
          </ul>
        </div>

        {/* Right Section - Contact Details & Map */}
        <div className="w-1/2 min-w-[320px] flex flex-col gap-4">
          <div>
            <p className="text-gray-800 font-semibold">
              Phone: <span className="font-normal">03 9562 6038</span>
            </p>
            <p className="text-gray-800 font-semibold">
              Email: <span className="font-normal">Julius@test.au</span>
            </p>
            <p className="text-gray-800 font-semibold">
              Address:{" "}
              <span className="font-normal">
                16 Fiveways Boulevard, Keysborough VIC 3173
              </span>
            </p>
          </div>
          <iframe
            className="w-full h-40 rounded-lg shadow"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2561435864816!2d144.9599283156596!3d-37.8136279797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df3a0b0a3%3A0x6d4c60928e2145b9!2sKLD%20Home%20Flooring%20%26%20Kitchen!5e0!3m2!1sen!2sau!4v1614312565610!5m2!1sen!2sau"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Bottom Section - Social Media */}
      <div className="text-center mt-6">
        <a href="#" className="text-gray-600 hover:text-black">
          <i className="fab fa-facebook text-2xl"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
