import React from "react";
import GalleryEmbla from "./GalleryEmbla";
import CommonButton from "@/components/shared/button/CommonButton";
import Link from "next/link";
import CommonContentHeader from "@/components/shared/contentHeader/CommonContentHeader";

const OPTIONS = { dragFree: true };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const HomeGallery = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="w-full flex flex-col xl:px-20 lg:px-16 px-12 ">
          <div className="w-full flex flex-col items-center">
            <CommonContentHeader
              textColor="text-[#202020]"
              subtitle="Visit our"
              title="Gallery"
              lineBg="bg-[#202020]"
              subtitleSizeXl="text-2xl"
              subtitleSizeLg="text-xl"
              subtitleSize="text-lg"
              titleSizeXl="text-6xl"
              titleSizeLg="text-4xl"
              titleSize="text-2xl"
            />
          </div>
        </div>
      </div>
      <div className=" mt-2 lg:mt-4 xl:mt-6 py-4 lg:py-7 xl:py-10">
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
