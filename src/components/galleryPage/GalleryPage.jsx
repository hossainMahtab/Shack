import React from "react";
import GalleryPageSlider from "./GalleryPageSlider";
import GalleryPageContent from "./GalleryPageContent";

const GalleryPage = () => {
  return (
    <div className="w-full flex flex-col">
      <GalleryPageSlider />
      <GalleryPageContent />
    </div>
  );
};

export default GalleryPage;
