import React, { useState } from "react";
import FilterTabs from "./FilterTabs";
import ExtensionCards from "./ExtensionCards";
import extensionsData from "../data.json";

const ExtensionsList = () => {
  const [extensions, setExtensions] = useState(extensionsData);
  const [activeTab, setActiveTab] = useState("all");

  // Filter extensions based on active tab
  const filteredExtensions = extensions.filter((extension) => {
    if (activeTab === "active") return extension.isActive;
    if (activeTab === "inactive") return !extension.isActive;
    return true;
  });

  // Remove extension from list
  const removeExtension = (index) => {
    setExtensions((prevExtensions) =>
      prevExtensions.filter((_, i) => i !== index),
    );
  };

  // Toggle active state
  const toggleActive = (index) => {
    setExtensions((prevExtensions) =>
      prevExtensions.map((extension, i) =>
        i === index
          ? { ...extension, isActive: !extension.isActive }
          : extension,
      ),
    );
  };

  return (
    <div className="container mx-auto p-4">
      {/* Filter Tabs */}
      <FilterTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Extension Cards */}
      <ul className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center mt-6">
        <ExtensionCards
          extensions={filteredExtensions}
          removeExtension={removeExtension}
          toggleActive={toggleActive}
        />
      </ul>
    </div>
  );
};

export default ExtensionsList;
