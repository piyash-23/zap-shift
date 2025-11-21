import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/Main/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch("/reviews.json").then((res) => res.json()),
        Component: Home,
      },
      {
        path: "coverage",
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
        Component: Coverage,
      },
    ],
  },
]);
export default Router;
