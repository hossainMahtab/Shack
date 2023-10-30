import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Description } from "@mui/icons-material";
import GalleryPageEmbla from "@/components/galleryPage/galleryPageEmbla/GalleryPageEmbla";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  //   border: "0px solid #000",
  boxShadow: 24,
  p: 0,
  borderRadius: "10px",
};

const OPTIONS = {};
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function GalleryModal(props) {
  const { cardId, open, title, description, title1, description1 } = props;

  const handleCloseModal = () => props.handleClose();
  console.log(cardId, open);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="!outline-none focus:!outline-none">
          <>
            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
              {cardId === 1 ? `${title}` : `${title1}`}
            </Typography> */}
            <section className="sandbox__carousel">
              <GalleryPageEmbla
                slides={SLIDES}
                options={OPTIONS}
                cardId={cardId}
              />
            </section>
          </>
        </Box>
      </Modal>
    </div>
  );
}
