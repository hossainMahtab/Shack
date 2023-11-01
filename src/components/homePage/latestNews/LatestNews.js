import React from "react";
import LatestNewsCard from "./LatestNewsCard";
import Link from "next/link";
import CommonButton from "@/components/shared/button/CommonButton";

const LatestNews = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="w-full px-10 py-20">
          <div className="w-full flex flex-col items-center">
            <h2 className="text-xl font-semibold text-[#202020] uppercase mb-1">
              Find Out
            </h2>
            <h1 className="text-6xl font-semibold text-[#202020] uppercase mb-2">
              LATEST NEWS
            </h1>
            <div className="w-[420px] h-0.5 bg-[#202020] mb-1"></div>
            <div className="w-[420px] h-2 bg-[#202020] mb-4"></div>
            <div className="w-full py-10">
              <LatestNewsCard />
            </div>
            <Link href="/blog">
              <CommonButton
                btnText="View All"
                borderColor="border-[#202020]"
                textColor="text-[#202020]"
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

export default LatestNews;
