import React from "react";
import Button from "./Button";

const ExtensionCards = ({ extensions, removeExtension, toggleActive }) => {
  return (
    <>
      {extensions.map((extension, index) => (
        <div
          key={index}
          className="dark:text-white text-900 border border-neutralCustom-300 shadow-xl p-4 rounded-xl bg-white dark:bg-800 h-52 flex flex-col dark:border-neutral-700 dark:shadow-none"
        >
          {/* Content */}
          <div className="flex-grow">
            <div className="flex flex-row items-start gap-x-4">
              <img src={extension.logo} alt="" className="w-10 h-10" />
              <div className="flex flex-col">
                <h1 className="font-bold text-xl">{extension.name}</h1>
                <p className="text-600 dark:text-300">
                  {extension.description}
                </p>
              </div>
            </div>
          </div>

          {/* Buttons pushed to the bottom */}
          <div className="flex flex-row justify-between items-center mt-auto">
            <button
              className="border-600 px-4 py-2 rounded-full border cursor-pointer hover:border-redCustom-700 hover:bg-redCustom-700 hover:text-white transition-all"
              onClick={() => removeExtension(index)}
            >
              Remove
            </button>
            <Button
              isActive={extension.isActive}
              toggle={() => toggleActive(index)}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default ExtensionCards;
