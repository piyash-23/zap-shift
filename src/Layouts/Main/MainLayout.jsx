import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Home from "../../Pages/Home/Home";
import Footer from "../../Components/Footer/Footer";
import Coverage from "../../Pages/Coverage/Coverage";

const MainLayout = () => {
  return (
    <>
      <div className="max-w-[1600px] mx-auto">
        <Navbar></Navbar>
        <Outlet>
          <Home></Home>
          <Coverage></Coverage>
        </Outlet>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
