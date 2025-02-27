/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function ThemeToggle({ isDarkMode, toggleTheme }) {
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle dark theme"
    >
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;
