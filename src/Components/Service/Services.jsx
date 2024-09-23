import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import {
  FaLaptopCode, // For Web Development
  FaPaintBrush, // For Web Design
  FaObjectGroup, // For UI/UX Design
} from "react-icons/fa"; // React Icons
import { Link } from "react-router-dom";

const Services = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing function
      once: true, // Whether animation should happen only once
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "UI/UX",
      description: "Create beautiful and functional websites.",
      icon: <FaObjectGroup />, // Appropriate icon for UI/UX
      imageUrl:
        "https://www.creativeitinstitute.com/images/course/course_1662637290.jpg",
    },
    {
      id: 2,
      title: "Web Design",
      description: "Optimize user experience with thoughtful interfaces.",
      icon: <FaPaintBrush />, // Appropriate icon for Web Design
      imageUrl:
        "https://www.academyoflearning.com/wp-content/uploads/2022/06/Web_design_7.jpeg",
    },
    {
      id: 3,
      title: "Web Development",
      description: "Develop mobile applications for all platforms.",
      icon: <FaLaptopCode />, // Appropriate icon for Web Development
      imageUrl:
        "https://media.licdn.com/dms/image/D4D12AQHWjlf6CXDezA/article-cover_image-shrink_720_1280/0/1698039213268?e=2147483647&v=beta&t=9d8VyULomdIk9zkz_U9N_TE4_pUdFq1dFCglRh8fv_o",
    },
  ];

  return (
    <section className="py-12 px-6 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex justify-between items-center mb-8">
          <h2
            className="text-4xl poppins font-extrabold text-gray-800"
            data-aos="fade-up"
          >
            My Services
          </h2>
          <Link
            to="rafinhasan.web@gmail.com"
            className="text-blue-600 inter pl-[10px] font-semibold hover:scale-110"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            rafinhasan.web@gmail.com
          </Link>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="relative border border-gray-200 rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 group"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              {/* Background image with reduced opacity */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg z-0"
                style={{
                  backgroundImage: `url(${service.imageUrl})`,
                }}
              ></div>

              {/* Card content, kept above the background */}
              <div className="relative z-10 flex flex-col justify-center items-center">
                <div className="text-gray-400 text-lg font-semibold mb-3 flex items-center">
                  <span className="mr-2 text-2xl text-purple-500">
                    {service.icon}
                  </span>
                  {service.id < 10 ? `0${service.id}` : service.id}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 transition-colors duration-300 text-center">
                  {service.title}
                </h3>
                <p className="text-black mb-4 transition-colors duration-300 text-center">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-semibold inline-flex items-center transition-colors hover:text-white"
                >
                  Learn More
                  <span className="ml-2 transition-transform group-hover:translate-x-1 hover:text-white">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
