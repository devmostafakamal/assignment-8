import React from "react";

function Banner() {
  return (
    <>
      <div className="bg-[#FFFFFF]  rounded-2xl md:py-16 md:px-40 p-0 mt-4">
        <div className="">
          <h2 className="text-5xl font-bold md:text-center text-left hidden md:flex">
            Dependable Care, Backed by Trusted <br /> Professionals.
          </h2>
          <p className="mt-4 text-[#0F0F0F] text-center hidden md:flex">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a <br />{" "}
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
        </div>
        <div className="flex justify-center items-center text-center gap-2 mt-6">
          <input
            type="text"
            name=""
            id=""
            className="bg-white border border-gray-200 focus:outline-none focus:shadow-outline md:w-[60%] py-2 shadow-md broder rounded-3xl px-2"
            placeholder="search any doctor..."
          />
          <button className="bg-[#176AE5] border md:rounded-3xl text-white md:px-5 md:py-2 px-10 py-2  rounded-xl">
            {" "}
            Search Now
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-4 mt-6">
          <img src="/assets/banner-img-1.png" alt="" />
          <img src="/assets/banner-img-1.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
