import React from "react";
import CommonButton from "@/components/shared/button/CommonButton";
import Link from "next/link";

const Opening = () => {
  return (
    <div className="flex relative items-center justify-center bg-[url(/homepage-img/about-5.jpg)] bg-fixed bg-cover  max-w-full h-[540px]">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute w-full">
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="text-[#FFFFFF] text-2xl font-bold uppercase mb-2">
            RESERVE A TABLE
          </h2>
          <h1 className="text-[#FFFFFF] text-6xl font-bold uppercase mb-2">
            OPEN HOURS
          </h1>
          <div className="w-[440px] h-0.5 bg-[#FFFFFF] mb-1"></div>
          <div className="w-[440px] h-2 bg-[#FFFFFF] mb-7"></div>
          <h2 className="text-[#FFFFFF] text-2xl font-bold uppercase mb-5">
            {" "}
            Monday - Friday: 10 AM - 11 PM
          </h2>
          <h2 className="text-[#FFFFFF] text-2xl font-bold uppercase mb-7">
            {" "}
            Saturday - Sunday: 10 AM - 12 PM{" "}
          </h2>
          <Link href="/reservation">
            <CommonButton
              btnText="Book Now"
              borderColor="border-[#FFFFFF]"
              textColor="text-[#FFFFFF]"
              hoverBorderColor="hover:border-[#e4ae62]"
              hoverTextColor="hover:text-[#FFFFFF]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Opening;
