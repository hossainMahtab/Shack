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
        <div className="w-full flex flex-col xl:px-20 md:px-16 px-12 pt-12 md:pt-16 xl:pt-20">
          <div className="w-full flex flex-col items-center text-center">
            <CommonContentHeader
              textColor="text-[#202020]"
              subtitle="Reserve a table"
              title="Get in Touch"
              lineBg="bg-[#202020]"
              subtitleSizeXl="text-2xl"
              subtitleSizeMd="text-xl"
              subtitleSize="text-lg"
              titleSizeXl="text-6xl"
              titleSizeMd="text-5xl"
              titleSize="text-4xl"
            />
            <div className=" w-full grid grid-cols-1 md:grid-cols-2  gap-y-4 md:gap-y-7 xl:gap-y-10 gap-x-4 md:gap-x-8 xl:gap-x-12 py-4 md:py-7 xl:py-10 justify-center items-center mt-2 md:mt-4 xl:mt-6 ">
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

              <div className=" col-span-1 md:col-span-2">
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
