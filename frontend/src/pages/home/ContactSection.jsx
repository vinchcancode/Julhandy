import React from "react";
import contactbg from "../../assets/contactbg.png";

const ContactSection = () => {
  return (
    <div className="relative w-screen h-[800px] overflow-hidden">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover"
        src={contactbg}
        alt="Background"
      />

      {/* Contact Form Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/90 max-w-xl w-full p-8 shadow-lg">
          {/* Header */}
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Call us at 979-213-6846 or email{" "}
            <a href="mailto:info@halewooddesigns.net" className="text-blue-600">
              info@halewooddesigns.net
            </a>
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 mb-6 text-gray-700">
            <i className="fab fa-facebook text-2xl"></i>
            <i className="fab fa-twitter text-2xl"></i>
            <i className="fab fa-youtube text-2xl"></i>
            <i className="fab fa-pinterest text-2xl"></i>
            <i className="fab fa-instagram text-2xl"></i>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                className="flex-1 p-3 border border-gray-300 rounded-md"
                type="text"
                placeholder="First Name *"
                required
              />
              <input
                className="flex-1 p-3 border border-gray-300 rounded-md"
                type="text"
                placeholder="Last Name *"
                required
              />
            </div>
            <input
              className="w-full p-3 border border-gray-300 rounded-md"
              type="email"
              placeholder="Email *"
              required
            />
            <input
              className="w-full p-3 border border-gray-300 rounded-md"
              type="tel"
              placeholder="Phone *"
              required
            />
            <input
              className="w-full p-3 border border-gray-300 rounded-md"
              type="text"
              placeholder="Project Location"
            />
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md h-32"
              placeholder="Message *"
              required
            ></textarea>

            {/* Submit Button */}
            <button className="w-full bg-black text-white py-3 rounded-md text-lg font-semibold hover:bg-gray-800">
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
