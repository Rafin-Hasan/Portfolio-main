import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Custom arrows

// Custom arrow component
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute top-1/2 left-4 transform -translate-y-1/2 z-10 ${className}`}
      style={{
        ...style,
        display: "block",
        background: "rgba(0,0,0,0.5)",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <FaChevronLeft className="text-white text-2xl p-2" />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute top-1/2 right-4 transform -translate-y-1/2 z-10 ${className}`}
      style={{
        ...style,
        display: "block",
        background: "rgba(0,0,0,0.5)",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <FaChevronRight className="text-white text-2xl p-2" />
    </div>
  );
};

const RecentProjects = () => {
  const projects = [
    { id: 1, title: "Firogo Majestic Co Ltd.", type: "UI Design" },
    { id: 2, title: "Firogo Majestic Co Ltd.", type: "UI Design" },
    { id: 3, title: "Firogo Majestic Co Ltd.", type: "UI Design" },
    { id: 4, title: "Firogo Majestic Co Ltd.", type: "UI Design" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Recent Completed Work</h2>
        <Slider {...settings} className="relative">
          {projects.map((project) => (
            <div key={project.id} className="p-4">
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.type}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default RecentProjects;
