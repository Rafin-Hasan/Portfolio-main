import React from "react";
import "./NavberComponent.css";
import { NavLink } from "react-router-dom";

const NavberComponent = () => {
  return (
    <>
      <nav className="container ">
        <div className="flex flex-col gap-[93px] pt-[100px] w-[370px]">
          <div>
            <img className="px-[125px]" src="./img/logo.png" alt="logo" />
            <div className="relative">
              <h4 className="satisfy font-normal text-[60px] text-[#d8d8df] pl-[50px] absolute nam">
                Rafin Hasan
              </h4>
              <h5 className="inter text-center font-bold text-[30px] pt-[22px] ">
                Rafin Hasan
              </h5>
            </div>
          </div>
          <div>
            <ul className="flex flex-col gap-[20px] inter font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-[#333333] ${
                      isActive
                        ? "hover:text-[#d8d8df] text-[#A5A6FF] font-bold"
                        : "hover:text-[#ffffff]"
                    } flex justify-center`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className={({ isActive }) =>
                    `text-[#333333] ${
                      isActive
                        ? "hover:text-[#d8d8df] text-[#A5A6FF]"
                        : "hover:text-[#ffffff] text-black"
                    } flex justify-center`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className={({ isActive }) =>
                    `text-[#333333] ${
                      isActive
                        ? "hover:text-[#d8d8df] text-[#A5A6FF]"
                        : "hover:text-[#ffffff]"
                    } flex justify-center`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className={({ isActive }) =>
                    `text-[#333333] ${
                      isActive
                        ? "hover:text-[#d8d8df] text-[#A5A6FF]"
                        : "hover:text-[#ffffff] "
                    } flex justify-center`
                  }
                >
                  Works
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className={({ isActive }) =>
                    `text-[#333333] ${
                      isActive
                        ? "hover:text-[#d8d8df] text-[#A5A6FF]"
                        : "hover:text-[#ffffff]"
                    } flex justify-center`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="pt-[92px]"></div>
        </div>
      </nav>
    </>
  );
};

export default NavberComponent;
