import React from "react";
import { useState } from "react";
const Button = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`w-12 h-7 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${
        isOn ? "bg-redCustom-700" : "bg-600"
      }`}
      onClick={() => setIsOn(!isOn)}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-all duration-300 ${
          isOn ? "translate-x-5" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
};

export default Button;
