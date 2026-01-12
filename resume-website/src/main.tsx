import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { AccentThemeProvider } from "./context/AccentThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AccentThemeProvider>
        <App />
      </AccentThemeProvider>
    </ThemeProvider>
  </React.StrictMode>
);
