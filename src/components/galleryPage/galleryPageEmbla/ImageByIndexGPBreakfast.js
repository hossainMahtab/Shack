const image1 = "/galleryPage/breakfast/image1.jpeg";
const image2 = "/galleryPage/breakfast/image2.jpeg";
const image3 = "/galleryPage/breakfast/image3.jpeg";
const image4 = "/galleryPage/breakfast/image4.jpeg";
const image5 = "/galleryPage/breakfast/image5.jpeg";
const image6 = "/galleryPage/breakfast/image6.jpeg";
const image7 = "/galleryPage/breakfast/image7.jpeg";
const image8 = "/galleryPage/breakfast/image8.jpeg";
const image9 = "/galleryPage/breakfast/image9.jpeg";
const image10 = "/galleryPage/breakfast/image10.jpeg";

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

const ImageByIndexGPBreakfast = (index) => images[index % images.length];

export default ImageByIndexGPBreakfast;
