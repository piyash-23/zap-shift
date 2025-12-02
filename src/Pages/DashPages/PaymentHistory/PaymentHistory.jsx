import React from "react";
import useAuth from "../../../hooks/useAuth/useAuth";
import useAxiosSecure from "../../../hooks/Axios/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      return res.data;
    },
  });
  console.log(payments);
  return (
    <div>
      <div>
        <h2 className="text-5xl font-extrabold text-primary">
          Payment History: {payments.length}
        </h2>
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Transaction</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {payments.map((payment, i) => (
                  <tr key={payment._id}>
                    <th>{i + 1}</th>
                    <td>{payment.parcelName}</td>
                    <td>{payment.transactionId}</td>
                    <td>{payment.amount} taka</td>
                  </tr>
                ))}
                {/* <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
