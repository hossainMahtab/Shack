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
      className={` mt-4 ${borderColor} border-[6px] bg-transparent cursor-pointer ${hoverBorderColor} ${hoverTextColor} hover:bg-[#BC8D4B] hover:ease-in hover:transition-all hover:delay-200 ${textColor} px-10 py-3 uppercase font-semibold text-base `}
    >
      {btnText}
    </button>
  );
};

export default CommonButton;
