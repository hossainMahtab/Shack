import React from "react";
import CommonButton from "@/components/shared/button/CommonButton";
import Link from "next/link";
import CommonContentHeader from "@/components/shared/contentHeader/CommonContentHeader";

const Opening = () => {
  return (
    <div className="flex relative items-center justify-center bg-[url(/homepage-img/about-5.jpg)] bg-fixed bg-cover  max-w-full h-[300px] md:h-[420px] xl:h-[540px]">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute w-full">
        <div className="w-full flex flex-col items-center justify-center">
          <CommonContentHeader
            textColor="text-[#FFFFFF]"
            subtitle="Reserve a table"
            title="Opening Hours"
            lineBg="bg-[#FFFFFF]"
            subtitleSizeXl="text-2xl"
            subtitleSizeLg="text-xl"
            subtitleSize="text-lg"
            titleSizeXl="text-6xl"
            titleSizeLg="text-4xl"
            titleSize="text-2xl"
          />
          <h2 className="text-[#FFFFFF] text-lg md:text-xl xl:text-2xl font-bold uppercase mt-4 md:mt-7 xl:mt-10 mb-2 md:mb-4 xl:mb-6">
            {" "}
            Monday - Friday: 10 AM - 11 PM
          </h2>
          <h2 className="text-[#FFFFFF] text-lg md:text-xl xl:text-2xl font-bold uppercase mb-2 md:mb-4 xl:mb-6">
            {" "}
            Saturday - Sunday: 10 AM - 12 PM{" "}
          </h2>
          <div className="xl:mt-4 lg:mt-3 mt-2">
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
    </div>
  );
};

export default Opening;
