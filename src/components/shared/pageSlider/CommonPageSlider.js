import React from "react";

const CommonPageSlider = (props) => {
  return (
    <div className="w-full  h-auto relative overflow-hidden -mt-[132px] ">
      <div className="w-full h-[460px] relative ">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <img
          //   src="/menuPage/food-menu-cover.jpeg"
          src={props.imgSrc}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-0 w-full h-full flex justify-center items-center">
          {props.imgContentsrc ? (
            <img
              // src="/homepage-img/taste-food.png"
              src={props.imgContentsrc}
              alt=""
              className="w-auto h-auto object-cover"
            />
          ) : (
            <h1 className="text-6xl font-semibold text-white capitalize">
              {props.title}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommonPageSlider;
