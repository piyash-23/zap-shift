import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "../Logo/Logo";
import useAuth from "../../hooks/useAuth/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut().then(() => {
      Swal.fire({
        title: "Logged Out Successfully",
        icon: "success",
        draggable: true,
      });
    });
  };
  const links = (
    <>
      <li>
        <NavLink to={"/coverage"}>Coverage</NavLink>
      </li>
      <li>
        <NavLink to={"/about-us"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/send-parcel"}>Send Parcel</NavLink>
      </li>
      <li>
        <Link>Pricing</Link>
      </li>
      <li>
        <NavLink to={"/rider"}>Be a Rider</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-white shadow-sm rounded-full p-4 mt-2 relative z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden z-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div>
            <Logo></Logo>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn bg-transparent border-side border-2 rounded-full"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to={"/login"}
              className="btn bg-transparent border-side border-2 rounded-full"
            >
              Sign In
            </Link>
          )}

          <a className="btn bg-secondary text-head font-bold rounded-full">
            Be a rider
          </a>

          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <p>{user.displayName}</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
