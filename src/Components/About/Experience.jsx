import React from "react";
import { Link } from "react-router-dom";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Web Developer",
      company: "Upwork",
      date: "2021 - Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl:
        "https://media.licdn.com/dms/image/C5612AQGEiomp6ho-Jw/article-cover_image-shrink_600_2000/0/1577679659746?e=2147483647&v=beta&t=XNtkM0XU2jyJChnDOKZJKGR-ojXXAPyFV3RFq8_vSJE", // Add your image URL here
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Fiverr",
      date: "2021 - Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl:
        "https://fiverr-res.cloudinary.com/npm-assets/layout-server/fiverr-og-logo.5fd6463.png", // Add your image URL here
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
            <div
              key={experience.id}
              className="relative bg-white shadow-xl rounded-xl p-8 border border-gray-200 transition-transform duration-200 transform hover:-translate-y-3 hover:shadow-2xl group"
            >
              {/* Background image with reduced opacity */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-xl z-0"
                style={{
                  backgroundImage: `url(${experience.imageUrl})`,
                }}
              ></div>

              {/* Card content, kept above the background */}
              <div className="relative z-10">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
