import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link>Services</Link>
      </li>
      <li>
        <NavLink to={"/coverage"}>Coverage</NavLink>
      </li>
      <li>
        <Link>About Us</Link>
      </li>
      <li>
        <Link>Pricing</Link>
      </li>
      <li>
        <Link>Be a Rider</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-white shadow-sm rounded-full p-4 mt-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          <Link to={"/"} className="cursor-pointer text-xl">
            <Logo></Logo>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-transparent border-side border-2 rounded-full">
            Sign In
          </a>
          <a className="btn bg-secondary text-head font-bold rounded-full">
            Be a rider
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
