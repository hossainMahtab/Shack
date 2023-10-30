import React from "react";

export const GalleryPageEmblaThumbnail = (props) => {
  const { selected, imgSrc, index, onClick } = props;

  return (
    <div
      className={"GpEmbla-thumbs__slide".concat(
        selected ? " GpEmbla-thumbs__slide--selected" : ""
      )}
    >
      <button
        onClick={onClick}
        className="GpEmbla-thumbs__slide__button"
        type="button"
      >
        <div className="GpEmbla-thumbs__slide__number">
          <span>{index + 1}</span>
        </div>
        <img
          className="GpEmbla-thumbs__slide__img"
          src={imgSrc}
          alt="Your alt text"
        />
      </button>
    </div>
  );
};
