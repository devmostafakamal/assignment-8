import React from "react";

import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs";
import MyBookings from "../pages/MyBookings";
import ContactUs from "../pages/ContactUs";
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
      },
      {
        path: "/myBookings",
        Component: MyBookings,
      },
      {
        path: "/blog",
        Component: Blogs,
      },
      {
        path: "/contactUs",
        Component: ContactUs,
      },
    ],
  },
]);
