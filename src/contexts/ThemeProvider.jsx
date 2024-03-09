import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      style={
        theme === "light"
          ? {
              background: "white",
              color: "black",
            }
          : {
              color: "white",
              background: "black",
            }
      }
    >
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        Theme is {theme}
        <div>{children}</div>
      </ThemeContext.Provider>
    </div>
  );
};
