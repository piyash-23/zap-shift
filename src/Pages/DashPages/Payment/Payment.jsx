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
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }
  return (
    <div>
      <div>Please Pay for: {parcel.parcelName}</div>
      <button className="btn bg-primary btn-sm text-white">Pay now</button>
    </div>
  );
};

export default Payment;
