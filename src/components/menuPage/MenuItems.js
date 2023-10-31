import React from "react";
import { demoItems } from "./DemoItems";

const MenuItems = (itemType) => {
  // console.log("itemType", itemType.itemType);
  const { starters, mainCourse, soups, desserts } = demoItems;
  return (
    <>
      {itemType.itemType === "starters" && (
        <div className="w-[90%]  grid grid-cols-2 gap-x-20 gap-y-4">
          {starters.map((item, index) => (
            <div key={index} className=" w-full flex items-center gap-4 pt-4">
              <img
                src={item.image}
                alt="menu"
                className="w-20 h-20 rounded-full -rotate-[90deg]"
              />
              <div className="w-full flex flex-col ">
                <div className="w-full flex ">
                  <div className=" w-auto flex gap-2">
                    <h1 className="text-lg text-[#202020] font-semibold">
                      {item.item}
                    </h1>
                  </div>
                  <div className=" mx-2 mb-2 flex-grow border-b border-dashed border-slate-600 "></div>
                  <p className="text-lg text-[#202020] font-semibold">
                    {item.price}
                  </p>
                </div>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {itemType.itemType === "mainCourse" && (
        <div className="w-[90%]  grid grid-cols-2 gap-x-20 gap-y-4">
          {mainCourse.map((item, index) => (
            <div key={index} className=" w-full flex items-center gap-4 pt-4">
              <img
                src={item.image}
                alt="menu"
                className="w-20 h-20 rounded-full -rotate-[90deg]"
              />
              <div className="w-full flex flex-col ">
                <div className="w-full flex ">
                  <div className=" w-auto flex gap-2">
                    <h1 className="text-lg text-[#202020] font-semibold">
                      {item.item}
                    </h1>
                  </div>
                  <div className=" mx-2 mb-2 flex-grow border-b border-dashed border-slate-600 "></div>
                  <p className="text-lg text-[#202020] font-semibold">
                    {item.price}
                  </p>
                </div>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {itemType.itemType === "soups" && (
        <div className="w-[90%]  grid grid-cols-2 gap-x-20 gap-y-4">
          {soups.map((item, index) => (
            <div key={index} className=" w-full flex items-center gap-4 pt-4">
              <img
                src={item.image}
                alt="menu"
                className="w-20 h-20 rounded-full -rotate-[90deg]"
              />
              <div className="w-full flex flex-col ">
                <div className="w-full flex ">
                  <div className=" w-auto flex gap-2">
                    <h1 className="text-lg text-[#202020] font-semibold">
                      {item.item}
                    </h1>
                  </div>
                  <div className=" mx-2 mb-2 flex-grow border-b border-dashed border-slate-600 "></div>
                  <p className="text-lg text-[#202020] font-semibold">
                    {item.price}
                  </p>
                </div>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {itemType.itemType === "desserts" && (
        <div className="w-[90%]  grid grid-cols-2 gap-x-20 gap-y-4">
          {desserts.map((item, index) => (
            <div key={index} className=" w-full flex items-center gap-4 pt-4">
              <img
                src={item.image}
                alt="menu"
                className="w-20 h-20 rounded-full -rotate-[90deg]"
              />
              <div className="w-full flex flex-col ">
                <div className="w-full flex ">
                  <div className=" w-auto flex gap-2">
                    <h1 className="text-lg text-[#202020] font-semibold">
                      {item.item}
                    </h1>
                  </div>
                  <div className=" mx-2 mb-2 flex-grow border-b border-dashed border-slate-600 "></div>
                  <p className="text-lg text-[#202020] font-semibold">
                    {item.price}
                  </p>
                </div>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MenuItems;
