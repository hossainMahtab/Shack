import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { flushSync } from "react-dom";
import imageByIndex from "./imageByIndex";
import titleByIndex from "./titleByIndex";
import { MdSearch } from "react-icons/md";

const TWEEN_FACTOR = 1.2;

const GalleryEmbla = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [tweenValues, setTweenValues] = useState([]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      return diffToTarget * (-1 / TWEEN_FACTOR) * 100;
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  const [hoveredCard, setHoveredCard] = useState(null);

  // console.log("hoveredCard", hoveredCard);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`embla__slide  cursor-pointer`}
              key={index}
            >
              {/* <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div> */}
              <div className="embla__parallax">
                <div
                  className="embla__parallax__laye relativer"
                  style={{
                    ...(tweenValues.length && {
                      transform: `translateX(${tweenValues[index]}%)`,
                    }),
                  }}
                >
                  <div className="absolute left-0 top-0 embla__slide__img embla__parallax__img bg-black/40 py-10  ">
                    {hoveredCard === index ? (
                      <div className=" custom-pulse w-full h-full flex justify-center items-center border-y-8 border-solid border-[#FFFFFF]"></div>
                    ) : (
                      <div className=" w-full h-full flex justify-center items-center border-y-8 border-solid border-transparent"></div>
                    )}
                  </div>
                  <img
                    className="embla__slide__img embla__parallax__img"
                    src={imageByIndex(index)}
                    alt="Your alt text"
                  />
                  <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center text-4xl font-semibold text-white">
                    <div className=" flex flex-col gap-4 items-center">
                      <h1 className=" text-6xl font-semibold text-[#FFFFFF] capitalize">
                        {titleByIndex(index)}
                      </h1>
                      {hoveredCard === index ? (
                        <h1 className=" custom-ping text-3xl text  font-semibold text-white hover:text-[#e4ae62] capitalize">
                          visit
                        </h1>
                      ) : (
                        <div className=" opacity-0  custom-ping text-3xl text  font-semibold text-transparent hover:text-[#e4ae62] capitalize">
                          visit
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryEmbla;
