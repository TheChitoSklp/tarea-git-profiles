import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import "./Header.css";
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeProvider";
export const Header = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <div className="header-container">
      <span className={`title ${theme}`}>devfinder</span>
      <button type="button" onClick={handleTheme}>
        <span>{theme === "light" ? "LIGHT" : "DARK"}</span>
        <img src={theme === "light" ? sun : moon} />
      </button>
    </div>
  );
};
