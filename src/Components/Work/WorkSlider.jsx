import React, { useState, useEffect } from "react";
import Slider from "react-slick";

// Custom arrows for slider
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-gray-800 p-3 rounded-full hover:bg-gray-700`}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-gray-800 p-3 rounded-full hover:bg-gray-700`}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const WorkSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Keep track of current slide

  // Settings for the slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0", // No padding around center slide
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Update current slide index before change
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  // Dynamically assign classes based on current slide
  const getClassNames = (index) => {
    if (index === currentSlide) {
      return "w-full h-[300px] object-cover rounded-lg opacity-100 transition-all duration-500";
    } else {
      return "w-full h-[200px] object-cover rounded-lg opacity-70 transition-all duration-500";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Slider {...settings}>
        <div className="px-2">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Image 1"
            className={getClassNames(0)}
          />
        </div>
        <div className="px-2">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Image 2"
            className={getClassNames(1)}
          />
        </div>
        <div className="px-2">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Image 3"
            className={getClassNames(2)}
          />
        </div>
        <div className="px-2">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Image 4"
            className={getClassNames(3)}
          />
        </div>
        <div className="px-2">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Image 5"
            className={getClassNames(4)}
          />
        </div>
        <div className="px-2">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Image 6"
            className={getClassNames(5)}
          />
        </div>
      </Slider>
    </div>
  );
};

export default WorkSlider;
