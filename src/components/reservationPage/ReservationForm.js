import React from "react";
import ContactUs from "../homePage/contact-us/ContactUs";

const ReservationForm = () => {
  return (
    <div className="w-full  ">
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-8 px-10 ">
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
