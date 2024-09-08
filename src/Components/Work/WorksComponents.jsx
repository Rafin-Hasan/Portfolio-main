import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Custom arrows
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./WorksComponents.css"; // Import custom styles

// Custom arrow components
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-prev-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-next-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
};

const RecentProjects = () => {
  const projects = [
    { id: 1, title: "Firogo Majestic Co Ltd.", type: "UI Design" },
    { id: 2, title: "Web Innovators", type: "UX Design" },
    { id: 3, title: "Design Studio", type: "Mobile App" },
    { id: 4, title: "Creative Labs", type: "Animation" },
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
    <section className="py-12 px-4">
      <h2 className="text-2xl font-bold mb-6">Recent Completed Work</h2>
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="relative p-4">
            <div className="card bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <div className="card-content p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.type}</p>
              </div>
              <div className="card-overlay absolute inset-0 bg-gray-900 bg-opacity-70 text-white flex items-center justify-center opacity-0 transition-opacity duration-300">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p>{project.type}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default RecentProjects;
