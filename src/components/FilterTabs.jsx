import React from "react";

const FilterTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="container mx-auto mt-6 flex flex-col space-y-2 justify-center items-center md:flex-row md:justify-between">
      <h1 className="text-900 dark:text-white text-3xl font-bold">
        Extensions List
      </h1>

      <div className="flex space-x-2">
        {["all", "active", "inactive"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full font-medium text-lg cursor-pointer transition-all border dark:text-white ${
              activeTab === tab
                ? "bg-redCustom-700 text-white"
                : "bg-white dark:bg-700 border-neutralCustom-300 dark:border-600 hover:bg-redCustom-700 hover:text-white"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterTabs;
