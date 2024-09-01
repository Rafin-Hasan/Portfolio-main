import React from "react";
import "./HomeComponent.css";

const HomeComponent = () => {
  return (
    <>
      <section className=" bg">
        <div className="flex container">
          <div>
            <div className="mt-[166px]">
              <h1 className="w-[620px] inter font-extrabold text-[50px] pl-[145px]">
                Hi, I’m Rafin Hasan!
              </h1>
            </div>
          </div>
          <img
            className="pt-[100px] pr-[100px] w-[545px] h-[621px] "
            src="./img/banner.png"
            alt="banner"
          />
        </div>
      </section>
    </>
  );
};

export default HomeComponent;
