import React from "react";
import LatestNewsCard from "./LatestNewsCard";
import Link from "next/link";
import CommonButton from "@/components/shared/button/CommonButton";
import CommonContentHeader from "@/components/shared/contentHeader/CommonContentHeader";

const LatestNews = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="w-full px-10 py-20">
          <div className="w-full flex flex-col items-center">
            <CommonContentHeader
              textColor="text-[#202020]"
              subtitle="Find Out"
              title="LATEST NEWS"
              lineBg="bg-[#202020]"
              subtitleSize="text-2xl"
              titleSize="text-6xl"
            />
            <div className="w-full mt-6 py-10">
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
