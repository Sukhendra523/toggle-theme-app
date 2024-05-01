import React from "react";
import { useTheme } from "../context/ThemeContext";

const SwitchToggle = () => {
  const {theme,toggleTheme } = useTheme();
  return (
    <div className="mode-switch">
      <label>
        <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"}/>
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default SwitchToggle;
