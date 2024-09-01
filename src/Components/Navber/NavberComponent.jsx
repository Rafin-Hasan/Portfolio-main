import React from "react";
import "./NavberComponent.css";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";

const NavberComponent = () => {
  return (
    <>
      <nav className="container ">
        <div className="flex flex-col gap-[93px] pt-[100px] w-[370px]">
          {/* =========== Logo and Name part starts ============= */}
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

          <div className="pt-[92px]">
            <div>
              <div>
                <FaGithub />
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavberComponent;
