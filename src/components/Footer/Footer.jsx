import React from "react";
import { NavLink } from "react-router";

function Footer() {
  return (
    <div className="px-20 py-24 bg-[#FFFFFF]">
      <div className="flex items-center justify-center gap-3 ">
        <img width={30} src="/assets/logo.png" alt="" />
        <h2 className="text-3xl text-[#0F0F0F] font-bold">Phudu</h2>
      </div>
      <div className="border-b border-dashed">
        <ul className="flex items-center justify-center gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "border-b-2" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myBookings"
              className={({ isActive }) => (isActive ? "border-b-2" : "")}
            >
              My-Bookings
            </NavLink>
          </li>

          <li>
            {" "}
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "border-b-2" : "")}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/contactUs"
              className={({ isActive }) => (isActive ? "border-b-2" : "")}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
