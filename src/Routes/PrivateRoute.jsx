import React from "react";
import useAuth from "../hooks/useAuth/useAuth";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuth();
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate state={location?.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
