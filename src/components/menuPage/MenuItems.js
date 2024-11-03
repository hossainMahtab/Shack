import React from "react";
import { demoItems } from "./DemoItems";

const MenuItems = (itemType) => {
  // console.log("itemType", itemType.itemType);
  const { starters, mainCourse, soups, desserts, drinks } = demoItems;
  return (
    <>
      {itemType.itemType === "starters" && (
        <div className="w-full lg:w-[90%]  grid grid-cols-1 lg:grid-cols-2 xl:gap-x-20 lg:gap-x-16 xl:gap-y-6 lg:gap-y-5 gap-y-4">
          {starters.map((item, index) => (
            <div
              key={index}
              className=" w-full flex items-center xl:gap-4 lg:gap-3 gap-2 xl:py-4 lg:py-3 py-2 "
            >
              <img
                src={item.image}
                alt="menu"
                className="xl:w-20 lg:w-16 w-12 xl:h-20 lg:h-16 h-12 object-cover  rounded-full -rotate-[90deg]"
              />
              <div className="w-full flex flex-col ">
                <div className="w-full flex ">
                  <div className=" w-auto flex gap-2">
                    <h1 className="xl:text-xl lg:text-lg text-base text-[#202020] font-semibold">
                      {item.item}
                    </h1>
                  </div>
                  <div className=" mx-2 mb-2 flex-grow border-b border-dashed border-slate-600 "></div>
                  <p className="xl:text-xl lg:text-lg text-base text-[#202020] font-semibold">
                    {item.price}
                  </p>
                </div>
                <p className="lg:text-base text-sm text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {itemType.itemType === "mainCourse" && (
        <div className="w-full lg:w-[90%]  grid grid-cols-1 lg:grid-cols-2 xl:gap-x-20 lg:gap-x-16 xl:gap-y-6 lg:gap-y-5 gap-y-4">
          {mainCourse.map((item, index) => (
            <div
              key={index}
              className=" w-full flex items-center xl:gap-4 lg:gap-3 gap-2 xl:py-4 lg:py-3 py-2"
            >
              <img
                src={item.image}
                alt="menu"
                className="xl:w-20 lg:w-16 w-12 xl:h-20 lg:h-16 h-12 object-cover  rounded-full -rotate-[90deg]"
              />
              <div className="w-full flex flex-col ">
                <div className="w-full flex ">
                  <div className=" w-auto flex gap-2">
                    <h1 className="xl:text-xl lg:text-lg text-base text-[#202020] font-semibold">
                      {item.item}
                    </h1>
                  </div>
                  <div className=" mx-2 mb-2 flex-grow border-b border-dashed border-slate-600 "></div>
                  <p className="xl:text-xl lg:text-lg text-base text-[#202020] font-semibold">
                    {item.price}
                  </p>
                </div>
                <p className="lg:text-base text-sm text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {itemType.itemType === "soups" && (
        <div className="w-full lg:w-[90%]  grid grid-cols-1 lg:grid-cols-2 xl:gap-x-20 lg:gap-x-16 xl:gap-y-6 lg:gap-y-5 gap-y-4">
          {soups.map((item, index) => (
            <div
              key={index}
              className=" w-full flex items-center xl:gap-4 lg:gap-3 gap-2 xl:py-4 lg:py-3 py-2"
            >
              <img
                src={item.image}
                alt="menu"
                className="xl:w-20 lg:w-16 w-12 xl:h-20 lg:h-16 h-12 object-cover  rounded-full -rotate-[90deg]"
              />
              <div className="w-full flex flex-col ">
                <div className="w-full flex ">
                  <div className=" w-auto flex gap-2">
                    <h1 className="xl:text-xl lg:text-lg text-base text-[#202020] font-semibold">
                      {item.item}
                    </h1>
                  </div>
                  <div className=" mx-2 mb-2 flex-grow border-b border-dashed border-slate-600 "></div>
                  <p className="xl:text-xl lg:text-lg text-base text-[#202020] font-semibold">
                    {item.price}
                  </p>
                </div>
                <p className="lg:text-base text-sm text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {itemType.itemType === "desserts" && (
        <div className="w-full lg:w-[90%]  grid grid-cols-1 lg:grid-cols-2 xl:gap-x-20 lg:gap-x-16 xl:gap-y-6 lg:gap-y-5 gap-y-4">
          {desserts.map((item, index) => (
            <div
              key={index}
              className=" w-full flex items-center xl:gap-4 lg:gap-3 gap-2 xl:py-4 lg:py-3 py-2"
            >
              <img
                src={item.image}
                alt="menu"
                className="xl:w-20 lg:w-16 w-12 xl:h-20 lg:h-16 h-12 object-cover  rounded-full -rotate-[90deg]"
              />
              <div className="w-full flex flex-col ">
                <div className="w-full flex ">
                  <div className=" w-auto flex gap-2">
                    <h1 className="xl:text-xl lg:text-lg text-base text-[#202020] font-semibold">
                      {item.item}
                    </h1>
                  </div>
                  <div className=" mx-2 mb-2 flex-grow border-b border-dashed border-slate-600 "></div>
                  <p className="xl:text-xl lg:text-lg text-base text-[#202020] font-semibold">
                    {item.price}
                  </p>
                </div>
                <p className="lg:text-base text-sm text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {itemType.itemType === "drinks" && (
        <div className="w-full lg:w-[90%]  grid grid-cols-1 lg:grid-cols-2 xl:gap-x-20 lg:gap-x-16 xl:gap-y-6 lg:gap-y-5 gap-y-4 mt-4">
          {drinks.map((drink, index) => (
            <div key={index}>
              <h1 className="xl:text-2xl lg:text-xl text-lg text-[#202020] font-bold text-start">
                {drink.category}
              </h1>
              {drink.items.map((item, index) => (
                <div
                  key={index}
                  className=" w-full flex items-center xl:gap-4 lg:gap-3 gap-2 xl:py-4 lg:py-3 py-2 mt-2"
                >
                  <img
                    src={item.image}
                    alt="menu"
                    className="xl:w-20 lg:w-16 w-12 xl:h-20 lg:h-16 h-12 object-cover  rounded-full -rotate-[90deg]"
                  />
                  <div className="w-full flex flex-col ">
                    <div className="w-full flex ">
                      <div className=" w-auto flex gap-2">
                        <h1 className="xl:text-xl lg:text-lg text-base text-[#202020] font-semibold">
                          {item.item}
                        </h1>
                      </div>
                      <div className=" mx-2 mb-2 flex-grow border-b border-dashed border-slate-600 "></div>
                      <p className="xl:text-xl lg:text-lg text-base text-[#202020] font-semibold">
                        {item.price}
                      </p>
                    </div>
                    <p className="lg:text-base text-sm text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MenuItems;
