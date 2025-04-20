import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";

function Root() {
  return (
    <div className="max-w-[1520px] mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default Root;
