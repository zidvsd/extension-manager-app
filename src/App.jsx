import React from "react";
import Header from "./components/Header";
import ThemeProvider from "./context/ThemeContext";
import ExtensionCards from "./components/ExtensionCards";
const App = () => {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <ThemeProvider>
        <Header />
        <ExtensionCards />
      </ThemeProvider>
    </div>
  );
};

export default App;
