import React from "react";

const Parallax1 = () => {
  return (
    <>
      <div className="flex relative items-center justify-center bg-[url(/homepage-img/about-4.jpg)] bg-fixed bg-cover  max-w-full h-[500px]">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute">
          <img
            src="/homepage-img/taste-food.png"
            alt=""
            className="w-full h-auto"
          />
        </div>
      </div>
    </>
  );
};

export default Parallax1;
