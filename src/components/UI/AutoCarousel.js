import React, { useState, useEffect } from "react";
import classes from "./AutoCarousel.module.css"; 

function AutoCarousel({ images, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer); 
  }, [images.length, interval]);

  return (
    <div className={classes.carousel}>
      <div 
        className={classes.carouselImages} 
        style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease-in-out' }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={classes.image}
          />
        ))}
      </div>
      <div className={classes.carouselControls}>
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={currentIndex === index ? classes.active : ""}
          />
        ))}
      </div>
    </div>
  );
}

export default AutoCarousel;