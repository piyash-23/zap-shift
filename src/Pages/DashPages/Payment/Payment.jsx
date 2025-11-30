import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/Axios/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Payment = () => {
  const { parcelID } = useParams();
  const axiosSecure = useAxiosSecure();
  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcels", parcelID],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelID}`);
      return res.data;
    },
  });
  const handlePayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };
    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    console.log(res.data);
    window.location.href = res.data.url;
  };
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }
  return (
    <div>
      <div>
        Please Pay {parcel.cost} taka for: {parcel.parcelName}
      </div>
      <button
        onClick={handlePayment}
        className="btn bg-primary btn-sm text-white"
      >
        Pay now
      </button>
    </div>
  );
};

export default Payment;
