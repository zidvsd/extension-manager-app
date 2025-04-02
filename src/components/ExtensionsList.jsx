import React from "react";
import ExtensionCards from "./ExtensionCards";
import extensions from "../data.json";
const ExtensionsList = () => {
  return (
    <div className="container mx-auto w-full ">
      <ul className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center mt-6">
        <ExtensionCards />
      </ul>
    </div>
  );
};

export default ExtensionsList;
