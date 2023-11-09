import React from "react";

const CommonContentHeader = (props) => {
  const {
    subtitle,
    title,
    subtitleSize,
    subtitleSizeLg,
    subtitleSizeXl,
    titleSizeXl,
    titleSizeLg,
    titleSize,
    lineBg,
    textColor,
  } = props;
  return (
    <div className="max-w-max flex flex-col items-center">
      {subtitle && (
        <h3
          className={` ${subtitleSize} lg:${subtitleSizeLg} xl:${subtitleSizeXl} font-semibold ${textColor} uppercase mb-1 `}
        >
          {subtitle}
        </h3>
      )}
      <h1
        className={` ${titleSize} lg:${titleSizeLg} xl:${titleSizeXl}  font-bold ${textColor} uppercase mb-2 px-2 `}
      >
        {title}
      </h1>
      <div className={`w-full h-0.5 ${lineBg} mb-1`}></div>
      <div className={`w-full h-2 ${lineBg} `}></div>
    </div>
  );
};

export default CommonContentHeader;
