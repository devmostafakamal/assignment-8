import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DoctorDetails() {
  const data = useLoaderData();
  const { registrationNumber } = useParams();
  const navigate = useNavigate();
  const singleDoctor = data.find(
    (doctor) => doctor.registrationNumber === registrationNumber
  );
  // console.log(singleDoctor);
  if (!singleDoctor) {
    return (
      <>
        <div className=" rounded-2xl mt-10 bg-[#FFFFFF]">
          <div className="text-center mt-10 ">
            <h3 className="text-2xl font-bold mt-3">No Doctor Found</h3>
            <p className="mt-4">No doctor found with this registrationNumber</p>
            <p className="text-xl mt-5">{registrationNumber}.</p>
            <button
              onClick={() => navigate("/")}
              className=" px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-10 mb-2"
            >
              View All Doctors
            </button>
          </div>
        </div>
      </>
    );
  }
  const {
    name,
    image,
    education,
    workingAt,
    availability,
    consultationFee,
    registrationNumber: id,
  } = singleDoctor;

  const handleBookAppointment = () => {
    const existing = JSON.parse(localStorage.getItem("appointments")) || [];

    const isAlreadyBooked = existing.some(
      (doc) => doc.registrationNumber === id
    );

    if (isAlreadyBooked) {
      toast.error("You've already booked an appointment with this doctor.");
      return;
    }

    const updated = [...existing, singleDoctor];
    localStorage.setItem("appointments", JSON.stringify(updated));
    toast.success("remove to favorites!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => navigate("/myBookings"), 1500); // wait for toast
  };
  return (
    <div>
      <div className="px-40 py-[72px] bg-[#FFFFFF] shadow-md rounded-2xl text-center mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          Doctor’s Profile Details
        </h2>
        <p className="text-gray-600">
          Explore the professional background, specialties, and experience of
          the doctor. This profile provides detailed information including
          education, years of practice, areas of expertise, current workplace,
          consultation availability, and registration credentials to help you
          make informed healthcare decisions.
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 px-6 py-16 bg-[#FFFFFF] rounded-2xl mt-5">
        <div>
          <img src={image} width="full" alt="" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#0F0F0F]">{name}</h2>
          <p className="mt-3 text-[#0F0F0F99]">{education}</p>
          <span className="text-[#0F0F0F99]">workingAt</span>
          <p className="mt-4 font-semi-bold text-2xl text-[#0F0F0F]">
            {workingAt}
          </p>
          <h3 className="mt-8 border-b border-dashed border-t ">
            Reg No.{registrationNumber}
          </h3>

          <div className=" flex gap-5 items-center justify-center mt-9 ">
            <h2>Availability</h2>
            <ul className="flex gap-4 ">
              {availability.map((day, index) => (
                <li
                  key={index}
                  className="px-3 py-1 border rounded-3xl bg-[#FFA0001A] text-[#FFA000]"
                >
                  {day}
                </li>
              ))}
            </ul>
          </div>

          <h3 className="mt-6">
            consultationFee: Taka :{consultationFee}(Incl.Vat) per consultation
          </h3>
        </div>
      </div>
      <div className="bg-[#FFFFFF] rounded-2xl px-10 py-14 mt-5">
        <div className="">
          <h2 className="text-center mb-10 text-[#141414] font-bold text-2xl">
            Book an Appointment
          </h2>
          <div className=" flex items-center justify-between">
            <p>Availability</p>
            <button className="text-[#09982F] px-4 py-2 bg-[#09982F1A] rounded-3xl">
              Doctor Available Today
            </button>
          </div>
          <div className="px-8 mt-10">
            <p className=" text-[#FFA000] bg-[#FFA0001A] w-fit border-gray-400 shadow px-2 rounded-2xl">
              Due to high patient volume, we are currently accepting
              appointments for today only. We appreciate your understanding and
              cooperation.
            </p>
          </div>

          <div className="px-14 mt-12">
            <Link to="/myBookings">
              <button
                onClick={handleBookAppointment}
                className="w-[80%] border rounded-4xl text-white px-4 py-2 bg-[#176AE5]"
              >
                Book Appointment Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetails;
