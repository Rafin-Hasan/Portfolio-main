import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft, FaArrowCircleRight } from "react-icons/fa";
import AOS from "aos"; // Import AOS for animations
import "aos/dist/aos.css"; // Import AOS styles

// Custom arrows positioned at the bottom-left
const CustomArrows = ({ onNext, onPrev }) => {
  return (
    <div className="absolute bottom-4 left-4 flex space-x-2 z-10">
      <button
        onClick={onPrev}
        aria-label="Previous Slide"
        className="p-2 bg-[#A5A6FF] text-white rounded-full hover:bg-blue-600 transition-all duration-300"
      >
        <FaArrowLeft size={16} />
      </button>
      <button
        onClick={onNext}
        aria-label="Next Slide"
        className="p-2 bg-[#A5A6FF] text-white rounded-full hover:bg-blue-600 transition-all duration-300"
      >
        <FaArrowRight size={16} />
      </button>
    </div>
  );
};

const WorkSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = React.useRef(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
      once: true, // Whether the animation should only happen once
    });
  }, []);

  // Slider settings with autoplay and responsive settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default to show 3 slides
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides for medium screens
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
          centerMode: false,
          centerPadding: "0",
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
    return index === currentSlide
      ? "relative w-full h-[350px] md:h-[300px] sm:h-[220px] transform scale-105 shadow-xl opacity-100 transition-all duration-700 ease-in-out rounded-lg bg-white bg-opacity-50 backdrop-blur-sm hover:scale-110"
      : "relative w-full h-[320px] md:h-[260px] sm:h-[200px] transform scale-95 opacity-70 transition-all duration-700 ease-in-out rounded-lg";
  };

  // Overlay style for hover
  const getOverlayClassNames = (index) => {
    return `absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex justify-center items-center transition-opacity duration-300 rounded-lg ${
      index === currentSlide ? "hover:opacity-100" : ""
    }`;
  };

  // Fancy button styles (with sky blue to deep blue gradient)
  const fancyButtonClassNames = () => {
    return `px-4 py-2 bg-gradient-to-r from-sky-400 to-blue-700 text-white font-semibold rounded-lg 
    shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center space-x-2`;
  };

  return (
    <div className="relative container mx-auto px-4 py-12" data-aos="fade-up">
      {/* Custom Arrows */}
      <CustomArrows onNext={next} onPrev={prev} />

      {/* Slider */}
      <div className="w-full lg:w-3/4 md:w-full sm:w-full mx-auto">
        <Slider {...settings} ref={sliderRef}>
          {[...Array(5).keys()].map((_, index) => (
            <div className="px-2" key={index}>
              <div
                className="relative"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <img
                  src={`./SS/ss${index + 1}.png`}
                  alt={`Project ${index + 1}`}
                  className={
                    getClassNames(index) +
                    " object-cover w-full h-full rounded-lg"
                  }
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
    </div>
  );
};

export default WorkSlider;
