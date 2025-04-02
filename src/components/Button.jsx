import React, { useState } from "react";
import Button from "./Button";
import extensionsData from "../data.json";

const ExtensionCards = () => {
  const [extensions, setExtensions] = useState(extensionsData);

  const removeExtension = (index) => {
    const updatedExtensions = extensions.filter((_, i) => i !== index);
    setExtensions(updatedExtensions);
  };

  const handleToggle = (index) => {
    const updatedExtensions = [...extensions];
    updatedExtensions[index].isActive = !updatedExtensions[index].isActive;
    setExtensions(updatedExtensions);
  };

  return (
    <>
      {extensions.map((extension, index) => (
        <div
          key={index}
          className="dark:text-white text-900 border shadow-md p-4 rounded-xl border-700 dark:shadow-none dark:border-neut flex h-50 flex-col bg-white dark:bg-800"
        >
          <div className="flex-row flex justify-start items-start gap-x-4">
            <img src={extension.logo} alt="" />
            <div className="flex flex-col justify-start items-start gap-y-2">
              <h1 className="font-bold text-xl"> {extension.name}</h1>
              <p className="text-600 dark:text-300">{extension.description}</p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center mt-auto">
            <button
              className="border-600 px-4 py-2 rounded-full border-1 cursor-pointer hover:border-redCustom-700 hover:bg-redCustom-700 hover:text-white transition-all duration-200 ease-in-out"
              onClick={() => removeExtension(index)} // Remove extension on click
            >
              Remove
            </button>
            <Button
              isActive={extension.isActive}
              onToggle={() => handleToggle(index)} // Handle toggle click
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default ExtensionCards;
