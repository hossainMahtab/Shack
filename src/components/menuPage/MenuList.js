import React from "react";
import MenuItems from "./MenuItems";

const MenuList = () => {
  return (
    <div className="w-full  ">
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-8 px-10 ">
          <div className="w-full items-center flex flex-col gap-8">
            <div className="w-full  flex flex-col items-center justify-center gap-1">
              <h1 className="text-[#202020] text-4xl font-bold uppercase">
                STARTERS
              </h1>
              <div className="w-[360px] h-0.5 bg-[#202020]"></div>
              <div className="w-[360px] h-2 bg-[#202020]"></div>
            </div>
            {/* menu Items starts */}
            <MenuItems itemType="starters" />
          </div>
          <div className="w-full items-center flex flex-col gap-8">
            <div className="w-full  flex flex-col items-center justify-center gap-1">
              <h1 className="text-[#202020] text-4xl font-bold uppercase">
                Main Courses
              </h1>
              <div className="w-[360px] h-1 bg-[#202020]"></div>
              <div className="w-[360px] h-2 bg-[#202020]"></div>
            </div>
            {/* menu Items starts */}
            <MenuItems itemType="mainCourse" />
          </div>
          <div className="w-full items-center flex flex-col gap-8">
            <div className="w-full  flex flex-col items-center justify-center gap-1">
              <h1 className="text-[#202020] text-4xl font-bold uppercase">
                Soups
              </h1>
              <div className="w-[360px] h-1 bg-[#202020]"></div>
              <div className="w-[360px] h-2 bg-[#202020]"></div>
            </div>
            {/* menu Items starts */}
            <MenuItems itemType="soups" />
          </div>
          <div className="w-full items-center flex flex-col gap-8">
            <div className="w-full  flex flex-col items-center justify-center gap-1">
              <h1 className="text-[#202020] text-4xl font-bold uppercase">
                desserts
              </h1>
              <div className="w-[360px] h-1 bg-[#202020]"></div>
              <div className="w-[360px] h-2 bg-[#202020]"></div>
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
