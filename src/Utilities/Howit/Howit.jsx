import React from "react";
import delivery from "../../assets/delivery.png";

const Howit = () => {
  return (
    <>
      <div>
        <h1 className="font-extrabold text-lg">How it Works</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-3">
        <div className="shadow-lg rounded-lg p-5">
          <img src={delivery} />
          <h2 className="text-lg font-bold my-3">Booking Pick & Drop</h2>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="shadow-lg rounded-lg p-5">
          <img src={delivery} />
          <h2 className="text-lg font-bold my-3">Cash On Delivery</h2>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="shadow-lg rounded-lg p-5">
          <img src={delivery} />
          <h2 className="text-lg font-bold my-3">Delivery Hub</h2>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="shadow-lg rounded-lg p-5">
          <img src={delivery} />
          <h2 className="text-lg font-bold my-3">Booking SME & Corporate</h2>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </>
  );
};

export default Howit;
