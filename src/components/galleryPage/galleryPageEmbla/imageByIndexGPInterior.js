const image1 = "/galleryPage/interior/image1.jpeg";
const image2 = "/galleryPage/interior/image2.jpeg";
const image3 = "/galleryPage/interior/image3.jpeg";
const image4 = "/galleryPage/interior/image4.jpeg";
const image5 = "/galleryPage/interior/image5.jpeg";
const image6 = "/galleryPage/interior/image6.jpeg";
const image7 = "/galleryPage/interior/image7.jpeg";
const image8 = "/galleryPage/interior/image8.jpeg";
const image9 = "/galleryPage/interior/image9.jpeg";
const image10 = "/galleryPage/interior/image10.jpeg";

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

const ImageByIndexGPInterior = (index) => {
  return images[index % images.length];
};

export default ImageByIndexGPInterior;
