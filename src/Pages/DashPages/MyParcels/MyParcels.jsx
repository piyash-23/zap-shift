import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth/useAuth";
import useAxiosSecure from "../../../hooks/Axios/useAxiosSecure";

const MyParcels = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  // console.log(user.email);
  const { data: parcels = [] } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      // console.log(res.data);
      return res.data;
    },
  });
  return (
    <div>
      <div>All of my parcels: {parcels.length}</div>
      {/* table here */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Parcel Name</th>
              <th>Parcel Type</th>
              <th>Bill</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td className="font-bold text-[16px]">{parcel.parcelName}</td>
                <td className="font-bold text-[16px]">{parcel.parcelType}</td>
                <td className="font-bold text-[16px]">{parcel.cost} Taka</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
