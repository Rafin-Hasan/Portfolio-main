import React from "react";
import "./NavberComponent.css";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import styled from "styled-components";
import Card from "./SocialMedia";

const NavberComponent = () => {
  return (
    <>
      <nav className="bg-white">
        <div className="flex flex-col gap-[93px] pt-[50px] w-[370px]">
          {/* =========== Logo and Name part starts ============= */}
          <div>
            <img className="px-[125px]" src="./img/logo.png" alt="logo" />
            <div className="relative">
              <h4 className="satisfy font-normal text-[60px] text-[#d8d8df] pl-[50px] absolute nam">
                Rafin Hasan
              </h4>
              <h5 className="inter text-center font-bold text-[30px] pt-[22px] nam2">
                Rafin Hasan
              </h5>
            </div>
          </div>
          {/* =========== Logo and Name part ends ============= */}

          {/* =========== menu part starts ============= */}
          <div>
            <ul className="flex flex-col gap-[20px] inter font-semibold">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-[#333333] ${
                      isActive
                        ? "hover:text-[#d8d8df] text-[#A5A6FF] font-bold"
                        : "hover:underline-offset-1"
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
                        : "hover:underline-offset-auto  "
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
                        : "hover:underline-offset-1"
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
                        : "hover:underline-offset-1 "
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
                        : "hover:underline-offset-1"
                    } flex justify-center`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          {/* =========== Logo and Name part ends ============= */}

          <div className="pt-[25px]">
            <div className="flex justify-center gap-3 pb-6">
              {/* ============ social media ============== */}
              <Card />
              {/* ============ social media ============== */}
            </div>
            <div>
              <p className="inter w-[230px] text-center m-auto leading-6 font-medium text-[16px] mb-[20px]">
                Copyright ©2024 Rafin Hasan. All right reserved.
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavberComponent;
