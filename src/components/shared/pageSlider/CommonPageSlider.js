import React from "react";

const CommonPageSlider = (props) => {
  return (
    <div className="w-full  h-auto  overflow-hidden -mt-[132px] ">
      <div className="w-full h-full relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <img
          //   src="/menuPage/food-menu-cover.jpeg"
          src={props.imgSrc}
          alt=""
          className="w-full min-h-[300px] max-h-[460px] object-cover"
        />
        <div className="absolute top-12 lg:top-6 left-0 w-full h-full  flex justify-center items-center text-center overflow-hidden">
          {props.imgContentsrc ? (
            <img
              // src="/homepage-img/taste-food.png"
              src={props.imgContentsrc}
              alt=""
              className="w-auto min-h-[100px] max-h-[120px] sm:min-h-[120px] sm:max-h-[240px] lg:max-h-[340px] lg:min-h-[240px] mt-6 sm:mt-4 lg:mt-2 object-cover"
            />
          ) : (
            <h1 className="xl:text-6xl lg:text-5xl text-4xl font-semibold text-white uppercase">
              {props.title}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommonPageSlider;
