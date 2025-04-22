import React from "react";
import CountUp from "react-countup";

function Success() {
  return (
    <div className="mt-20">
      <div>
        <h2 className="text-center text-4xl font-bold text-[#0F0F0F]">
          We Provide Best Medical Services
        </h2>
        <p className="text-center text-[#0F0F0F] mt-6">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-5 grid-cols-2 mt-4">
        <div className="bg-[#FFFFFF] rounded-2xl px-12 py-10 shadow">
          <img src="/assets/success-doctor.png" alt="" />
          <span className="text-4xl text-[#0F0F0F] font-extrabold">
            <CountUp end={199} duration={5} suffix="+"></CountUp>
          </span>
          <p className="text-[#0F0F0F99]">Total Doctors</p>
        </div>
        <div className="bg-[#FFFFFF] rounded-2xl shadow px-12 py-10">
          <img src="/assets/success-review.png" alt="" />
          <span className="text-4xl text-[#0F0F0F] font-extrabold">
            <CountUp end={467} duration={5} suffix="+"></CountUp>
          </span>
          <p className="text-[#0F0F0F99]">Total Doctors</p>
        </div>
        <div className="bg-[#FFFFFF] rounded-2xl shadow px-12 py-10">
          <img src="/assets/success-patients.png" alt="" />
          <span className="text-4xl text-[#0F0F0F] font-bold">
            <CountUp end={1900} duration={5} suffix="+"></CountUp>
          </span>
          <p className="text-[#0F0F0F99]">Total Doctors</p>
        </div>
        <div className="bg-[#FFFFFF] rounded-2xl shadow px-12 py-10">
          <img src="/assets/success-staffs.png" alt="" />
          <span className="text-4xl text-[#0F0F0F] font-bold">
            <CountUp end={300} duration={5} suffix="+"></CountUp>
          </span>
          <p className="text-[#0F0F0F99]">Total Doctors</p>
        </div>
      </div>
    </div>
  );
}

export default Success;
