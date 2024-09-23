import React, { useEffect, useState } from "react";
import "./AboutComponent.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Counters from "./Counters";
import Experience from "./Experience";
import DownloadButton from "./DownloadButton";
import Education from "./Education";

const AboutComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Responsive styles based on window width
  const containerStyle = {
    display: "flex",
    flexDirection: windowWidth < 768 ? "column" : "row",
    gap: windowWidth < 768 ? "20px" : "145px",
  };

  const textStyle = {
    paddingLeft: windowWidth < 768 ? "0px" : "100px",
    textAlign: windowWidth < 768 ? "center" : "left",
  };

  const headingStyle = {
    fontSize: windowWidth < 576 ? "28px" : windowWidth < 768 ? "36px" : "40px",
  };

  const paragraphStyle = {
    fontSize: windowWidth < 576 ? "14px" : "18px",
  };

  return (
    <>
      <section className="bg-white w-full ">
        <div className="container">
          <div style={containerStyle}>
            <div className="pt-[120px]" style={textStyle}>
              <motion.h5
                className="poppins leading-6 font-medium"
                style={paragraphStyle}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Hi! nice to meet you
              </motion.h5>
              <motion.p
                className="poppins leading-6 font-normal"
                style={paragraphStyle}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                I'm
              </motion.p>
              <motion.h1
                className="poppins font-bold"
                style={headingStyle}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Rafin Hasan
              </motion.h1>
              <motion.h5
                className="poppins font-semibold leading-8 pb-3"
                style={paragraphStyle}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                A professional React developer
              </motion.h5>
              <DownloadButton />
            </div>
            <div className="w-[545px] pt-[120px]">
              <motion.p
                className="poppins leading-6 font-medium text-center text-[#55527C]"
                style={paragraphStyle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0 }}
              >
                Hi, It's me Rafin Hasan. I'm a professional web developer
                specialized in HTML, CSS, JS and React. Experienced in creating
                user-friendly interfaces and committed to continuous learning
                the latest web tools and technologies.
              </motion.p>
              <motion.p
                className="poppins leading-6 font-medium text-center text-[#55527C]"
                style={paragraphStyle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                By using comments, I make my codes so neat and clean so that it
                could be easy to understand. My after-sell service and some
                extra facilities always keep my clients happy.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="video-container">
          <iframe
            width="100%"
            height="360"
            src="./Intro Video/Intro.mp4"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded video"
          ></iframe>
        </div>
        <div className="flex items-center justify-center pt-[64px] pb-[120px]">
          <Counters />
        </div>
      </section>
      <section
        className="container"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <Education />
      </section>
      <section
        className="container"
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-delay="400"
      >
        <Experience />
      </section>
    </>
  );
};

export default AboutComponent;
