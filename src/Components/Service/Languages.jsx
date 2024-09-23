import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa"; // Icons for HTML, CSS, JS, React

const Languages = () => {
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

  const languages = [
    {
      id: 1,
      name: "HTML",
      icon: <FaHtml5 className="text-5xl text-red-600" />,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s",
    },
    {
      id: 2,
      name: "CSS",
      icon: <FaCss3Alt className="text-5xl text-blue-500" />,
      imageUrl: "https://www.svgrepo.com/show/303263/css3-logo.svg",
    },
    {
      id: 3,
      name: "JavaScript",
      icon: <FaJs className="text-5xl text-yellow-500" />,
      imageUrl: "https://www.svgrepo.com/show/355081/js.svg",
    },
    {
      id: 4,
      name: "React",
      icon: <FaReact className="text-5xl text-blue-400" />,
      imageUrl: "https://www.svgrepo.com/show/327388/logo-react.svg",
    },
  ];

  return (
    <section className="py-12 px-6 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex justify-center items-center mb-8">
          <h2
            className="text-4xl poppins font-extrabold text-gray-800"
            data-aos="fade-up"
          >
            Programming Languages I Use
          </h2>
        </div>

        {/* Grid Layout */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`}>
          {languages.map((language, index) => (
            <div
              key={language.id}
              className="relative h-40 w-40 bg-white border border-gray-200 rounded-lg flex flex-col justify-center items-center text-center hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 group"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              {/* Background image with reduced opacity on hover */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg z-0"
                style={{
                  backgroundImage: `url(${language.imageUrl})`,
                }}
              ></div>

              {/* Icon and Language Name */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <div className="text-gray-400 text-lg font-semibold mb-2">
                  {language.icon}
                </div>
                <h3
                  className={`text-xl font-bold text-gray-800 group-hover:text-purple-500 transition-colors duration-300 ${
                    windowWidth < 576 ? "text-lg" : "text-xl"
                  }`}
                >
                  {language.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
