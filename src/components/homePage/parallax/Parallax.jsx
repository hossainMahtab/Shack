import React from "react";

const Parallax = () => {
  return (
    <>
      <div className="flex relative items-center justify-center bg-[url(/homepage-img/pizza.jpg)] bg-fixed bg-cover  max-w-full h-[500px]">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="absolute text-[#FFFFFF] text-6xl font-bold">
          Hello World
        </h1>
      </div>
    </>
  );
};

export default Parallax;
