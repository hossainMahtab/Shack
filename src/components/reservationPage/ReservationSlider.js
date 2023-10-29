import React from "react";

const ReservationSlider = () => {
  return (
    <div className="w-full  h-auto relative overflow-hidden -mt-[132px] ">
      <div className="w-full h-[500px] relative ">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <img
          src="/reservationPage/reservation2.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <h1 className="text-6xl font-semibold text-white capitalize">
            Always A Cut Above The Rest
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ReservationSlider;
