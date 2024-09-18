import React from "react";
import { motion } from "framer-motion";
import "./HomeComponent.css";
import { useNavigate } from "react-router-dom";

const HomeComponent = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/works");
  };
  const handleGO = () => {
    navigate("/contact");
  };
  return (
    <>
      <section className="bg ">
        <div className="flex gap-[119px] container">
          <div>
            <motion.div
              className="mt-[166px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <motion.h1
                className="w-[620px] inter text-[#130F49] font-extrabold text-[50px] pl-[145px]"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
              >
                Hi, I’m <span className="text-[#A5A6FF]">Rafin Hasan</span>!
              </motion.h1>
              <motion.h2
                className="w-[620px] kanit text-[#130F49] font-bold text-[50px] pl-[145px]"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.2 }}
              >
                Creative web developer based on React js.
              </motion.h2>
              <motion.p
                className="w-[620px] kanit text-[#130F49] font-normal text-[20px] pt-3 pl-[145px]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
              >
                I'm a React based professional frontend developer.
              </motion.p>
            </motion.div>

            <motion.div
              className="pt-[56px] pl-[145px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={handleClick}
                className="bg-[#130F49] text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-[#130F49] border-2 border-[#130F49] transition duration-300 ease-in-out"
              >
                Get a project
              </button>
              <button
                onClick={handleGO}
                className="bg-transparent text-[#130F49] font-semibold py-2 px-6 rounded-full hover:bg-[#130F49] hover:text-white border-2 border-[#130F49] transition duration-300 ease-in-out ml-4"
              >
                Let's talk
              </button>
            </motion.div>

            <motion.div
              className="flex pl-[130px] pt-[80px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              <div className="w-[1px] h-[92px]"></div>
              <div className="flex items-center bg-[#F4FBF6] p-4">
                <div className="border-l-4 border-[#f58b00] h-full mr-4"></div>
                <div className="text-[#130F49] inter leading-3">
                  <p className="text-lg font-semibold">+8801778566730</p>
                  <p className="text-base">rafinhasan.web@gmail.com</p>
                  <p className="text-base">Dhaka, Bangladesh</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.img
            className="pt-[100px] pr-[100px] w-[545px] h-[621px]"
            src="./img/banner.png"
            alt="banner"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          />
        </div>
      </section>
    </>
  );
};

export default HomeComponent;
