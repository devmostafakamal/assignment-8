import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import AppointmentChart from "./AppointmentChart";

function MyBookings() {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(stored);
  }, []);

  const handleCancel = (id) => {
    const updated = appointments.filter(
      (appointment) => appointment.registrationNumber !== id
    );
    localStorage.setItem("appointments", JSON.stringify(updated));
    setAppointments(updated);
    toast.error("Cencel appionment");
  };
  const chartData = appointments.map((doc) => ({
    name: doc.name,
    consultationFee: doc.consultationFee,
  }));

  if (appointments.length === 0) {
    return (
      <div className="text-center mt-40 mb-12">
        <h3 className="text-2xl font-semibold mb-4">
          You have not Booked any appoinment yet
        </h3>
        <h2 className="mb-4">
          Our platform connect you with verified expericence doctors across
          verious specilities -all at your convenience{" "}
        </h2>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-blue-600 text-white rounded-full"
        >
          Back to Homepage
        </button>
      </div>
    );
  }
  return (
    <>
      <div className="">
        <AppointmentChart data={chartData} />
        <div className="max-w-3xl mx-auto p-6 space-y-6">
          <h2 className="text-3xl font-bold mb-6 text-center">
            My Booked Appointments
          </h2>
          <p>
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.
          </p>
          <div className="w-full px-4">
            <div className=" space-y-4">
              {appointments.map((doc) => (
                <div
                  key={doc.registrationNumber}
                  className=" p-10 flex flex-col gap-3 bg-white  shadow-md rounded-2xl"
                >
                  <h3 className="text-xl font-bold text-gray-800">
                    {doc.name}
                  </h3>
                  <p className="text-gray-600">Speciality: {doc.speciality}</p>
                  <p className="text-gray-600">Education: {doc.education}</p>
                  <div>
                    <p className="text-gray-600 text-right">
                      Fee: {doc.consultationFee}Taka+Vat
                    </p>
                  </div>

                  <button
                    onClick={() => handleCancel(doc.registrationNumber)}
                    className=" px-4 py-2 mt-4 text-[#FF0000] border border-red-600 rounded-full hover:bg-red-50"
                  >
                    Cancel Appointment
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyBookings;
