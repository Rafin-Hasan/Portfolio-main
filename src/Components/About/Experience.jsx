import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // For animations

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Web Developer",
      company: "Envato",
      date: "2018 - Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Envato",
      date: "2018 - Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Web Developer",
      company: "Envato",
      date: "2018 - Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      title: "Web Developer",
      company: "Envato",
      date: "2018 - Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="py-14 px-6 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold poppins text-gray-800 mb-10 text-center">
          Everything about me!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              className="relative bg-white shadow-xl rounded-xl p-8 border border-gray-200 transition-transform duration-200 transform hover:-translate-y-3 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }} // Framer Motion hover effect
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              data-tip={experience.title} // Tooltip on hover
            >
              <div className="flex justify-between items-center">
                <span className="text-sm text-purple-500 font-semibold">
                  {experience.date}
                </span>
                <span className="text-sm text-gray-400 font-bold">
                  - {experience.company}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-4">
                {experience.title}
              </h3>
              <p className="text-gray-600 mt-3 leading-relaxed">
                {experience.description}
              </p>
              <div className="mt-5">
                <Link
                  to="#"
                  className="text-blue-600 hover:text-blue-400 underline transition-colors"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
