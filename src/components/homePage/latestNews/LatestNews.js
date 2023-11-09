import React from "react";
import LatestNewsCard from "./LatestNewsCard";
import Link from "next/link";
import CommonButton from "@/components/shared/button/CommonButton";
import CommonContentHeader from "@/components/shared/contentHeader/CommonContentHeader";

const LatestNews = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="w-full py-8 lg:py-14  xl:py-20">
          <div className="w-full flex flex-col items-center">
            <CommonContentHeader
              textColor="text-[#202020]"
              subtitle="Find Out"
              title="LATEST NEWS"
              lineBg="bg-[#202020]"
              subtitleSizeXl="text-2xl"
              subtitleSizeLg="text-xl"
              subtitleSize="text-lg"
              titleSizeXl="text-6xl"
              titleSizeLg="text-4xl"
              titleSize="text-3xl"
            />
            <div className="w-full mt-2 lg:mt-4 xl:mt-6 py-4 lg:py-7 xl:py-10">
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
