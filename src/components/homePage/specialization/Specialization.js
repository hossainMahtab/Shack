import React from "react";

const Specialization = () => {
  return (
    <div className="w-full bg-[#F4F4F4]">
      <div className="container mx-auto">
        <div className="w-full flex gap-12  py-16">
          {/* 1 */}
          <div className="flex gap-4  w-1/3">
            <img src="/icons/groceries.png" alt="" className="w-16 h-16" />
            <div className="flex flex-col gap-2">
              <h1 className="text-[#202020] text-2xl font-bold">FRESH FOOD</h1>
              <p className="text-[#202020] text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="flex gap-4  w-1/3">
            <img src="/icons/food.png" alt="" className="w-16 h-16" />
            <div className="flex flex-col gap-2">
              <h1 className="text-[#202020] text-2xl font-bold">
                CHEF'S SPECIALS
              </h1>
              <p className="text-[#202020] text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="flex gap-4  w-1/3">
            <img src="/icons/glass.png" alt="" className="w-16 h-16" />

            <div className="flex flex-col gap-2">
              <h1 className="text-[#202020] text-2xl font-bold">GOOD WINE</h1>
              <p className="text-[#202020] text-lg">
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
