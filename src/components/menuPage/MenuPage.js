import React from "react";
import MenuList from "./MenuList";
import MenuSlider from "./MenuSlider";

const MenuPage = () => {
  return (
    <div className="w-full flex flex-col">
      <MenuSlider />
      <MenuList />
    </div>
  );
};

export default MenuPage;
