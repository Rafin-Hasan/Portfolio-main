import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { BsFillMenuButtonWideFill } from "react-icons/bs"; // Menu icon
import Card from "./SocialMedia";
import "./NavberComponent.css";

const NavberComponent = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to toggle the navbar visibility on mobile
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width

  // Update windowWidth state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Toggle the navbar visibility
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Framer Motion variants for the sliding animation on mobile
  const sidebarVariants = {
    open: { x: 0, transition: { duration: 0.5 } },
    closed: { x: "-100%", transition: { duration: 0.5 } },
  };

  return (
    <>
      {/* Show the menu button only on screens smaller than 896px */}
      {windowWidth <= 896 && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            left: "20px",
            zIndex: 1000, // Ensure it's on top of everything
          }}
        >
          <BsFillMenuButtonWideFill
            size={30}
            onClick={toggleNav}
            style={{ cursor: "pointer", color: "#130F49" }}
          />
        </div>
      )}

      {/* Navbar: Always visible on larger screens, toggle on mobile */}
      <motion.nav
        className="w-[370px] shadow-lg flex flex-col gap-[93px] pt-[50px] rounded-r-[20px]"
        initial={false}
        animate={isNavOpen || windowWidth > 896 ? "open" : "closed"}
        variants={sidebarVariants}
        style={{
          position: windowWidth <= 896 ? "fixed" : "relative", // Fixed for mobile, relative for larger screens
          top: 0,
          left: 0,
          // height: "100vh",
          backgroundColor: windowWidth <= 896 ? "#fff" : "transparent",
          zIndex: 999, // Ensure the navbar stays below the menu button
          display: windowWidth > 896 || isNavOpen ? "flex" : "none", // Show navbar only when needed
          flexDirection: "column",
          padding: "50px 0",
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
        }}
      >
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
              className="satisfy font-normal text-[45px] text-[#d8d8df] pt-[9px] absolute nam"
              style={{
                fontSize: windowWidth <= 896 ? "53px" : "45px",
                paddingLeft: windowWidth <= 896 ? "58px" : "25px",
                paddingTop: windowWidth <= 896 ? "5px" : "9px",
              }}
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              Rafin Hasan
            </motion.h4>
            <motion.h5
              className="inter text-center font-bold text-[30px] pt-[22px]"
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

        {/* =========== Social Media Card part starts ============= */}
        <div className="pt-[5px]">
          <div className="flex justify-center pb-6">
            <Card />
          </div>
          <div>
            <p className="inter w-[230px] text-center m-auto leading-6 font-medium text-[16px] mb-[20px]">
              Copyright ©2024 Rafin Hasan. All rights reserved.
            </p>
          </div>
        </div>
        {/* =========== Social Media Card part ends ============= */}
      </motion.nav>
    </>
  );
};

export default NavberComponent;
