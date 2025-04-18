import React, { createContext, useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import ChildC from "./ChildC";
import "./styles.css";

export const DataContext = createContext();
export const ThemeContext = createContext();

export default function App() {
  const name = "hook";
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const themeStyles = {
    backgroundColor: theme === "light" ? "#ffffff" : "#121212",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    padding: "2rem",
    transition: "all 0.3s ease",
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <DataContext.Provider value={name}>
        <div className="App" style={themeStyles}>
          <ChildA />
          <ChildB />
          <ChildC />
        </div>
      </DataContext.Provider>
    </ThemeContext.Provider>
  );
}
