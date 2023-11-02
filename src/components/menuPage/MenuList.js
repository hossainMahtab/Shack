import React from "react";
import MenuItems from "./MenuItems";
import CommonContentHeader from "../shared/contentHeader/CommonContentHeader";

const MenuList = () => {
  return (
    <div className="w-full  ">
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-8 ">
          <div className="w-full items-center xl:px-20 md:px-16 px-12 pt-20 flex flex-col gap-8">
            <div className="w-full  flex flex-col items-center ">
              <CommonContentHeader
                textColor="text-[#202020]"
                // subtitle="Visit our"
                title="starters"
                lineBg="bg-[#202020]"
                // subtitleSize="text-2xl"
                titleSize="text-5xl"
              />
            </div>
            {/* menu Items starts */}
            <MenuItems itemType="starters" />
          </div>
          <div className="w-full items-center flex flex-col gap-8">
            <div className="w-full  flex flex-col items-center ">
              <CommonContentHeader
                textColor="text-[#202020]"
                // subtitle="Visit our"
                title="Main Courses"
                lineBg="bg-[#202020]"
                // subtitleSize="text-2xl"
                titleSize="text-5xl"
              />
            </div>
            {/* menu Items starts */}
            <MenuItems itemType="mainCourse" />
          </div>
          <div className="w-full items-center flex flex-col gap-8">
            <div className="w-full  flex flex-col items-center ">
              <CommonContentHeader
                textColor="text-[#202020]"
                // subtitle="Visit our"
                title="Soups"
                lineBg="bg-[#202020]"
                // subtitleSize="text-2xl"
                titleSize="text-5xl"
              />
            </div>
            {/* menu Items starts */}
            <MenuItems itemType="soups" />
          </div>
          <div className="w-full items-center flex flex-col gap-8">
            <div className="w-full  flex flex-col items-center ">
              <CommonContentHeader
                textColor="text-[#202020]"
                // subtitle="Visit our"
                title="Desserts"
                lineBg="bg-[#202020]"
                // subtitleSize="text-2xl"
                titleSize="text-5xl"
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
