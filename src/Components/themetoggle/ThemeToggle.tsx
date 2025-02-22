"use client";
import { useContext } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/ThemeContext";
import styles from "../../styles/ThemeToggle.module.css";

const ThemeToggle = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { darkMode, toggleTheme } = themeContext;

  return (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          toggleTheme();
        }
      }}
      aria-label="Toggle theme"
      aria-pressed={darkMode}
    >
      <div className={darkMode ? styles.activeDark : styles.inactiveIcon}>
        <BsFillMoonStarsFill className={styles.themeIcon} />
      </div>
      <div className={darkMode ? styles.inactiveIcon : styles.activeLight}>
        <BsFillSunFill className={styles.themeIcon} />
      </div>
    </button>
  );
};

export default ThemeToggle;
