import React from "react";
import "./AboutComponent.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Counters from "./Counters";
import Experience from "./Experience";
import DownloadButton from "./DownloadButton";
import Education from "./Education";
import { useEffect } from "react";

const AboutComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Longer duration for a smoother animation
      easing: "ease-in-out", // Smooth in-out effect
      once: true, // Animation happens only once when scrolled into view
      mirror: false, // Animation does not repeat when scrolling back up
    });
  }, []);
  return (
    <>
      <section className="bg-white w-full ">
        <div className="container">
          <div className="flex gap-[145px]">
            <div className="pt-[120px] pl-[100px] text-[#55527C]">
              <motion.h5
                className="poppins text-[18px] leading-6 font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Hi! nice to meet you
              </motion.h5>
              <motion.p
                className="poppins text-[16px] leading-6 font-normal"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                I'm
              </motion.p>
              <motion.h1
                className="poppins font-bold text-[40px]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Rafin Hasan
              </motion.h1>
              <motion.h5
                className="poppins font-semibold text-[20px] leading-8 pb-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                A professional React developer
              </motion.h5>
              <DownloadButton />
            </div>
            <div className="w-[545px] pt-[120px] ">
              <motion.p
                className="poppins text-[18px] leading-6 font-medium text-center text-[#55527C]"
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
                className="poppins text-[18px] leading-6 font-medium text-center text-[#55527C]"
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
            width="640"
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
