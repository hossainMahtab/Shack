import React from "react";

const Specialization = () => {
  return (
    <div className="w-full bg-[#F4F4F4]">
      <div className="container mx-auto">
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 xl:gap-12 xl:px-20 md:px-16 px-12  py-8 md:py-14  xl:py-20">
          {/* 1 */}
          <div className="flex gap-4  w-full">
            <img
              src="/icons/groceries.png"
              alt=""
              className="xl:w-16 xl:h-16 md:w-12 md:h-12 w-10 h-10"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-[#202020] text-base md:text-lg xl:text-2xl font-bold">
                FRESH FOOD
              </h1>
              <p className="text-[#202020] text-sm md:text-base xl:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="flex gap-4  w-full">
            <img
              src="/icons/food.png"
              alt=""
              className="xl:w-16 xl:h-16 md:w-12 md:h-12 w-10 h-10"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-[#202020] text-base md:text-lg xl:text-2xl font-bold">
                CHEF&apos; SPECIALS
              </h1>
              <p className="text-[#202020] text-sm md:text-base xl:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="flex gap-4  w-full">
            <img
              src="/icons/glass.png"
              alt=""
              className="xl:w-16 xl:h-16 md:w-12 md:h-12 w-10 h-10"
            />

            <div className="flex flex-col gap-2">
              <h1 className="text-[#202020] text-base md:text-lg xl:text-2xl font-bold">
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
