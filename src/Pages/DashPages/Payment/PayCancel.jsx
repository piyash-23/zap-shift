import React from "react";
import { Link } from "react-router";

const PayCancel = () => {
  return (
    <div>
      <div>
        <h2>Vaya mara kheye geso tomar to payment cancel</h2>
        <Link
          to={"/dashboard/my-parcels"}
          className="btn btn-primary text-white"
        >
          Try again
        </Link>
      </div>
    </div>
  );
};

export default PayCancel;
