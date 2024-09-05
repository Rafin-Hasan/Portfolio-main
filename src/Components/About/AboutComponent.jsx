import React from "react";
import Counters from "./Counters";
import Experience from "./Experience";
import DownloadButton from "./DownloadButton";

const AboutComponent = () => {
  return (
    <>
      <section className="bg-white w-full ">
        <div className="container">
          <div className="flex gap-[145px]">
            <div className="pt-[120px] pl-[140px] text-[#55527C]">
              <h5 className="poppins text-[18px] leading-6 font-medium">
                Hi! nice to meet you
              </h5>
              <p className="poppins text-[16px] leading-6 font-normal">I'm</p>
              <h1 className="poppins font-bold text-[40px]">Rafin Hasan</h1>
              <h5 className="poppins font-semibold text-[20px] leading-8 pb-3">
                A professional react developer
              </h5>
              <DownloadButton />
            </div>
            <div className="w-[545px] pt-[120px] ">
              <p className="poppins pb-3 text-[16px] leading-6 font-normal">
                Hi, It's me Rafin Hasan. I'm a professional web developer
                specialized in HTML, CSS, JS and React. Experienced in creating
                user friendly interfaces and committed to continuous learning
                the latest web tools and technologies.
              </p>
              <p className="poppins text-[16px] leading-6 font-normal">
                By using comments, I make my codes so neat and clean so that it
                could be easy to understand. My after sell service and some
                extra facilities always keeps my clients happy.
              </p>
            </div>
          </div>
          <div className=" flex items-center justify-center pt-[64px] pb-[120px]">
            <Counters />
          </div>
        </div>
      </section>
      <section className="container">
        <Experience />
      </section>
    </>
  );
};

export default AboutComponent;
