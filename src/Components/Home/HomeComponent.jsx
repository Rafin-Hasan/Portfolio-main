import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HomeComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/works");
  };
  const handleGO = () => {
    navigate("/contact");
  };

  // Responsive styles based on window width
  const containerStyle = {
    display: "flex",
    flexDirection: windowWidth < 768 ? "column" : "row",
    gap: windowWidth < 768 ? "20px" : "119px",
    padding: windowWidth < 576 ? "20px" : "0 50px",
    justifyContent: windowWidth < 768 ? "center" : "space-between",
    alignItems: windowWidth < 768 ? "center" : "flex-start",
  };

  const headingStyle = {
    fontSize: windowWidth < 576 ? "28px" : windowWidth < 768 ? "40px" : "50px",
    textAlign: windowWidth < 768 ? "center" : "left",
    maxWidth: "100%",
  };

  const paragraphStyle = {
    fontSize: windowWidth < 576 ? "16px" : "20px",
    textAlign: windowWidth < 768 ? "center" : "left",
    marginTop: "10px",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: windowWidth < 768 ? "center" : "flex-start",
    gap: "10px",
    marginTop: "30px",
  };

  const imgStyle = {
    width: windowWidth < 576 ? "80%" : windowWidth < 768 ? "50%" : "545px",
    height: "auto",
    marginTop: windowWidth < 768 ? "20px" : "100px",
    marginBottom: windowWidth < 768 ? "40px" : "0",
  };

  const contactStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: windowWidth < 768 ? "center" : "flex-start",
    marginTop: "40px",
  };

  // Style for the "pl-[50px]" section with conditional absolute positioning
  const plStyle = {
    paddingLeft: windowWidth < 768 ? "0px" : "50px",
    position: windowWidth > 768 ? "absolute" : "relative",
    top: windowWidth > 768 ? "450px" : "auto",
  };

  return (
    <section style={{ backgroundColor: "#F4FBF6" }}>
      <div style={containerStyle}>
        <div>
          <motion.div
            className="mt-[100px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <motion.h1
              style={headingStyle}
              className="inter text-[#130F49] font-extrabold"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
            >
              Hi, I’m <span style={{ color: "#A5A6FF" }}>Rafin Hasan</span>!
            </motion.h1>
            <motion.h2
              style={headingStyle}
              className="kanit text-[#130F49] font-bold"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              Creative web developer based on React js.
            </motion.h2>
            <motion.p
              style={paragraphStyle}
              className="kanit text-[#130F49] font-normal"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              I'm a React-based professional frontend developer.
            </motion.p>
          </motion.div>
        </div>

        <motion.img
          style={imgStyle}
          src="./img/banner.png"
          alt="banner"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        />
      </div>
      <div style={plStyle}>
        <motion.div
          style={buttonContainerStyle}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={handleClick}
            className="bg-[#130F49] text-white font-semibold py-2 px-4 rounded-full hover:bg-white hover:text-[#130F49] border-2 border-[#130F49] transition duration-300 ease-in-out"
          >
            Get a project
          </button>
          <button
            onClick={handleGO}
            className="bg-transparent text-[#130F49] font-semibold py-2 px-4 rounded-full hover:bg-[#130F49] hover:text-white border-2 border-[#130F49] transition duration-300 ease-in-out"
          >
            Let's talk
          </button>
        </motion.div>

        <motion.div
          style={contactStyle}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          <div className="text-[#130F49] inter leading-3 text-center">
            <p className="text-lg font-semibold">+8801778566730</p>
            <p className="text-base">rafinhasan.web@gmail.com</p>
            <p className="text-base">Dhaka, Bangladesh</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeComponent;
