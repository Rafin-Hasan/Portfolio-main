import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import {
  FaBootstrap,
  FaNpm,
  FaGithub,
  FaFigma,
  FaNodeJs,
  FaReact,
} from "react-icons/fa"; // React Icons for tools
import { SiTailwindcss, SiFirebase, SiRedux } from "react-icons/si"; // Additional Icons for Tailwind, Firebase, Redux

const ToolsComponent = () => {
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

  const tools = [
    {
      id: 1,
      name: "Bootstrap",
      icon: <FaBootstrap className="text-5xl text-purple-600" />,
      imageUrl:
        "https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo-shadow.png",
    },
    {
      id: 2,
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-5xl text-blue-400" />,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s",
    },
    {
      id: 3,
      name: "Firebase",
      icon: <SiFirebase className="text-5xl text-yellow-500" />,
      imageUrl:
        "https://www.gstatic.com/devrel-devsite/prod/veedbeaae685ee44a03112cb16b1d4bd8e26efe964d9c2b235745fe9600d13418/firebase/images/touchicon-180.png",
    },
    {
      id: 4,
      name: "NPM",
      icon: <FaNpm className="text-5xl text-red-500" />,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumZOfoPygz2_sAMcr0fKkOpLwShmCXjwtIg&s",
    },
    {
      id: 5,
      name: "GitHub",
      icon: <FaGithub className="text-5xl text-black" />,
      imageUrl:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
    {
      id: 6,
      name: "Redux",
      icon: <SiRedux className="text-5xl text-purple-500" />,
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:500/1*tOI6UC5EaS2fPItCesI-AQ.png ",
    },
    {
      id: 7,
      name: "Figma",
      icon: <FaFigma className="text-5xl text-purple-500" />,
      imageUrl:
        "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png",
    },
    {
      id: 8,
      name: "Node.js",
      icon: <FaNodeJs className="text-5xl text-green-600" />,
      imageUrl:
        "https://images.credly.com/images/51aeb74b-ec87-4069-93fc-0ea449c8d77f/twitter_thumb_201604_node.png",
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
            Tools & Libraries I Use
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={tool.id}
              className="relative h-40 w-40 bg-white border border-gray-200 rounded-lg flex flex-col justify-center items-center text-center hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 group"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              {/* Background image with reduced opacity on hover */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg z-0"
                style={{
                  backgroundImage: `url(${tool.imageUrl})`,
                }}
              ></div>

              {/* Icon and Tool Name */}
              <div className="relative z-10 flex flex-col justify-center items-center">
                <div className="mb-3">{tool.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-500 transition-colors duration-300">
                  {tool.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsComponent;
