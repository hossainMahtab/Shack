import React from "react";
import ReservationSlider from "./ReservationSlider";
import ReservationForm from "./ReservationForm";

const ReservationPage = () => {
  return (
    <div className="w-full flex flex-col ">
      <ReservationSlider />
      <ReservationForm />
    </div>
  );
};

export default ReservationPage;
