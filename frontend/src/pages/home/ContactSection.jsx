import React from "react";
import contactbg from "../../assets/contactbg.png";
import { useForm } from "react-hook-form";
import getIntouch from "../../assets/GetInTouch3.png";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const formData = {
      access_key: "9b543a61-2483-44e3-af1d-559e031ec31e", // Replace with your actual Web3Forms key
      ...data,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");
        reset(); // Reset form after submission
      } else {
        alert("Error sending message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };

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
          <img className="h-auto" src={getIntouch} alt="" />
          <p className="text-center text-gray-600 mb-6">
            Call us at 979-213-6846 or email{" "}
            <a href="mailto:info@halewooddesigns.net" className="text-blue-600">
              anywayflooring@gmail.com
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
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  className="w-full p-3 border border-gray-300 rounded-md"
                  type="text"
                  placeholder="First Name *"
                  {...register("first_name", {
                    required: "First name is required",
                  })}
                />
                {errors.first_name && (
                  <p className="text-red-500">{errors.first_name.message}</p>
                )}
              </div>
              <div className="flex-1">
                <input
                  className="w-full p-3 border border-gray-300 rounded-md"
                  type="text"
                  placeholder="Last Name *"
                  {...register("last_name", {
                    required: "Last name is required",
                  })}
                />
                {errors.last_name && (
                  <p className="text-red-500">{errors.last_name.message}</p>
                )}
              </div>
            </div>

            <input
              className="w-full p-3 border border-gray-300 rounded-md"
              type="email"
              placeholder="Email *"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <input
              className="w-full p-3 border border-gray-300 rounded-md"
              type="tel"
              placeholder="Phone *"
              {...register("phone", { required: "Phone number is required" })}
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}

            <input
              className="w-full p-3 border border-gray-300 rounded-md"
              type="text"
              placeholder="Project Location"
              {...register("project_location")}
            />

            <textarea
              className="w-full p-3 border border-gray-300 rounded-md h-32"
              placeholder="Message *"
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md text-lg font-semibold hover:bg-gray-800"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
