import React from "react";

const Testimonials = () => {
  return (
    <div className="flex relative items-center justify-center bg-[url(/homepage-img/testimonial-cover.jpeg)] bg-fixed bg-cover  max-w-full h-[540px]">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute w-full">
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="text-[#FFFFFF] text-2xl font-bold uppercase mb-2">
            WHAT CLIENTS SAY
          </h2>
          <h1 className="text-[#FFFFFF] text-6xl font-bold uppercase mb-2">
            TESTIMONIALS{" "}
          </h1>
          <div className="w-[440px] h-0.5 bg-[#FFFFFF] mb-1"></div>
          <div className="w-[440px] h-2 bg-[#FFFFFF] mb-10"></div>
          <div className="w-full grid grid-cols-3 gap-16 px-20 ">
            {/* 1 */}
            <div className="w-full bg-[#75797a75] p-6 flex flex-col items-center justify-center">
              <p className="text-[#FFFFFF] text-center text-xl font-bold capitalize mb-2">
                "Ferri altera eripuit ne nam. Duo at tibique conclusionemque,
                nam modo ancillae tacimates et, cu vim omnes phaedrum
                conclusionemque. Ex tempor eligendi corrumpit vim, sea ei
                tacimates reformidans. Congue corpora vis ad."
              </p>
              <h2 className="text-[#FFFFFF] text-2xl font-bold capitalize mb-2">
                - John Doe -
              </h2>
              <h3 className="text-[#FFFFFF] text-xl font-bold "> ⭐⭐⭐⭐⭐</h3>
            </div>
            {/* 2 */}
            <div className="w-full bg-[#75797a75] p-6 flex flex-col items-center justify-center">
              <p className="text-[#FFFFFF] text-center text-xl font-bold capitalize mb-2">
                "Ferri altera eripuit ne nam. Duo at tibique conclusionemque,
                nam modo ancillae tacimates et, cu vim omnes phaedrum
                conclusionemque. Ex tempor eligendi corrumpit vim, sea ei
                tacimates reformidans. Congue corpora vis ad."
              </p>
              <h2 className="text-[#FFFFFF] text-2xl font-bold capitalize mb-2">
                - John Doe -
              </h2>
              <h3 className="text-[#FFFFFF] text-xl font-bold "> ⭐⭐⭐⭐⭐</h3>
            </div>
            {/* 3 */}
            <div className="w-full bg-[#75797a75] p-6 flex flex-col items-center justify-center">
              <p className="text-[#FFFFFF] text-center text-xl font-bold capitalize mb-2">
                "Ferri altera eripuit ne nam. Duo at tibique conclusionemque,
                nam modo ancillae tacimates et, cu vim omnes phaedrum
                conclusionemque. Ex tempor eligendi corrumpit vim, sea ei
                tacimates reformidans. Congue corpora vis ad."
              </p>
              <h2 className="text-[#FFFFFF] text-2xl font-bold capitalize mb-2">
                - John Doe -
              </h2>
              <h3 className="text-[#FFFFFF] text-xl font-bold "> ⭐⭐⭐⭐⭐</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
