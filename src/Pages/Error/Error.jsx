import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import err from "../../assets/error.png";

const Error = () => {
  return (
    <>
      <div className="max-w-[1500px] mx-auto">
        <Navbar></Navbar>
        {/* main page */}
        <div className="bg-white my-6 rounded-[20px] text-center">
          <div>
            <img className="mx-auto py-6" src={err} alt="" />
            <h2 className="text-3xl font-bold py-6">Ops! Page not found</h2>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Error;
