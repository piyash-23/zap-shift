import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
const Logo = () => {
  return (
    <>
      <div>
        <Link to={"/"}>
          <div className="flex items-center justify-center">
            <img className="w-[30px]" src={logo} alt="" />
            <h3 className="font-extrabold font-primary mt-3 -ml-4">ZapShift</h3>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Logo;
