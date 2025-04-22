import React from "react";
import { NavLink } from "react-router";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
function Footer() {
  return (
    <>
      <div className="bg-[#FFFFFF] shadow-md mt-2">
        <div className="px-20 py-24 ">
          <div className="flex items-center justify-center gap-3 ">
            <img width={30} src="/assets/logo.png" alt="" />
            <h2 className="text-3xl text-[#0F0F0F] font-bold">Phudu</h2>
          </div>
          <div className="">
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
          <div className="mt-4 border-t border-dashed border-gray-300 pt-4 flex items-center justify-center gap-4">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={30}
                className="text-blue-600 hover:opacity-75 transition"
              />
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                className="text-blue-700 hover:opacity-75 transition"
              />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={30}
                className="text-gray-800 hover:opacity-75 transition"
              />
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube
                size={30}
                className="text-red-600 hover:opacity-75 transition"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
