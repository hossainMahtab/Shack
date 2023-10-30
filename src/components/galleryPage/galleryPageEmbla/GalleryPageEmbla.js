import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { GalleryPageEmblaThumbnail } from "./GalleryPageEmblaThumbnail";
import imageByIndexGPKitchen from "./imageByIndexGPKitchen";
import imageByIndexGPInterior from "./imageByIndexGPInterior";

const GalleryPageEmbla = (props) => {
  const { slides, options, cardId } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="GpEmbla">
      <div className="GpEmbla__viewport" ref={emblaMainRef}>
        <div className="GpEmbla__container">
          {slides.map((index) => (
            <div className="GpEmbla__slide" key={index}>
              <div className="GpEmbla__slide__number">
                <span>{index + 1}</span>
              </div>
              <img
                className="GpEmbla__slide__img"
                src={
                  cardId === 1
                    ? imageByIndexGPKitchen(index)
                    : imageByIndexGPInterior(index)
                }
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="GpEmbla-thumbs">
        <div className="GpEmbla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="GpEmbla-thumbs__container">
            {slides.map((index) => (
              <GalleryPageEmblaThumbnail
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                imgSrc={
                  cardId === 1
                    ? imageByIndexGPKitchen(index)
                    : imageByIndexGPInterior(index)
                }
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPageEmbla;
