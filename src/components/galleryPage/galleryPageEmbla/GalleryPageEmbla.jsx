import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { GalleryPageEmblaThumbnail } from "./GalleryPageEmblaThumbnail";
import ImageByIndexGPKitchen from "./imageByIndexGpKitchen";
import ImageByIndexGPInterior from "./imageByIndexGpInterior";
import ImageByIndexGPOutdoor from "./imageByIndexGpOutdoor";
import ImageByIndexGPBreakfast from "./imageByIndexGpBreakfast";
import ImageByIndexGPDessert from "./imageByIndexGpDessert";
import ImageByIndexGPPrivate from "./imageByIndexGpPrivate";

const GalleryPageEmbla = (props) => {
  const { slides, options, cardId, selectedCard } = props;
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
                  ((cardId || selectedCard) === 1 &&
                    ImageByIndexGPKitchen(index)) ||
                  ((cardId || selectedCard) === 2 &&
                    ImageByIndexGPInterior(index)) ||
                  ((cardId || selectedCard) === 3 &&
                    ImageByIndexGPOutdoor(index)) ||
                  ((cardId || selectedCard) === 4 &&
                    ImageByIndexGPBreakfast(index)) ||
                  ((cardId || selectedCard) === 5 &&
                    ImageByIndexGPDessert(index)) ||
                  ((cardId || selectedCard) === 6 &&
                    ImageByIndexGPPrivate(index))
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
                  ((cardId || selectedCard) === 1 &&
                    ImageByIndexGPKitchen(index)) ||
                  ((cardId || selectedCard) === 2 &&
                    ImageByIndexGPInterior(index)) ||
                  ((cardId || selectedCard) === 3 &&
                    ImageByIndexGPOutdoor(index)) ||
                  ((cardId || selectedCard) === 4 &&
                    ImageByIndexGPBreakfast(index)) ||
                  ((cardId || selectedCard) === 5 &&
                    ImageByIndexGPDessert(index)) ||
                  ((cardId || selectedCard) === 6 &&
                    ImageByIndexGPPrivate(index))
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
