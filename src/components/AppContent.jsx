import React from "react";
import { Header } from "./Header";
import { Search } from "./Search";
import { useContext } from "react";
import ThemeContext from "../context/ThemeProvider";
import "./AppContent.css";
export const AppContent = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`bodyFake ${theme}`}>
      <Header />
      <Search />
    </div>
  );
};
