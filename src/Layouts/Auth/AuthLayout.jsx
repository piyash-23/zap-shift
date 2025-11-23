import React from "react";
import Logo from "../../Components/Logo/Logo";
import { Outlet } from "react-router";
import Login from "../../Pages/AuthPages/Login/Login";
import authImage from "../../assets/authImage.png";
import Register from "../../Pages/AuthPages/Register/Register";

const AuthLayout = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto min-h-screen">
        <div>
          <Logo />
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <Outlet>
                <Login></Login>
                <Register></Register>
              </Outlet>
            </div>
            <div className="flex-1 bg-[#FAFDF0] min-h-screen">
              <div className="flex justify-center items-center h-[100%]">
                <img src={authImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
