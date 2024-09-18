import React from "react";
import WorkSlider from "./WorkSlider";
import { useNavigate } from "react-router-dom";

const WorksComponents = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <>
      <div>
        <h2 className="Poppins font-bold text-center text-[#A5A6FF] text-[40px] pt-[30px] pl-[25px]">
          Some of my recent works
        </h2>
        <WorkSlider />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="Poppins font-bold text-center text-[#A5A6FF] text-[40px] pt-[30px] pl-[25px]">
          Are you interested to work with us?
        </h2>
        <button
          onClick={handleClick}
          className="p-3 bg-[#A5A6FF] poppins text-white font-medium leading-4 rounded-3xl hover:bg-blue-700 "
        >
          Contract now
        </button>
      </div>
    </>
  );
};

export default WorksComponents;
