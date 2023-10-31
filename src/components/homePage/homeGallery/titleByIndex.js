const title1 = "Into the kitchen";
const title2 = "Interior";
const title3 = "Outdoor";
const title4 = "Morning breakfast";
const title5 = "Desserts";
const title6 = "Private Dinner";

export const titles = [title1, title2, title3, title4, title5, title6];
const TitleByIndex = (index) => titles[index % titles.length];

export default TitleByIndex;
