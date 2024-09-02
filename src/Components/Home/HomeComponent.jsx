import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomeComponent.css";

const HomeComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration (in ms)
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <>
      <section className="bg">
        <div className="flex gap-[119px] container">
          <div>
            <div className="mt-[166px]" data-aos="fade-up">
              <h1
                className="w-[620px] inter text-[#130F49] font-extrabold text-[50px] pl-[145px]"
                data-aos="fade-right"
              >
                Hi, I’m <span className="text-[#A5A6FF]">Rafin Hasan</span>!
              </h1>
              <h2
                className="w-[620px] savilla text-[#130F49] font-bold text-[50px] pl-[145px]"
                data-aos="fade-left"
              >
                Creative web developer based on React js.
              </h2>
              <p
                className="w-[620px] savilla text-[#130F49] font-normal text-[20px] pt-3 pl-[145px]"
                data-aos="fade-up"
              >
                I'm a React based professional frontend developer.
              </p>
            </div>
            <div className="pt-[56px] pl-[145px]" data-aos="zoom-in">
              <button className="bg-[#130F49] text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-[#130F49] border-2 border-[#130F49] transition duration-300 ease-in-out">
                Get a project
              </button>
              <button className="bg-transparent text-[#130F49] font-semibold py-2 px-6 rounded-full hover:bg-[#130F49] hover:text-white border-2 border-[#130F49] transition duration-300 ease-in-out ml-4">
                Let's talk
              </button>
            </div>
            <div className="flex pl-[130px] pt-[80px]" data-aos="fade-up">
              <div className="w-[1px] h-[92px]"></div>
              <div className="flex items-center bg-[#F4FBF6] p-4">
                <div className="border-l-4 border-[#f58b00] h-full mr-4"></div>
                <div className="text-[#130F49] inter leading-3">
                  <p className="text-lg font-semibold">+8801778566730</p>
                  <p className="text-base">rafinhasan.web@gmail.com</p>
                  <p className="text-base">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="pt-[100px] pr-[100px] w-[545px] h-[621px]"
            src="./img/banner.png"
            alt="banner"
            data-aos="fade-left"
          />
        </div>
      </section>
    </>
  );
};

export default HomeComponent;
