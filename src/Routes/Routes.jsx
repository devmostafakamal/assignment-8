import React from "react";

import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs";
import MyBookings from "../pages/MyBookings";
import ContactUs from "../pages/ContactUs";
import DoctorDetails from "../pages/DoctorDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        hydrateFallbackElement: <p>Loading..</p>,
        loader: () => fetch("../doctorsData.json"),
      },
      {
        path: "/myBookings",
        Component: MyBookings,
      },
      {
        path: "/blog",
        loader: () => fetch("../BlogsData.json"),
        Component: Blogs,
      },
      {
        path: "/contactUs",
        Component: ContactUs,
      },
      {
        path: "/doctorDetails/:registrationNumber",
        Component: DoctorDetails,
        loader: () => fetch("../doctorsData.json"),
      },
    ],
  },
]);
