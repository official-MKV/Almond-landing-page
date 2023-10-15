import React from "react";
import Logo from "../assets/logo-adjusted.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import link from "../assets/up-right-arrow.png";
import CloseIcon from "@mui/icons-material/Close";
const Nav = ({ handleWhy }) => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="flex pt-[20px] overflow-x-hidden  bg-[#F2EFFE] ">
      <div
        className={`transition transform duration-1000 ease-in-out flex absolute w-screen   text-center justify-center h-[100%] bg-[#ECE7FE] z-50 ${
          menu ? "scale-x-100" : "scale-x-0"
        }`}
      >
        <CloseIcon
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            cursor: "pointer",
          }}
          onClick={() => {
            setMenu(false);
          }}
        />
        <span className="text-[#676767]  text-center items-center mt-[50px] text-[20px] flex flex-col gap-[80px]  ">
          <a className=" flex  gap-[10px] transition  duration-1000 ease-in-out   hover:text-[#7D5DF6] cursor-pointer hover:text-[300] hover:scale-[120%]">
            Home
          </a>
          <a
            className="transition duration-1000 ease-in-out hover:text-[#7D5DF6] cursor-pointer hover:text-[300] hover:scale-[120%] "
            onClick={handleWhy}
          >
            Why Almond ?
          </a>
          <a className="transition duration-1000 ease-in-out hover:text-[#7D5DF6] cursor-pointer hover:text-[300] hover:scale-[120%] ">
            Get Started
          </a>
          <a className="transition duration-1000 ease-in-out hover:text-[#7D5DF6] cursor-pointer hover:text-[300] hover:scale-[120%]">
            FAQ
          </a>
        </span>
      </div>
      <img
        className="absolute w-[100px] md:w-[150px] md:top-[-20px] top-[10px] md:left-[120px] left-[10px]"
        src={Logo}
      />
      <span className="text-[#676767] md:ml-auto md:flex justify-center  items-center hidden md:gap-[40px] gap-[20px] md:text-[15px] text-[8px] font-[600]">
        <a className="transition duration-1000 ease-in-out hover:text-[#7D5DF6] cursor-pointer hover:text-[300] hover:underline">
          Home
        </a>
        <a
          className="transition duration-1000 ease-in-out hover:text-[#7D5DF6] cursor-pointer hover:text-[300] hover:underline"
          onClick={() => {
            handleWhy;
            setMenu(false);
          }}
        >
          Why Almond ?
        </a>
        <a className="transition duration-1000 ease-in-out hover:text-[#7D5DF6] cursor-pointer hover:text-[300] hover:underline">
          Get Started
        </a>
        <a className="transition duration-1000 ease-in-out hover:text-[#7D5DF6] cursor-pointer hover:text-[300] hover:underline">
          FAQ
        </a>
      </span>

      <span className="relative  ml-auto mr-[50px] mt-[20px] cursor-pointer">
        <MenuIcon
          className="block md:hidden"
          style={{}}
          onClick={() => {
            setMenu(true);
          }}
        />
      </span>
    </div>
  );
};

export default Nav;
