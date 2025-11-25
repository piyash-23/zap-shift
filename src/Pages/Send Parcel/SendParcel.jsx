import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      parcelType: "document", // Default selected
    },
  });
  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  const senderRegion = watch("senderRegion");
  const reciverRegion = watch("receiverRegion");
  const districtByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const disctricts = regionDistricts.map((d) => d.district);
    return disctricts;
  };
  //   console.log(regions);

  const [parcelType, setParcelType] = useState("document");

  const onSubmit = (data) => {
    // Merging the local state with form data just to be sure,
    // though the hidden input registers it too.
    const finalData = { ...data, parcelType };
    console.log("Booking Data:", finalData);
  };

  // Custom Radio Button Component for "Document" vs "Not-Document"
  const RadioOption = ({ value, label }) => (
    <div
      className="flex items-center cursor-pointer mr-8"
      onClick={() => setParcelType(value)}
    >
      <div
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-2 ${
          parcelType === value ? "border-[#00897b]" : "border-gray-300"
        }`}
      >
        {parcelType === value && (
          <div className="w-3 h-3 rounded-full bg-[#00897b]"></div>
        )}
      </div>
      <span
        className={`text-sm font-semibold ${
          parcelType === value ? "text-gray-800" : "text-gray-500"
        }`}
      >
        {label}
      </span>
      {/* Hidden input to register with react-hook-form */}
      <input
        type="radio"
        value={value}
        className="hidden"
        {...register("parcelType")}
        checked={parcelType === value}
        readOnly
      />
    </div>
  );

  return (
    <div className="rounded-[20px] my-5 bg-white p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          Send A Parcel
        </h1>
        <h2 className="text-xl font-bold text-primary mb-6">
          Enter your parcel details
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Radio Buttons */}
          <div className="flex flex-row mb-8">
            <RadioOption value="document" label="Document" />
            <RadioOption value="not-document" label="Not-Document" />
          </div>

          {/* Top Row: Parcel Name & Weight */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-800 mb-1">
                Parcel Name
              </label>
              <input
                type="text"
                placeholder="Parcel Name"
                className={`w-full border ${
                  errors.parcelName ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#004d40] transition`}
                {...register("parcelName", { required: true })}
              />
              {errors.parcelName && (
                <span className="text-red-500 text-xs mt-1">Required</span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-800 mb-1">
                Parcel Weight (KG)
              </label>
              <input
                type="number"
                placeholder="Parcel Weight (KG)"
                className={`w-full border ${
                  errors.parcelWeight ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#004d40] transition`}
                {...register("parcelWeight", { required: true })}
              />
              {errors.parcelWeight && (
                <span className="text-red-500 text-xs mt-1">Required</span>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 mb-8"></div>

          {/* Main Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {/* Left Column: Sender Details */}
            <div className="space-y-5">
              <h3 className="text-lg font-bold text-[#004d40]">
                Sender Details
              </h3>

              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-800 mb-1">
                  Sender Name
                </label>
                <input
                  type="text"
                  placeholder="Sender Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#004d40] transition"
                  {...register("senderName", { required: true })}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-800 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#004d40] transition"
                  {...register("senderAddress", { required: true })}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-800 mb-1">
                  Sender Phone No
                </label>
                <input
                  type="tel"
                  placeholder="Sender Phone No"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#004d40] transition"
                  {...register("senderPhone", { required: true })}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-800 mb-1">
                  Your Region
                </label>
                <div className="relative">
                  <select
                    className="w-full appearance-none border border-gray-300 rounded-lg px-4 py-3 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#004d40] transition"
                    defaultValue=""
                    {...register("senderRegion", { required: true })}
                  >
                    <option value="" disabled>
                      Select your region
                    </option>
                    {regions.map((r, index) => (
                      <option key={index} value={r}>
                        {r}
                      </option>
                    ))}
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
              </div>

              {/* your distircts */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-800 mb-1">
                  Your Disctrit
                </label>
                <div className="relative">
                  <select
                    className="w-full appearance-none border border-gray-300 rounded-lg px-4 py-3 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#004d40] transition"
                    defaultValue=""
                    {...register("senderDistrict", { required: true })}
                  >
                    <option value="" disabled>
                      Select your District
                    </option>
                    {districtByRegion(senderRegion).map((r, index) => (
                      <option key={index} value={r}>
                        {r}
                      </option>
                    ))}
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
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-800 mb-1">
                  Pickup Instruction
                </label>
                <textarea
                  rows="3"
                  placeholder="Pickup Instruction"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#004d40] transition resize-none"
                  {...register("pickupInstruction")}
                />
              </div>
            </div>

            {/* Right Column: Receiver Details */}
            <div className="space-y-5">
              <h3 className="text-lg font-bold text-[#004d40]">
                Receiver Details
              </h3>

              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-800 mb-1">
                  Receiver Name
                </label>
                <input
                  type="text"
                  placeholder="Receiver Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#004d40] transition"
                  {...register("receiverName", { required: true })}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-800 mb-1">
                  Receiver Address
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#004d40] transition"
                  {...register("receiverAddress", { required: true })}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-800 mb-1">
                  Receiver Contact No
                </label>
                <input
                  type="tel"
                  placeholder="Sender Contact No"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#004d40] transition"
                  {...register("receiverContact", { required: true })}
                />
              </div>
              {/* reciver region */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-800 mb-1">
                  Receiver Region
                </label>
                <div className="relative">
                  <select
                    className="w-full appearance-none border border-gray-300 rounded-lg px-4 py-3 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#004d40] transition"
                    defaultValue=""
                    {...register("receiverRegion", { required: true })}
                  >
                    <option value="" disabled>
                      Select your District
                    </option>
                    {regions.map((r, index) => (
                      <option key={index} value={r}>
                        {r}
                      </option>
                    ))}
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
              </div>
              {/* reciver district */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-800 mb-1">
                  Receiver District
                </label>
                <div className="relative">
                  <select
                    className="w-full appearance-none border border-gray-300 rounded-lg px-4 py-3 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#004d40] transition"
                    defaultValue=""
                    {...register("receiverDistrict", { required: true })}
                  >
                    <option value="" disabled>
                      Select Reciver District
                    </option>
                    {districtByRegion(reciverRegion).map((r, index) => (
                      <option key={index} value={r}>
                        {r}
                      </option>
                    ))}
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
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-800 mb-1">
                  Delivery Instruction
                </label>
                <textarea
                  rows="3"
                  placeholder="Delivery Instruction"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#004d40] transition resize-none"
                  {...register("deliveryInstruction")}
                />
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="mt-8">
            <p className="text-sm text-gray-900 mb-4 font-medium">
              * PickUp Time 4pm-7pm Approx.
            </p>

            <button
              type="submit"
              className="bg-secondary hover:bg-primary hover:text-white cursor-pointer text-black font-bold text-sm md:text-base px-10 py-3 rounded-md shadow-sm transition-colors duration-200"
            >
              Proceed to Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendParcel;
