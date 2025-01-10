import React from "react";
import "../Styles/InfiniteSlider.css";

const images = [
  "../src/assets/images/image1.jpg",
  "../src/assets/images/image4.jpg",
  "../src/assets/images/image3.jpg",
  "../src/assets/images/image2.jpg",
];

const InfiniteSlider = () => {
  return (
    <div className="slider-container">
      <div className="slider">
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
        {images.map((image, index) => (
          <div key={`duplicate-${index}`} className="slide">
            <img src={image} alt={`Duplicate Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
