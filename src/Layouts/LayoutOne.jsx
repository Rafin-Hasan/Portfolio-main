import React from "react";
import Navber from "../Components/Navber/Navber";
import { Outlet } from "react-router-dom";

const LayoutOne = () => {
  return (
    <>
      <div className=" flex">
        <Navber />
        <Outlet />
      </div>
    </>
  );
};

export default LayoutOne;
