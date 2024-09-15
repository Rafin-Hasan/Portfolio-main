import React, { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"; // For arrow icons

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
    autoplay: true, // Enables autoplay
    autoplaySpeed: 2000, // 2 seconds for each slide
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Update current slide index
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

  // Function to handle manual slide change via custom arrows
  const next = () => {
    sliderRef.current.slickNext();
  };

  const prev = () => {
    sliderRef.current.slickPrev();
  };

  // Class assignment based on current slide
  const getClassNames = (index) => {
    if (index === currentSlide) {
      return "w-full h-[350px] transform scale-105 shadow-xl opacity-100 transition-all duration-700 ease-in-out rounded-lg bg-white bg-opacity-50 backdrop-blur-sm hover:scale-110";
    } else {
      return "w-full h-[300px] transform scale-95 opacity-70 transition-all duration-700 ease-in-out rounded-lg";
    }
  };

  return (
    <div className="relative container mx-auto px-4 py-12">
      {/* Custom Arrows at the Top Right */}
      <CustomArrows onNext={next} onPrev={prev} />

      {/* Slider */}
      <Slider {...settings} ref={sliderRef}>
        <div className="px-2">
          <img src="./SS/ss1.png" alt="Image 1" className={getClassNames(0)} />
        </div>
        <div className="px-2">
          <img src="./SS/ss2.png" alt="Image 2" className={getClassNames(1)} />
        </div>
        <div className="px-2">
          <img src="./SS/ss3.png" alt="Image 3" className={getClassNames(2)} />
        </div>
        <div className="px-2">
          <img src="./SS/ss4.png" alt="Image 4" className={getClassNames(3)} />
        </div>
        <div className="px-2">
          <img src="./SS/ss5.png" alt="Image 5" className={getClassNames(4)} />
        </div>
        {/* <div className="px-2">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Image 6"
            className={getClassNames(5)}
          />
        </div> */}
      </Slider>
    </div>
  );
};

export default WorkSlider;
