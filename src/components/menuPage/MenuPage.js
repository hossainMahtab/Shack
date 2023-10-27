import React from "react";
import MenuList from "./MenuList";
import MenuSlider from "./MenuSlider";

const MenuPage = () => {
  return (
    <div className="w-full flex flex-col gap-16">
      <MenuSlider />
      <MenuList />
    </div>
  );
};

export default MenuPage;
