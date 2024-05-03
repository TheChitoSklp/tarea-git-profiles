import React, { createContext, useState } from "react";

const ThemeContext = createContext();
const initialTheme = "light";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const data = { theme, handleTheme };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
export { ThemeProvider };
export default ThemeContext;
