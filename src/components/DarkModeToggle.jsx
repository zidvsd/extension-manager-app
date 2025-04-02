import React, { useState, useEffect } from "react";
import { iconMoon } from "../assets/images";
import { iconSun } from "../assets/images";
import { useDarkMode } from "../context/ThemeContext";
const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <button
      className="object-contain p-3 hover:opacity-50 transition duration-200 ease-in-out cursor-pointer rounded-xl bg-neutralCustom-100 dark:bg-700"
      onClick={() => setDarkMode(!darkMode)}
    >
      <img src={darkMode ? iconSun : iconMoon} alt="" />
    </button>
  );
};

export default DarkModeToggle;
