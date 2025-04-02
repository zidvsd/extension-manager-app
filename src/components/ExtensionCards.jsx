import React from "react";
import ExtensionsList from "./ExtensionsList";
import extensions from "../../public/data.json";
import Button from "./Button";
const ExtensionCards = () => {
  return (
    <>
      {extensions.map((extension, index) => (
        <div
          key={index}
          className="dark:text-white text-900 border p-4 rounded-xl border-600 flex h-50 flex-col bg-white dark:bg-800"
        >
          <div className="flex-row flex justify-start items-start gap-x-4">
            <img src={extension.logo} alt="" />
            <div className="flex flex-col justify-start items-start gap-y-2">
              <h1 className="font-bold text-xl"> {extension.name}</h1>
              <p className="text-600 dark:text-300">{extension.description}</p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center mt-auto">
            <button className="border-600 px-4 py-2 rounded-full border-1 cursor-pointer hover:border-redCustom-700 hover:bg-redCustom-700 hover:text-white transition-all duration-200 ease-in-out">
              Remove
            </button>
            <Button />
          </div>
        </div>
      ))}
    </>
  );
};

export default ExtensionCards;
