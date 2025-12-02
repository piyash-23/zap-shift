import React, { useEffect } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../hooks/Axios/useAxiosSecure";

const PaySuccess = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const axiosSecure = useAxiosSecure();
  const sessionId = searchParams.get("session_id");
  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => console.log(res.data));
    }
  }, [sessionId, axiosSecure]);
  return (
    <div>
      <div>You have successfully wasted your money</div>
    </div>
  );
};

export default PaySuccess;
