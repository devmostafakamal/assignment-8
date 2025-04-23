import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../components/Footer/Footer";
import { ToastContainer } from "react-toastify";

function Root() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const isContactPage = location.pathname === "/contactUs";

  return (
    <>
      <ToastContainer></ToastContainer>
      <div className="relative bg-[rgb(239,239,239)]">
        {/* Top loading bar */}
        {isLoading && (
          <div className="fixed top-0 left-0 w-full h-1 bg-blue-500 animate-pulse z-50" />
        )}

        {/* Main container */}
        <div className="max-w-[1520px] mx-auto ">
          <Navbar />
          <Outlet />
          {!isContactPage && <Footer></Footer>}
        </div>
      </div>
    </>
  );
}

export default Root;
