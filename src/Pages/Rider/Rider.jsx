import React from "react";
import { useForm } from "react-hook-form";
import rider from "../../assets/rider.png";

const Rider = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className=" bg-white flex items-center justify-center p-4 font-sans rounded-[20px] my-5 py-5">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Side - Form Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          {/* Header Text */}
          <div className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-4">
              Be a Rider
            </h1>
            <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
              Enjoy fast, reliable parcel delivery with real-time tracking and
              zero hassle. From personal packages to business shipments — we
              deliver on time, every time.
            </p>
          </div>

          <div className="border-t border-gray-100 mb-8 w-full"></div>

          {/* Form Title */}
          <h2 className="text-2xl font-bold text-[#004d40] mb-6">
            Tell us about yourself
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-800 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#004d40] transition duration-200`}
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs mt-1">
                    Name is required
                  </span>
                )}
              </div>

              {/* Age */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-800 mb-1">
                  Your Age
                </label>
                <input
                  type="number"
                  placeholder="Your Age"
                  className={`w-full border ${
                    errors.age ? "border-red-500" : "border-gray-300"
                  } rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#004d40] transition duration-200`}
                  {...register("age", { required: true, min: 18 })}
                />
                {errors.age && (
                  <span className="text-red-500 text-xs mt-1">
                    Valid age (18+) is required
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-800 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`w-full border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#004d40] transition duration-200`}
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1">
                    Valid email is required
                  </span>
                )}
              </div>

              {/* District Dropdown */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-800 mb-1">
                  Your District
                </label>
                <div className="relative">
                  <select
                    className={`w-full appearance-none border ${
                      errors.district ? "border-red-500" : "border-gray-300"
                    } rounded-lg px-4 py-3 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#004d40] transition duration-200`}
                    defaultValue=""
                    {...register("district", { required: true })}
                  >
                    <option value="" disabled>
                      Select your District
                    </option>
                    <option value="dhaka">Dhaka</option>
                    <option value="chittagong">Chittagong</option>
                    <option value="sylhet">Sylhet</option>
                    <option value="khulna">Khulna</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {errors.district && (
                  <span className="text-red-500 text-xs mt-1">
                    District is required
                  </span>
                )}
              </div>

              {/* NID No */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-800 mb-1">
                  NID No
                </label>
                <input
                  type="text"
                  placeholder="NID"
                  className={`w-full border ${
                    errors.nid ? "border-red-500" : "border-gray-300"
                  } rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#004d40] transition duration-200`}
                  {...register("nid", { required: true })}
                />
                {errors.nid && (
                  <span className="text-red-500 text-xs mt-1">
                    NID is required
                  </span>
                )}
              </div>

              {/* Contact */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-800 mb-1">
                  Contact
                </label>
                <input
                  type="tel"
                  placeholder="Contact"
                  className={`w-full border ${
                    errors.contact ? "border-red-500" : "border-gray-300"
                  } rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#004d40] transition duration-200`}
                  {...register("contact", { required: true })}
                />
                {errors.contact && (
                  <span className="text-red-500 text-xs mt-1">
                    Contact number is required
                  </span>
                )}
              </div>
            </div>

            {/* Warehouse Dropdown - Full Width */}
            <div className="flex flex-col mt-4">
              <label className="text-sm font-semibold text-gray-800 mb-1">
                Which warehouse you want to work?
              </label>
              <div className="relative">
                <select
                  className={`w-full appearance-none border ${
                    errors.warehouse ? "border-red-500" : "border-gray-300"
                  } rounded-lg px-4 py-3 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#004d40] transition duration-200`}
                  defaultValue=""
                  {...register("warehouse", { required: true })}
                >
                  <option value="" disabled>
                    Select warehouse
                  </option>
                  <option value="warehouse_a">Warehouse A - Central</option>
                  <option value="warehouse_b">Warehouse B - North</option>
                  <option value="warehouse_c">Warehouse C - South</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              {errors.warehouse && (
                <span className="text-red-500 text-xs mt-1">
                  Please select a warehouse
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-secondary hover:bg-primary hover:text-white text-black font-bold text-lg py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 mt-6 cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center relative">
          <div className="relative w-full max-w-lg">
            <img
              src={rider}
              alt="Delivery Rider"
              className="w-full h-auto object-contain drop-shadow-xl rounded-xl"
            />

            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100 bg-opacity-50 -z-10 rounded-xl">
              <span className="text-gray-400 font-medium">
                Your Rider Image Here
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rider;
