import React from "react";
import { TextField } from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers";
import CommonButton from "@/components/shared/button/CommonButton";

const ContactUs = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="w-full flex flex-col px-10 pt-20">
          <div className="w-full flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-[#202020] uppercase mb-1">
              Reserve a table
            </h2>
            <h1 className="text-6xl font-semibold text-[#202020] uppercase mb-2">
              Contact Us
            </h1>
            <div className="w-[400px] h-0.5 bg-[#202020] mb-1"></div>
            <div className="w-[400px] h-2 bg-[#202020] mb-10"></div>
            <div className=" w-full grid grid-cols-2 gap-y-10 gap-x-12 pb-8">
              <TextField id="outlined-basic" label="Name" variant="outlined" />
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              <TextField id="outlined-basic" label="Phone" variant="outlined" />
              <TextField
                id="outlined-basic"
                label="Number of Guest"
                variant="outlined"
              />

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Reservation Date" />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker label="Reservation Time" />
              </LocalizationProvider>

              <div className="col-span-2">
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={5}
                  variant="outlined"
                  className="w-full"
                />
              </div>
            </div>
            <div className=" w-full flex justify-end">
              <CommonButton
                btnText="Send Message"
                borderColor="border-[#202020]"
                textColor="text-[#202020]"
                hoverBorderColor="hover:border-[#BC8D4B]"
                hoverTextColor="hover:text-[#FFFFFF]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
