import React from "react";
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
    title: "Cookies",
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

  const handleCardId = (id) => {
    setCardId(id);
  };

  const handleOpen = (value) => {
    setOpen(value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <GalleryModal
        cardId={cardId}
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        title="abc"
        description="efd"
        title1="abcasdddd"
        description1="efdafffff"
      />
      <div className="w-full  ">
        <div className="container mx-auto">
          <div className="w-full grid grid-cols-3 gap-10 px-10 pt-20">
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
