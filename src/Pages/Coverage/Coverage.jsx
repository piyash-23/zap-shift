import React from "react";
import Map from "./Maps/Map";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const warehouses = useLoaderData();
  return (
    <>
      <div>
        <Map warehouses={warehouses}></Map>
      </div>
    </>
  );
};

export default Coverage;
