import React from "react";
import { TextField } from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers";
import CommonButton from "@/components/shared/button/CommonButton";
import CommonContentHeader from "@/components/shared/contentHeader/CommonContentHeader";

const ContactUs = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="w-full flex flex-col px-10 pt-20">
          <div className="w-full flex flex-col items-center text-center">
            <CommonContentHeader
              textColor="text-[#202020]"
              subtitle="Reserve a table"
              title="Get in Touch"
              lineBg="bg-[#202020]"
              subtitleSize="text-2xl"
              titleSize="text-6xl"
            />
            <div className=" w-full grid grid-cols-2 gap-y-10 gap-x-12 py-10 justify-center items-center mt-6 ">
              <TextField
                type="text"
                name="name"
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
              <TextField
                type="email"
                name="email"
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
              <TextField
                type="tel"
                name="phone"
                id="outlined-basic"
                label="Phone"
                variant="outlined"
              />
              <TextField
                type="number"
                name="guest"
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
                  type="text"
                  name="message"
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={5}
                  variant="outlined"
                  className="!w-full"
                />
              </div>
            </div>
            <div className=" w-full flex justify-end">
              <CommonButton
                btnText="Send Message"
                borderColor="border-[#202020]"
                textColor="text-[#202020]"
                hoverBorderColor="hover:border-[#e4ae62]"
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
