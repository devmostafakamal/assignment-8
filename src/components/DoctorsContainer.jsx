import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";

function DoctorsContainer({ doctors }) {
  //   console.log(doctors);
  const [displayDoctors, setDisplayDoctors] = useState([]);
  const [viewAll, setViewAll] = useState(false);
  useEffect(() => {
    if (viewAll) {
      setDisplayDoctors(doctors);
    } else {
      setDisplayDoctors(doctors.slice(0, 6));
    }
  }, [doctors, viewAll]);
  return (
    <>
      <div className="text-center mt-20">
        <h2 className="text-4xl font-bold ">Our Best Doctors</h2>
        <p className="mt-6 text-[#0F0F0F]">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a <br />{" "}
          routine checkup or urgent consultation, book appointments in minutes
          and receive quality care you can trust.
        </p>
      </div>
      <div className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayDoctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor}></DoctorCard>
          ))}
        </div>
        <div className="text-center">
          <button
            className="bg-[#176AE5] border rounded-4xl px-4 py-2 text-white mt-4"
            onClick={() => setViewAll((prev) => !prev)}
          >
            View All doctors
          </button>
        </div>
      </div>
    </>
  );
}

export default DoctorsContainer;
