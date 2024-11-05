const image1 = "/galleryPage/dessert/image1.jpeg";
const image2 = "/galleryPage/dessert/image2.jpeg";
const image3 = "/galleryPage/dessert/image3.jpeg";
const image4 = "/galleryPage/dessert/image4.jpeg";
const image5 = "/galleryPage/dessert/image5.jpeg";
const image6 = "/galleryPage/dessert/image6.jpeg";
const image7 = "/galleryPage/dessert/image7.jpeg";
const image8 = "/galleryPage/dessert/image8.jpeg";
const image9 = "/galleryPage/dessert/image9.jpeg";
const image10 = "/galleryPage/dessert/image10.jpeg";

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

const ImageByIndexGPDessert = (index) => {
  return images[index % images.length];
};
export default ImageByIndexGPDessert;
