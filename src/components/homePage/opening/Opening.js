import React from "react";
import CommonButton from "@/components/shared/button/CommonButton";
import Link from "next/link";
import CommonContentHeader from "@/components/shared/contentHeader/CommonContentHeader";

const Opening = () => {
  return (
    <div className="flex relative items-center justify-center bg-[url(/homepage-img/about-5.jpg)] bg-fixed bg-cover  max-w-full h-[540px]">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute w-full">
        <div className="w-full flex flex-col items-center justify-center">
          <CommonContentHeader
            textColor="text-[#FFFFFF]"
            subtitle="Reserve a table"
            title="Opening Hours"
            lineBg="bg-[#FFFFFF]"
            subtitleSize="text-2xl"
            titleSize="text-6xl"
          />
          <h2 className="text-[#FFFFFF] text-2xl font-bold uppercase mt-10 mb-5">
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
