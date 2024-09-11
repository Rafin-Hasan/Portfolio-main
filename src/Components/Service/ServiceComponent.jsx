import React from "react";
import { motion } from "framer-motion"; // For animations

const ServiceComponent = () => {
  const services = [
    {
      id: 1,
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisl.",
      link: "#",
    },
    {
      id: 2,
      title: "UI/UX",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisl.",
      link: "#",
    },
    {
      id: 3,
      title: "Mobile Application",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisl.",
      link: "#",
    },
    {
      id: 4,
      title: "User Research",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisl.",
      link: "#",
    },
    {
      id: 5,
      title: "Animation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisl.",
      link: "#",
    },
    {
      id: 6,
      title: "Game Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisl.",
      link: "#",
    },
  ];

  return (
    <section className="py-12 px-6 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 ml-[400px]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl poppins font-extrabold text-gray-800">
            My Services
          </h2>
          <a
            href="mailto:info@elsic.com"
            className="text-blue-600 inter font-semibold hover:scale-110"
          >
            rafinhasan.web@gmail.com
          </a>
        </div>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="relative border border-gray-200 rounded-lg p-6 hover:shadow-2xl hover:bg-gradient-to-r from-purple-50 via-white to-blue-50 transition-transform transform hover:-translate-y-2 duration-300 group"
              whileHover={{ scale: 1.05 }} // Framer Motion animation
              data-tip={service.title} // Tooltip for each service
            >
              <div className="text-gray-400 text-lg font-semibold mb-3">
                0{service.id}
              </div>
              <motion.h3
                className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-500 transition-colors duration-300"
                whileHover={{ x: 10 }} // Moves the title slightly to the right on hover
              >
                {service.title}
              </motion.h3>
              <p className="text-gray-500 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>
              <a
                href={service.link}
                className="text-blue-600 font-semibold inline-flex items-center group-hover:text-blue-400 transition-colors"
              >
                Learn More
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent;
