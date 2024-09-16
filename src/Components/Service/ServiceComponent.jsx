import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaUserAlt,
  FaGamepad,
  FaObjectGroup,
} from "react-icons/fa"; // React Icons

const ServiceComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing function
      once: true, // Whether animation should happen only once
    });
  }, []);

  const services = [
    {
      id: 1,
      title: "Web Design",
      description: "Create beautiful and functional websites.",
      icon: <FaPaintBrush />,
    },
    {
      id: 2,
      title: "UI/UX",
      description: "Optimize user experience with thoughtful interfaces.",
      icon: <FaObjectGroup />,
    },
    {
      id: 3,
      title: "Mobile Application",
      description: "Develop mobile applications for all platforms.",
      icon: <FaMobileAlt />,
    },
    {
      id: 4,
      title: "User Research",
      description: "Understand your users deeply to improve your product.",
      icon: <FaUserAlt />,
    },
    {
      id: 5,
      title: "Animation",
      description: "Bring life to your ideas with engaging animations.",
      icon: <FaLaptopCode />,
    },
    {
      id: 6,
      title: "Game Development",
      description: "Build immersive gaming experiences.",
      icon: <FaGamepad />,
    },
  ];

  return (
    <section className="py-12 px-6 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2
            className="text-4xl poppins font-extrabold text-gray-800"
            data-aos="fade-up"
          >
            My Services
          </h2>
          <a
            href="mailto:info@elsic.com"
            className="text-blue-600 inter font-semibold hover:scale-110"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            rafinhasan.web@gmail.com
          </a>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="relative border border-gray-200 rounded-lg p-6 hover:shadow-2xl hover:bg-gradient-to-r from-purple-50 via-white to-blue-50 transition-transform transform hover:-translate-y-2 duration-300 group"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="text-gray-400 text-lg font-semibold mb-3 flex items-center">
                <span className="mr-2 text-2xl text-purple-500">
                  {service.icon}
                </span>
                0{service.id}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-500 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold inline-flex items-center group-hover:text-blue-400 transition-colors"
              >
                Learn More
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent;
