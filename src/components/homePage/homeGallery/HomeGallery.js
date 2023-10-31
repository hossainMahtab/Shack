import React from "react";
import GalleryEmbla from "./GalleryEmbla";
import CommonButton from "@/components/shared/button/CommonButton";
import Link from "next/link";

const OPTIONS = { dragFree: true };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const HomeGallery = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="w-full flex flex-col px-10 ">
          <div className="w-full flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-[#202020] uppercase mb-1">
              Visit our
            </h2>
            <h1 className="text-6xl font-semibold text-[#202020] uppercase mb-2">
              Gallery
            </h1>
            <div className="w-[400px] h-0.5 bg-[#202020] mb-1"></div>
            <div className="w-[400px] h-2 bg-[#202020] mb-10"></div>
          </div>
        </div>
      </div>
      <div className=" py-10">
        <GalleryEmbla slides={SLIDES} options={OPTIONS} />
      </div>
      <div className="w-full">
        <div className="container mx-auto">
          <div className="w-full flex flex-col items-center">
            <Link href="/gallery">
              <CommonButton
                btnText="View Gallery"
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

export default HomeGallery;
