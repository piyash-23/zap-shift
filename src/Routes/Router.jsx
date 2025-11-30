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
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import MyParcels from "../Pages/DashPages/MyParcels/MyParcels";
import Payment from "../Pages/DashPages/Payment/Payment";
import PaySuccess from "../Pages/DashPages/Payment/PaySuccess";
import PayCancel from "../Pages/DashPages/Payment/PayCancel";

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
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-parcels",
        Component: MyParcels,
      },
      {
        path: "checkout/:parcelID",
        Component: Payment,
      },
      {
        path: "payment-success",
        Component: PaySuccess,
      },
      {
        path: "payment-cancelled",
        Component: PayCancel,
      },
    ],
  },
]);
export default Router;
