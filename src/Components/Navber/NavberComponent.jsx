import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./NavberComponent.css";
import { NavLink } from "react-router-dom";
import Card from "./SocialMedia";

const NavberComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true, // Animation happens only once as you scroll down
    });
  }, []);

  return (
    <>
      <nav className=" ">
        <div
          className="flex bg-white bg flex-col gap-[93px] pt-[50px] w-[370px] rounded-[20px] shadow-lg"
          data-aos="fade-up"
        >
          {/* =========== Logo and Name part starts ============= */}
          <div data-aos="flip-left">
            <img
              className="px-[125px]"
              src="./img/logo.png"
              alt="logo"
              data-aos="zoom-in-down"
            />
            <div className="relative">
              <h4
                className="satisfy font-normal text-[60px] text-[#d8d8df] pl-[50px] absolute nam"
                data-aos="fade-left"
              >
                Rafin Hasan
              </h4>
              <h5
                className="inter text-center font-bold text-[30px] pt-[22px] "
                data-aos="fade-right"
              >
                Rafin Hasan
              </h5>
            </div>
          </div>
          {/* =========== Logo and Name part ends ============= */}

          {/* =========== Menu part starts ============= */}
          <div data-aos="fade-up">
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
                  data-aos="fade-right"
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
                  data-aos="fade-left"
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
                  data-aos="flip-up"
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
                  data-aos="flip-down"
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
                  data-aos="zoom-in"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          {/* =========== Menu part ends ============= */}

          <div className="pt-[25px]" data-aos="fade-up">
            <div className="flex justify-center gap-3 pb-6" data-aos="zoom-out">
              {/* ============ Social Media ============== */}
              <Card />
              {/* ============ Social Media ============== */}
            </div>
            <div>
              <p
                className="inter w-[230px] text-center m-auto leading-6 font-medium text-[16px] mb-[20px]"
                data-aos="fade-up"
              >
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
