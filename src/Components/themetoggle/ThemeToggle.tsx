"use client";

import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import styles from "../../styles/ThemeToggle.module.css";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", darkMode);
      localStorage.setItem("darkMode", String(darkMode));
    }
  }, [darkMode]);

  return (
    <div className={`${styles.themeToggle} ${darkMode ? styles.dark : ""}`}>
      <button
        type="button"
        className={`${styles.iconWrapper} ${
          !darkMode ? styles.activeLight : ""
        }`}
        onClick={() => setDarkMode(false)}
        aria-label="Activar modo claro"
      >
        <FiSun
          className={`${styles.themeIcon} ${
            darkMode ? styles.inactiveIcon : styles.lightIcon
          }`}
        />
      </button>
      <button
        type="button"
        className={`${styles.iconWrapper} ${darkMode ? styles.activeDark : ""}`}
        onClick={() => setDarkMode(true)}
        aria-label="Activar modo oscuro"
      >
        <FiMoon
          className={`${styles.themeIcon} ${
            darkMode ? styles.darkIcon : styles.inactiveIcon
          }`}
        />
      </button>
    </div>
  );
};

export default ThemeToggle;
