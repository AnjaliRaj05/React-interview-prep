import React, { useContext } from "react";
import { DataContext, ThemeContext } from "./App";

const ChildA = () => {
  const data = useContext(DataContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Example of useContext — Hello {data}!</h2>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default ChildA;
