import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/Main/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import About from "../Pages/About/About";
import AuthLayout from "../Layouts/Auth/AuthLayout";
import Login from "../Pages/AuthPages/Login/Login";
import Register from "../Pages/AuthPages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../Pages/Rider/Rider";
import SendParcel from "../Pages/Send Parcel/SendParcel";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error></Error>,
    hydrateFallbackElement: (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    ),
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
      {
        path: "about-us",
        Component: About,
      },
      {
        path: "rider",
        element: (
          <PrivateRoute>
            <Rider></Rider>
          </PrivateRoute>
        ),
      },
      {
        path: "send-parcel",
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
        element: (
          <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
export default Router;
