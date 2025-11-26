import axios from "axios";
import React from "react";

const axiosSecurer = axios.create({
  baseURL: "http://localhost:4000",
});

const useAxiosSecure = () => {
  return axiosSecurer;
};

export default useAxiosSecure;
