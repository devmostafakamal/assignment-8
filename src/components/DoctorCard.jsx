import React from "react";
import { Link } from "react-router";

function DoctorCard({ doctor }) {
  console.log(doctor);
  const { image, experience, education, registrationNumber, name } = doctor;
  return (
    <div>
      <div className="card rounded-2xl shadow-sm p-4 flex items-center justify-center bg-[#FFFFFF]">
        <div className="flex items-center justify-center">
          <img src={image} alt="doctor" />
        </div>
        <div className=" flex gap-2">
          <button className="px-2 py-1 border rounded-2xl text-[#09982F] bg-[rgba(9,152,47,0.1)]">
            Available
          </button>
          <button className="px-2 py-1 border rounded-2xl text-[#176AE5] bg-[rgba(23,106,229,0.1)] ">
            {experience}Experience
          </button>
        </div>

        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{education}</p>
          <p>Reg No:{registrationNumber}</p>
        </div>
        <div className="w-full text-center">
          <Link to="/doctorDetails">
            <button className="px-12 py-2 border rounded-4xl text-[#176AE5]">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
