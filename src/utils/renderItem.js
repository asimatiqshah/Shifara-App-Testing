import { SlideItem } from "./SlideItem.js";

// The renderItem function accepts options and returns a function that renders a SlideItem
export const renderItem = ({ rounded = false, style } = {}) => {
  return ({ index, item }) => (
    <SlideItem
      key={index}
      index={index}
      source={item} // 👈 Pass the image (item) here
      rounded={rounded}
      style={style}
    />
  );
};