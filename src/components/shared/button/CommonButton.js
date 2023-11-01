import React from "react";

const CommonButton = ({
  btnText,
  borderColor,
  textColor,
  hoverBorderColor,
  hoverTextColor,
}) => {
  return (
    <button
      className={`  xl:mt-4 md:mt-3 mt-2  rounded-[6px] outline-none focus:outline-none ${borderColor} border-2 md:border-4  xl:border-[6px] bg-transparent cursor-pointer ${hoverBorderColor} ${hoverTextColor} hover:bg-[#e4ae62] hover:ease-in hover:transition-all hover:delay-200 ${textColor} xl:px-10 md:px-7 px-4 xl:py-3 md:py-2 py-1.5 uppercase font-semibold text-sm md:text-base `}
    >
      {btnText}
    </button>
  );
};

export default CommonButton;
