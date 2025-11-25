import React from "react";
import Logo from "../../Components/Logo/Logo";
import { Outlet } from "react-router";
import Login from "../../Pages/AuthPages/Login/Login";
import authImage from "../../assets/authImage.png";
import Register from "../../Pages/AuthPages/Register/Register";

const AuthLayout = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto flex justify-center items-center min-h-screen bg-[#FAFDF0]">
        <div>
          <div>
            <Logo />
          </div>
          <div className="flex justify-between items-center flex-col md:flex-row">
            <div className="flex-1">
              <Outlet>
                <Login></Login>
                <Register></Register>
              </Outlet>
            </div>
            <div className="flex-1 x">
              <img src={authImage} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
