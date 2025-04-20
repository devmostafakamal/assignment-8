import React from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img width={30} src="/assets/logo.png" alt="" />
          <h2 className="text-3xl text-[#0F0F0F] font-bold">Phudu</h2>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myBookings"
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
              >
                My-Bookings
              </NavLink>
            </li>

            <li>
              {" "}
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
              >
                Blogs
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/contactUs"
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button className="bg-[#176AE5] border rounded-3xl text-white px-5 py-2">
            Emergency
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
