import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import GalleryPageEmbla from "@/components/galleryPage/galleryPageEmbla/GalleryPageEmbla";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: "65%",
  // bgcolor: "background.paper",
  //   border: "0px solid #000",
  boxShadow: 24,
  p: 0,
  borderRadius: "10px",
};

// const OPTIONS = {};
// const SLIDE_COUNT = 10;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const CommonModal = ({ children, ...props }) => {
  const {
    cardId,
    open,
    customWidth,
    customBg,
    title,
    description,
    title1,
    description1,
    selectedCard,
  } = props;

  const handleCloseModal = () => props.handleClose();
  // console.log(cardId, selectedCard, open);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className={`!outline-none focus:!outline-none ${customWidth} ${customBg} !z-[1111] `}
        >
          <>
            <section className="">
              {/* <GalleryPageEmbla
                slides={SLIDES}
                options={OPTIONS}
                cardId={cardId}
                selectedCard={selectedCard}
              /> */}
              {children}
            </section>
          </>
        </Box>
      </Modal>
    </div>
  );
};
export default CommonModal;
