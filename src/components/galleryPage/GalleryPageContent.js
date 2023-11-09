import React, { use, useEffect } from "react";
import GallleryPageCard from "./GallleryPageCard";
import GalleryModal from "../shared/modal/GalleryModal";

const demoCardData = [
  {
    id: 1,
    imgSrc: "/homepage-img/gallery-cover/chef.jpeg",
    title: "in the kitchen",
  },
  {
    id: 2,
    imgSrc: "/homepage-img/gallery-cover/interior.jpeg",
    title: "Interior",
  },
  {
    id: 3,
    imgSrc: "/homepage-img/gallery-cover/outdoor.jpg",
    title: "Outdoor",
  },
  {
    id: 4,
    imgSrc: "/homepage-img/gallery-cover/morning-breakfast.jpeg",
    title: "Breakfast",
  },
  {
    id: 5,
    imgSrc: "/homepage-img/gallery-cover/cookies.jpg",
    title: "Dessert",
  },
  {
    id: 6,
    imgSrc: "/homepage-img/gallery-cover/private.jpeg",
    title: "Private",
  },
];

const GalleryPageContent = () => {
  const [open, setOpen] = React.useState(false);
  const [cardId, setCardId] = React.useState(null);

  const [selectedCard, setSelectedCard] = React.useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("selectedCard");
    if (storedData) {
      setSelectedCard(parseInt(storedData));
      localStorage.removeItem("selectedCard");
    }
  }, []);

  // console.log("selectedCard", selectedCard);
  const handleCardId = (id) => {
    setCardId(id);
  };

  const handleOpen = (value) => {
    setOpen(value);
  };

  useEffect(() => {
    if (selectedCard) {
      setOpen(true);
    }
  }, [selectedCard]);

  const handleClose = () => {
    setOpen(false);
    selectedCard && setSelectedCard(null);
  };

  return (
    <>
      <GalleryModal
        selectedCard={selectedCard}
        cardId={cardId}
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      <div className="w-full  ">
        <div className="container mx-auto">
          <div className="w-full grid grid-cols-3 xl:gap-10 md:gap-8 gap-6 xl:px-20 md:px-16 px-12 pt-20">
            {demoCardData.map((card) => (
              <GallleryPageCard
                key={card.id}
                id={card.id}
                imgSrc={card.imgSrc}
                title={card.title}
                handleCardId={handleCardId}
                handleOpen={handleOpen}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPageContent;
