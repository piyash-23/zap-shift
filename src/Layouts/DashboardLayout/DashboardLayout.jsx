import React from "react";
import Logo from "../../Components/Logo/Logo";
import { Link, Outlet } from "react-router";
import MyParcels from "../../Pages/DashPages/MyParcels/MyParcels";
import { GrDeliver } from "react-icons/gr";
import useAuth from "../../hooks/useAuth/useAuth";
import Payment from "../../Pages/DashPages/Payment/Payment";
import PaySuccess from "../../Pages/DashPages/Payment/PaySuccess";
import PayCancel from "../../Pages/DashPages/Payment/PayCancel";
import PaymentHistory from "../../Pages/DashPages/PaymentHistory/PaymentHistory";
import { GoHistory } from "react-icons/go";

const DashboardLayout = () => {
  const { user } = useAuth();
  const links = (
    <>
      <li>
        <Link
          to={"/dashboard/my-parcels"}
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="My Parcels"
        >
          <GrDeliver className="text-lg" />
          <span className="is-drawer-close:hidden">My Parcels</span>
        </Link>
      </li>
      <li>
        <Link
          to={"/dashboard/payment-history"}
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="Payment History"
        >
          <GoHistory className="text-lg" />
          <span className="is-drawer-close:hidden">Payment History</span>
        </Link>
      </li>
    </>
  );
  return (
    <>
      <div className="max-w-[1600px] mx-auto drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-gray-300">
            <div className="navbar-start">
              <label
                htmlFor="my-drawer-4"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                {/* Sidebar toggle icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M9 4v16"></path>
                  <path d="M14 10l2 2l-2 2"></path>
                </svg>
              </label>
              <div className="px-2">
                <h2 className="font-bold">Zap Shift Dashboard</h2>
              </div>
            </div>
            {/* navbar end */}
            <div className="">
              <div className=" dropdown dropdown-end ">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt={user.displayName} src={user.photoURL} />
                  </div>
                </div>

                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">{user.displayName}</a>
                  </li>

                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Page content here */}

          <div className="px-5 ">
            <Outlet>
              <MyParcels></MyParcels>
              <Payment></Payment>
              <PaySuccess></PaySuccess>
              <PayCancel></PayCancel>
              <PaymentHistory></PaymentHistory>
            </Outlet>
          </div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start bg-gray-300 is-drawer-close:w-14 is-drawer-open:w-64">
            {/* Sidebar content here */}
            <ul className="menu w-full grow">
              {/* List item */}
              <li>
                <Link
                  to={"/"}
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Homepage"
                >
                  {/* Home icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="my-1.5 inline-block size-4"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                  <span className="is-drawer-close:hidden">Homepage</span>
                </Link>
              </li>

              {/* List item */}
              {links}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
