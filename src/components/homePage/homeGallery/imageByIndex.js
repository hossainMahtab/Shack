const image1 = "/homepage-img/gallery-cover/chef.jpeg";
const image2 = "/homepage-img/gallery-cover/interior.jpeg";
const image3 = "/homepage-img/gallery-cover/outdoor.jpeg";
const image4 = "/homepage-img/gallery-cover/morning-breakfast.jpeg";
const image5 = "/homepage-img/gallery-cover/cookies.jpg";
const image6 = "/homepage-img/gallery-cover/private.jpeg";

export const images = [image1, image2, image3, image4, image5, image6];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
