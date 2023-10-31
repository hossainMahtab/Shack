const image1 = "/galleryPage/outdoor/image1.jpeg";
const image2 = "/galleryPage/outdoor/image2.jpeg";
const image3 = "/galleryPage/outdoor/image3.jpeg";
const image4 = "/galleryPage/outdoor/image4.jpeg";
const image5 = "/galleryPage/outdoor/image5.jpeg";
const image6 = "/galleryPage/outdoor/image6.jpeg";
const image7 = "/galleryPage/outdoor/image7.jpeg";
const image8 = "/galleryPage/outdoor/image8.jpeg";
const image9 = "/galleryPage/outdoor/image9.jpeg";
const image10 = "/galleryPage/outdoor/image10.jpeg";

export const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const ImageByIndexGPOutdoor = (index) => images[index % images.length];

export default ImageByIndexGPOutdoor;
