import React from "react";
import { useEffect, useState } from "react";
import Button from "./Button";
const FilterTabs = () => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <div className="container mx-auto mt-6 flex flex-col space-y-2 justify-center items-center md:flex-row md:justify-between ">
      <div>
        <h1 className="text-900 dark:text-white text-3xl font-bold">
          Extensions List
        </h1>
      </div>
      <div className="flex mt-4 flex-row space-x-2  justify-end w-full md:w-auto md:mt-0">
        <button
          className={`px-4 py-2  bg text-900 rounded-full font-medium text-lg transition-all duration-200 ease-in-out border border-neutralCustom-300 shadow-lg cursor-pointer dark:text-white dark:border-600 ${
            activeTab === "all"
              ? " bg-redCustom-700 hover:opacity-50 text-white "
              : " bg-white dark:bg-700  flex-1 max-w-sm md:flex- hover:bg-redCustom-700 dark:hover:text-900 dark:hover:opacity-100   dark:hover:border-redCustom-700 "
          } `}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2  bg text-900 rounded-full font-medium text-lg transition-all duration-200 ease-in-out border border-neutralCustom-300 shadow-lg cursor-pointer dark:text-white dark:border-600 ${
            activeTab === "active"
              ? " bg-redCustom-700 hover:opacity-50 text-white "
              : " bg-white dark:bg-700  flex-1 max-w-sm md:flex- hover:bg-redCustom-700 dark:hover:text-900 dark:hover:opacity-100   dark:hover:border-redCustom-700 "
          } `}
          onClick={() => setActiveTab("active")}
        >
          Active
        </button>
        <button
          className={`px-4 py-2  bg text-900 rounded-full font-medium text-lg transition-all duration-200 ease-in-out border border-neutralCustom-300 shadow-lg cursor-pointer dark:text-white dark:border-600 ${
            activeTab === "inactive"
              ? " bg-redCustom-700 hover:opacity-50 text-white "
              : "   bg-white dark:bg-700  flex-1 max-w-sm md:flex- hover:bg-redCustom-700 dark:hover:text-900 dark:hover:opacity-100   dark:hover:border-redCustom-700"
          } `}
          onClick={() => setActiveTab("inactive")}
        >
          Inactive
        </button>
      </div>
    </div>
  );
};

export default FilterTabs;
