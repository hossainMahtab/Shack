import React from "react";

const Specialization = () => {
  return (
    <div className="w-full bg-[#F4F4F4]">
      <div className="container mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 pageContainerPaddingX   pageContainerPaddingY">
          {/* 1 */}
          <div className="flex gap-2 md:gap-3 xl:gap-4  w-full">
            <img
              src="/icons/groceries.png"
              alt=""
              className="xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8"
            />
            <div className="flex flex-col gap-1 lg:gap-2">
              <h1 className="text-[#202020] text-lg md:text-xl xl:text-2xl font-bold">
                FRESH FOOD
              </h1>
              <p className="text-[#202020] text-sm md:text-base xl:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam.
              </p>
            </div>
          </div>
          <div className="flex gap-2 md:gap-3 xl:gap-4  w-full">
            <img
              src="/icons/food.png"
              alt=""
              className="xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8"
            />
            <div className="flex flex-col gap-1 lg:gap-2">
              <h1 className="text-[#202020] text-lg md:text-xl xl:text-2xl font-bold">
                CHEF&apos; SPECIALS
              </h1>
              <p className="text-[#202020] text-sm md:text-base xl:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="flex gap-2 md:gap-3 xl:gap-4  w-full">
            <img
              src="/icons/glass.png"
              alt=""
              className="xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8"
            />

            <div className="flex flex-col gap-1 lg:gap-2">
              <h1 className="text-[#202020] text-lg md:text-xl xl:text-2xl font-bold">
                GOOD WINE
              </h1>
              <p className="text-[#202020] text-sm md:text-base xl:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, voluptas, quod, quas quae quia dolorum
                doloribus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialization;
