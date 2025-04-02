import React from "react";
import { useEffect, useState } from "react";
const FilterTabs = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="container mx-auto mt-6 flex flex-col space-y-2 justify-center items-center md:flex-row md:justify-between ">
      <div>
        <h1 className="text-900 dark:text-white text-3xl font-bold">
          Extensions List
        </h1>
      </div>
      <div className="flex mt-4 flex-row space-x-2  justify-end w-full md:w-auto md:mt-0">
        <button
          className={`${
            isActive
              ? "px-4 py-2 rounded-full font-medium text-lg bg-redCustom-700 text-white dark:bg-700 cursor-pointer flex-1 max-w-sm md:flex- hover:bg-redCustom-500 dark:hover:text-900 hover:opacity-70 dark:hover:opacity-100 transition-all duration-200 ease-in-out border-600 border-1 hover:outline-none dark:hover:border-redCustom-400 "
              : "hidden"
          }`}
          onClick={() => setIsActive(!isActive)}
        >
          All
        </button>
        <button className="px-4 py-2 rounded-full font-medium text-lg bg-redCustom-700 text-white dark:bg-700 cursor-pointer flex-1 max-w-sm md:flex- hover:bg-redCustom-500 dark:hover:text-900 hover:opacity-70 dark:hover:opacity-100 transition-all duration-200 ease-in-out border-600 border-1 hover:outline-none dark:hover:border-redCustom-400 ">
          Active
        </button>
        <button className="px-4 py-2 rounded-full font-medium text-lg bg-redCustom-700 text-white dark:bg-700 cursor-pointer flex-1 max-w-sm md:flex- hover:bg-redCustom-500 dark:hover:text-900 hover:opacity-70 dark:hover:opacity-100 transition-all duration-200 ease-in-out border-600 border-1 hover:outline-none dark:hover:border-redCustom-400 ">
          Inactive
        </button>
      </div>
    </div>
  );
};

export default FilterTabs;
