import React from "react";
import bookl from "../../assets/bookloca.png";
import { Link } from "react-router";
const Mercha = () => {
  return (
    <>
      <div className="mercha">
        <div className="flex justify-between items-center p-9">
          <div>
            <h2 className="text-[40px] text-white font-extrabold">
              Merchant and Customer Satisfaction is Our First Priority
            </h2>
            <p className="text-[#CCCCCC]">
              We offer the lowest delivery charge with the highest value along
              with 100% safety <br /> of your product. Pathao courier
              <br /> delivers your parcels in every corner of Bangladesh right
              on time.
            </p>
            <div className="my-5">
              <button>
                <Link className="btn pri-btn">Become a Merchant</Link>
              </button>
              <button>
                <Link className="btn sec-btn">Earn With ZapShift Courier</Link>
              </button>
            </div>
          </div>
          <div>
            <img src={bookl} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mercha;
