import React from "react";

const MenuSlider = () => {
  return (
    <div className="w-full  h-auto relative overflow-hidden -mt-[132px] ">
      <div className="w-full h-[500px] relative ">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <img
          src="/menuPage/food-menu-cover.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default MenuSlider;
