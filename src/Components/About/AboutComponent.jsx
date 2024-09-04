import React from "react";
import Counters from "./Counters";

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
            </div>
            <div className="w-[545px] "></div>
          </div>
          <div className=" flex items-center justify-center">
            <Counters />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;
