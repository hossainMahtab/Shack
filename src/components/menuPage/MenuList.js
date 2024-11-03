import React from "react";
import MenuItems from "./MenuItems";
import CommonContentHeader from "../shared/contentHeader/CommonContentHeader";

const MenuList = () => {
  return (
    <div className="w-full  ">
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-8 lg:gap-12 xl:gap-16 pt-12 lg:pt-16 xl:pt-20 ">
          <div className="w-full items-center   flex flex-col gap-4 lg:gap-6 xl:gap-8">
            <div className="w-full  flex flex-col items-center ">
              <CommonContentHeader
                textColor="text-[#202020]"
                // subtitle="About"
                title="Starters"
                lineBg="bg-[#202020]"
                // subtitleSize="text-2xl"
                titleSizeXl="text-6xl"
                titleSizeLg="text-4xl"
                titleSize="text-2xl"
              />
            </div>
            {/* menu Items starts */}
            <MenuItems itemType="starters" />
          </div>
          <div className="w-full items-center flex flex-col gap-4 lg:gap-6 xl:gap-8">
            <div className="w-full  flex flex-col items-center ">
              <CommonContentHeader
                textColor="text-[#202020]"
                // subtitle="About"
                title="Main Courses"
                lineBg="bg-[#202020]"
                // subtitleSize="text-2xl"
                titleSizeXl="text-6xl"
                titleSizeLg="text-4xl"
                titleSize="text-2xl"
              />
            </div>
            {/* menu Items starts */}
            <MenuItems itemType="mainCourse" />
          </div>
          <div className="w-full items-center flex flex-col gap-4 lg:gap-6 xl:gap-8">
            <div className="w-full  flex flex-col items-center ">
              <CommonContentHeader
                textColor="text-[#202020]"
                // subtitle="About"
                title="Soups"
                lineBg="bg-[#202020]"
                // subtitleSize="text-2xl"
                titleSizeXl="text-6xl"
                titleSizeLg="text-4xl"
                titleSize="text-2xl"
              />
            </div>
            {/* menu Items starts */}
            <MenuItems itemType="soups" />
          </div>
          <div className="w-full items-center flex flex-col gap-4 lg:gap-6 xl:gap-8">
            <div className="w-full  flex flex-col items-center ">
              <CommonContentHeader
                textColor="text-[#202020]"
                // subtitle="About"
                title="Desserts"
                lineBg="bg-[#202020]"
                // subtitleSize="text-2xl"
                titleSizeXl="text-6xl"
                titleSizeLg="text-4xl"
                titleSize="text-2xl"
              />
            </div>
            {/* menu Items starts */}
            <MenuItems itemType="desserts" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
