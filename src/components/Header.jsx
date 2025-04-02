import React from "react";
import logo from "../assets/images/logo.svg";
import DarkModeToggle from "./DarkModeToggle";
const Header = () => {
  return (
    <div className="mx-auto max-w-[1024px] container  rounded-2xl bg-white items-center flex justify-between flex-row p-2 dark:bg-800 ">
      <img src={logo} className="" alt="" />
      <DarkModeToggle />
    </div>
  );
};

export default Header;
