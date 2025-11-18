import React from "react";
import fac1 from "../../assets/fac1.png";
import fac2 from "../../assets/fac2.png";
const Facilities = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <div className=" mx-auto p-4 sm:p-6 lg:p-8">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-10 lg:p-12 shadow-lg">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12 gap-9 md:gap-3">
                  <div className="w-full md:w-1/2 flex flex-1 justify-center order-2 md:order-1">
                    <div className="relative w-full max-w-sm aspect-[2/1]">
                      <div className="absolute inset-0 bg-white/50  my-4 md:border-r-4 border-dashed border-gray-400 p-4 flex items-center justify-center">
                        <img src={fac1} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 order-1 flex-2 md:order-2 my-auto">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                      Live Parcel Tracking
                    </h2>
                    <p className="text-md text-gray-500 leading-relaxed">
                      Stay updated in real-time with our live parcel tracking
                      feature. From pick-up to delivery, monitor your shipment's
                      journey and get instant status updates for complete peace
                      of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mx-auto p-4 sm:p-6 lg:p-8">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-10 lg:p-12 shadow-lg">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12 gap-9 md:gap-3">
                  <div className="w-full md:w-1/2 flex flex-1 justify-center order-2 md:order-1">
                    <div className="relative w-full max-w-sm aspect-[2/1]">
                      <div className="absolute inset-0 bg-white/50  my-4 md:border-r-4 border-dashed border-gray-400 p-4 flex items-center justify-center">
                        <img src={fac2} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex-2 md:w-1/2 order-1 md:order-2 my-auto">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                      100% Safe Delivery
                    </h2>
                    <p className="text-md text-gray-500 leading-relaxed">
                      We ensure your parcels are handled with the utmost care
                      and delivered securely to their destination. Our reliable
                      process guarantees safe and damage-free delivery every
                      time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mx-auto p-4 sm:p-6 lg:p-8">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-10 lg:p-12 shadow-lg">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12 gap-9 md:gap-3">
                  <div className="w-full md:w-1/2 flex flex-1 justify-center order-2 md:order-1">
                    <div className="relative w-full max-w-sm aspect-[2/1]">
                      <div className="absolute inset-0 bg-white/50  my-4 md:border-r-4 border-dashed border-gray-400 p-4 flex items-center justify-center">
                        <img src={fac2} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex-2 md:w-1/2 order-1 md:order-2 my-auto">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                      24/7 Call Center Support
                    </h2>
                    <p className="text-md text-gray-500 leading-relaxed">
                      Our dedicated support team is available around the clock
                      to assist you with any questions, updates, or delivery
                      concerns—anytime you need us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities;
