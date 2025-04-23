import React from "react";
import { useNavigate } from "react-router";

function ContactUs() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center  min-h-screen ">
          <img
            className="sm:w-[60%] lg:w-[40%] h-[300px] rounded-2xl mb-10"
            src="/assets/download.jpg"
            alt=""
          />

          <h1 className="text-6xl font-extrabold text-red-600 mb-6">
            4O4 - Page not found
          </h1>
          <p>Oops! the you're looking for dosen't exixt.</p>

          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
