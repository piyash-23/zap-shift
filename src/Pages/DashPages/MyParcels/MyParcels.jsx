import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth/useAuth";
import useAxiosSecure from "../../../hooks/Axios/useAxiosSecure";
import { MdEditDocument } from "react-icons/md";
import { AiOutlineFolderView } from "react-icons/ai";
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcels = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  // console.log(user.email);
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      // console.log(res.data);
      return res.data;
    },
  });
  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          // console.log(res.data);
          if (res.data.deletedCount) {
            // refresh ui using refetch method
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your listing has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handlePayment = async (parcel) => {
    const paymentInfo = {
      cost: parcel.cost,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
      parcelId: parcel._id,
    };
    const res = await axiosSecure.post(
      "/payment-checkout-session",
      paymentInfo
    );
    console.log(res.data.url);
    window.location.assign(res.data.url);
  };
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
              <th>Payment</th>
              <th>Delivery Status</th>
              <th>Action</th>
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
                <td>
                  {parcel.paymentStatus === "paid" ? (
                    <span className="rounded-[10px] font-bold text-primary bg-green-400 text-primary p-3">
                      Paid
                    </span>
                  ) : (
                    <>
                      <Link
                        to={`/dashboard/checkout/${parcel._id}`}
                        className="btn bg-primary btn-sm text-white"
                      >
                        Pay From Page
                      </Link>
                      <button
                        onClick={() => handlePayment(parcel)}
                        className="btn bg-primary btn-sm text-white"
                      >
                        Pay Here
                      </button>
                    </>
                  )}
                </td>
                <td>{parcel.deliveryStatus}</td>
                <td>
                  <div>
                    <button className="btn btn-square hover:bg-primary hover:text-white text-primary bg-transparent">
                      <MdEditDocument />
                    </button>
                    <button className="btn btn-square mx-3 hover:bg-primary hover:text-white text-primary bg-transparent">
                      <AiOutlineFolderView />
                    </button>
                    <button
                      onClick={() => handleDelete(parcel._id)}
                      className="btn btn-square hover:bg-primary hover:text-white text-primary bg-transparent"
                    >
                      <FaTrashCan />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
