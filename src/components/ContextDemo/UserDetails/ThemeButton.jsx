import { useContext } from "react";

import { ThemeContext } from "../../../contexts/ThemeProvider";

const ThemeButton = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={() => {
        toggleTheme();
      }}
    >
      Toggle theme
    </button>
  );
};
export default ThemeButton;
