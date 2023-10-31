const image1 = "/galleryPage/kitchen/image1.jpeg";
const image2 = "/galleryPage/kitchen/image2.jpeg";
const image3 = "/galleryPage/kitchen/image3.jpeg";
const image4 = "/galleryPage/kitchen/image4.jpeg";
const image5 = "/galleryPage/kitchen/image5.jpeg";
const image6 = "/galleryPage/kitchen/image6.jpeg";
const image7 = "/galleryPage/kitchen/image7.jpeg";
const image8 = "/galleryPage/kitchen/image8.jpeg";
const image9 = "/galleryPage/kitchen/image9.jpeg";
const image10 = "/galleryPage/kitchen/image10.jpeg";

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

const ImageByIndexGPKitchen = (index) => images[index % images.length];

export default ImageByIndexGPKitchen;
