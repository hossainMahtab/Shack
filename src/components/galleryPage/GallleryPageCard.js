import React, { useState } from "react";

const GallleryPageCard = (props) => {
  const { id, imgSrc, title } = props;

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleModalOpen = (id) => () => {
    props.handleOpen(true);
    props.handleCardId(id);
  };

  return (
    <div
      onClick={handleModalOpen(id)}
      onMouseEnter={() => setHoveredCard(id)}
      onMouseLeave={() => setHoveredCard(null)}
      className="w-full relative rounded-[10px] cursor-pointer overflow-hidden  "
    >
      <img
        src={imgSrc}
        alt="cover"
        className={` w-full h-[300px] lg:h-[360px] xl:h-[400px] object-cover rounded-[10px] ${
          hoveredCard === id
            ? "scale-[1.075] transition-all duration-300 ease-out"
            : "scale-[1.01] transition-all duration-300 ease-out"
        } `}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center gap-4 rounded-[10px]">
        <div className="text-white xl:text-4xl lg:text-3xl text-2xl font-bold uppercase">
          {title}
        </div>
      </div>
    </div>
  );
};

export default GallleryPageCard;
