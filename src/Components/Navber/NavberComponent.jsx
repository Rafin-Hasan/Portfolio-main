import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Card from "./SocialMedia";
import "./NavberComponent.css";

const NavberComponent = () => {
  return (
    <>
      <nav className="  w-[370px] shadow-lg flex flex-col gap-[93px] pt-[50px] rounded-r-[20px] ">
        {/* =========== Logo and Name part starts ============= */}
        <div>
          <motion.img
            className="m-auto"
            src="./img/logo.png"
            alt="logo"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          />
          <div className="relative">
            <motion.h4
              className="satisfy font-normal text-[55px] text-[#d8d8df] pl-[25px] pt-[3px] absolute nam"
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              Rafin Hasan
            </motion.h4>
            <motion.h5
              className="inter text-center font-bold text-[30px] pt-[22px] "
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              Rafin Hasan
            </motion.h5>
          </div>
        </div>
        {/* =========== Logo and Name part ends ============= */}

        {/* =========== Menu part starts ============= */}
        <div>
          <ul className="flex flex-col gap-[20px] inter font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-[#333333] ${
                    isActive
                      ? "hover:text-[#d8d8df] text-[#A5A6FF] font-bold"
                      : "hover:text-[#d8d8df]"
                  } flex justify-center`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-[#333333] ${
                    isActive
                      ? "hover:text-[#d8d8df] text-[#A5A6FF]"
                      : "hover:text-[#d8d8df]  "
                  } flex justify-center`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `text-[#333333] ${
                    isActive
                      ? "hover:text-[#d8d8df] text-[#A5A6FF]"
                      : "hover:text-[#d8d8df]"
                  } flex justify-center`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/works"
                className={({ isActive }) =>
                  `text-[#333333] ${
                    isActive
                      ? "hover:text-[#d8d8df] text-[#A5A6FF]"
                      : "hover:text-[#d8d8df]"
                  } flex justify-center`
                }
              >
                Works
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-[#333333] ${
                    isActive
                      ? "hover:text-[#d8d8df] text-[#A5A6FF]"
                      : "hover:text-[#d8d8df]"
                  } flex justify-center`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        {/* =========== Menu part ends ============= */}

        <div className="pt-[5px]">
          <div className="flex justify-center pb-6">
            {/* ============ Social Media ============== */}
            <Card />
            {/* ============ Social Media ============== */}
          </div>
          <div>
            <p className="inter w-[230px] text-center m-auto leading-6 font-medium text-[16px] mb-[20px]">
              Copyright ©2024 Rafin Hasan. All right reserved.
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavberComponent;
