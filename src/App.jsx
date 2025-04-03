import React from "react";
import Header from "./components/Header";
import ThemeProvider from "./context/ThemeContext";
import ExtensionCards from "./components/ExtensionCards";
import ExtensionsList from "./components/ExtensionsList";
import FilterTabs from "./components/FilterTabs";
const App = () => {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <ThemeProvider>
        <Header />
        <ExtensionsList />
      </ThemeProvider>
    </div>
  );
};

export default App;
