import React, { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft, FaArrowCircleRight } from "react-icons/fa"; // For arrow icons

// Custom arrows positioned at the top-right
const CustomArrows = ({ onNext, onPrev }) => {
  return (
    <div className="absolute bottom-4 left-4 flex space-x-2 z-10">
      <button
        onClick={onPrev}
        className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition-all duration-300"
      >
        <FaArrowLeft size={16} />
      </button>
      <button
        onClick={onNext}
        className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition-all duration-300"
      >
        <FaArrowRight size={16} />
      </button>
    </div>
  );
};

const WorkSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = React.useRef(null);

  // Slider settings with autoplay and timer
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
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

  const next = () => {
    sliderRef.current.slickNext();
  };

  const prev = () => {
    sliderRef.current.slickPrev();
  };

  // Class assignment based on current slide
  const getClassNames = (index) => {
    if (index === currentSlide) {
      return "relative w-full h-[350px] transform scale-105 shadow-xl opacity-100 transition-all duration-700 ease-in-out rounded-lg bg-white bg-opacity-50 backdrop-blur-sm hover:scale-110";
    } else {
      return "relative w-full h-[300px] transform scale-95 opacity-70 transition-all duration-700 ease-in-out rounded-lg";
    }
  };

  // Overlay style for hover
  const getOverlayClassNames = (index) => {
    return `absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex justify-center items-center transition-opacity duration-300 rounded-lg ${
      index === currentSlide ? "hover:opacity-100" : ""
    }`;
  };

  // Fancy button styles
  const fancyButtonClassNames = () => {
    return `px-6 py-3 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-semibold rounded-lg 
    shadow-lg transform hover:scale-105 hover:shadow-xl hover:glow transition-all duration-300 flex items-center space-x-2`;
  };

  return (
    <div className="relative container mx-auto px-4 py-12">
      {/* Custom Arrows at the Top Left */}
      <CustomArrows onNext={next} onPrev={prev} />

      {/* Slider */}
      <Slider {...settings} ref={sliderRef}>
        {[...Array(5).keys()].map((_, index) => (
          <div className="px-2" key={index}>
            <div className="relative">
              <img
                src={`./SS/ss${index + 1}.png`}
                alt={`Image ${index + 1}`}
                className={getClassNames(index)}
              />
              {/* Overlay on hover */}
              <div className={getOverlayClassNames(index)}>
                <button className={fancyButtonClassNames()}>
                  <span>Visit</span>
                  <FaArrowCircleRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WorkSlider;
