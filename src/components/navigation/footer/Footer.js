import React from "react";
import { MdCall, MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full bg-[#202020] rounded-t-[20px]  ">
      <div className="container mx-auto px-10 relative">
        <div className="px-10  w-full absolute left-0 -top-36">
          <div className="flex bg-[#e4ae62] w-full rounded-[10px] z-0 relative">
            <div className="absolute  -top-36 left-20  z-10">
              <img className="w-[180px] h-[160px]  " src="/chef.gif" alt="" />
            </div>
            <div className="w-full flex justify-between px-20 py-16">
              <div className=" flex flex-col gap-4">
                <p className="text-[#FFFFFF] text-4xl font-bold">
                  Subscribe to our newsletter
                </p>
                <p className="text-[#FFFFFF] text-xl">
                  Subscribe to our newsletter to receive news and updates
                </p>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <button className="bg-[#FFFFFF] px-10 py-4 rounded-full text-xl text-[#e4ae62]">
                  Subscribe
                </button>
                <p className="text-[#FFFFFF] text-xl">It's a gift </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[140px] pb-16 ">
          <div className="grid grid-cols-3 gap-16">
            <div className="col-span-1 flex flex-col items-center gap-2 text-center">
              <h1 className="text-[#FFFFFF] text-2xl font-bold uppercase mb-4">
                Address
              </h1>
              <h3 className="text-[#FFFFFF] text-xl ">Shack Restaurant</h3>
              <p className="text-[#FFFFFF] text-xl  ">
                121 Rock Sreet, 21 Avenue, New York, NY 92103-9000
              </p>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col items-center gap-1 text-center">
                <h1 className="text-[#FFFFFF] text-2xl font-bold uppercase mb-4">
                  Opening Hours
                </h1>
                <h3 className="text-[#FFFFFF] text-xl ">
                  Monday - Friday: 11:00 AM - 11:00 PM
                </h3>
                <h3 className="text-[#FFFFFF] text-xl ">
                  Saturday - Sunday: 11:00 AM - 12:00 PM
                </h3>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-[#FFFFFF] text-2xl font-bold uppercase mb-4">
                  Reservation
                </h1>
                <h3 className="text-[#FFFFFF] flex items-center gap-2 text-xl ">
                  <MdCall />
                  +1 234 567 890
                </h3>
                <h3 className="text-[#FFFFFF] flex items-center gap-2 text-xl ">
                  <MdOutlineEmail /> info@shackrestaurant
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
