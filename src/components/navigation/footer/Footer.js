import React from "react";
import { MdCall, MdOutlineEmail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#202020] rounded-t-[20px]  ">
      <div className="container  mx-auto">
        <div className="relative">
          <div className="  w-full absolute left-0 -top-36">
            <div className="flex bg-[#e4ae62] w-full rounded-[10px] z-[20] relative">
              <div className="absolute  xl:-top-36 lg:-top-32 -top-28  left-0 flex items-center  w-full  z-10">
                <div className="w-full flex xl:px-20 lg:px-16 px-12  items-center lg:items-start text-center lg:justify-start justify-center">
                  <img
                    className="xl:w-[180px] lg:w-[160px] w-[140px] xl:h-[160px] lg:h-[140px] h-[120px]"
                    src="/chef.gif"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full flex lg:flex-row flex-col xl:gap-4 lg:gap-3 gap-2  items-center justify-between xl:px-20 lg:px-16 px-12 xl:py-14 lg:py-10 py-6">
                <div className=" flex flex-col xl:gap-4 lg:gap-3 gap-2 text-center lg:text-left">
                  <p className="text-[#FFFFFF] xl:text-4xl lg:text-2xl text-xl font-bold">
                    Subscribe to our newsletter
                  </p>
                  <p className="text-[#FFFFFF] xl:text-xl lg:text-lg text-base">
                    Subscribe to our newsletter to receive news and updates
                  </p>
                </div>
                <div className="flex flex-col xl:gap-4 lg:gap-3 gap-2 items-center">
                  <button className="bg-[#FFFFFF] xl:px-20 lg:px-16 px-12 xl:py-4 lg:py-3 py-2 rounded-full xl:text-xl lg:text-lg text-base text-[#e4ae62] outline-none focus:outline-none">
                    Subscribe
                  </button>
                  <p className="text-[#FFFFFF] xl:text-xl lg:text-lg text-base">
                    It&apos;s a gift{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:pt-[160px] lg:pt-[150px] pt-[140px] pb-6 flex flex-col items-center xl:gap-8 lg:gap-6 gap-4 ">
          <div className="w-full grid lg:grid-cols-3  grid-cols-1 xl:gap-16 lg:gap-12 gap-8">
            <div className="col-span-1 flex flex-col items-center xl:gap-4 lg:gap-3 gap-2 text-center">
              <h1 className="text-[#FFFFFF] xl:text-2xl lg:text-xl text-lg font-bold uppercase xl:mb-4 lg:mb-3 mb-2">
                Address
              </h1>
              <h3 className="text-[#FFFFFF] xl:text-xl lg:text-lg text-base ">
                Shack Restaurant
              </h3>
              <p className="text-[#FFFFFF] xl:text-xl lg:text-lg text-base  ">
                121 Rock Sreet, 21 Avenue, New York, NY 92103-9000
              </p>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col items-center xl:gap-4 lg:gap-3 gap-2 text-center">
                <h1 className="text-[#FFFFFF] xl:text-2xl lg:text-xl text-lg font-bold uppercase xl:mb-4 lg:mb-3 mb-2">
                  Opening Hours
                </h1>
                <h3 className="text-[#FFFFFF] xl:text-xl lg:text-lg text-base ">
                  Monday - Friday: 11:00 AM - 11:00 PM
                </h3>
                <h3 className="text-[#FFFFFF] xl:text-xl lg:text-lg text-base ">
                  Saturday - Sunday: 11:00 AM - 12:00 PM
                </h3>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col items-center xl:gap-4 lg:gap-3 gap-2 text-center">
                <h1 className="text-[#FFFFFF] xl:text-2xl lg:text-xl text-lg font-bold uppercase xl:mb-4 lg:mb-3 mb-2">
                  Reservation
                </h1>
                <h3 className="text-[#FFFFFF] flex items-center gap-2 xl:text-xl lg:text-lg text-base ">
                  <MdCall />
                  +1 234 567 890
                </h3>
                <h3 className="text-[#FFFFFF] flex items-center gap-2 xl:text-xl lg:text-lg text-base ">
                  <MdOutlineEmail /> info@shackrestaurant
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full  flex flex-col items-center gap-2 xl:gap-6 lg:gap-4 ">
            <div className=" flex xl:gap-4 lg:gap-3 gap-2 items-center xl:text-3xl lg:text-2xl text-xl text-white xl:mb-4 lg:mb-3 mb-2">
              <BsFacebook />
              <RiTwitterXFill />
              <FaInstagram />
            </div>
            <p className="text-[#FFFFFF] text-center  lg:text-sm text-xs uppercase font-extralight">
              COPYRIGHT © 2023, Shack . DESIGNED BY Mahtab Hossain
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
