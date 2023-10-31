const image1 = "/galleryPage/private/image1.jpeg";
const image2 = "/galleryPage/private/image2.jpeg";
const image3 = "/galleryPage/private/image3.jpeg";
const image4 = "/galleryPage/private/image4.jpeg";
const image5 = "/galleryPage/private/image5.jpeg";
const image6 = "/galleryPage/private/image6.jpeg";
const image7 = "/galleryPage/private/image7.jpeg";
const image8 = "/galleryPage/private/image8.jpeg";
const image9 = "/galleryPage/private/image9.jpeg";
const image10 = "/galleryPage/private/image10.jpeg";

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

const ImageByIndexGPPrivate = (index) => images[index % images.length];

export default ImageByIndexGPPrivate;
