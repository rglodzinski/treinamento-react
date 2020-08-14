import React from "react";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
    fontSize: "15px"
  },
  dark: {
    foreground: "#ffffff",
    background: "#f1f1f1",
    fontSize: "30px"
  }
};

export const ThemeContext = React.createContext(themes.dark);
