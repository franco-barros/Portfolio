"use client";
import { useContext } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/ThemeContext";
import styles from "../../styles/utils/ThemeToggle.module.css";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { darkMode, toggleTheme } = themeContext;

  return (
    <motion.button
      className={styles.themeToggle}
      onClick={toggleTheme}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          toggleTheme();
        }
      }}
      aria-label="Toggle theme"
      aria-pressed={darkMode}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <div className={darkMode ? styles.activeDark : styles.inactiveIcon}>
        <BsFillMoonStarsFill className={styles.themeIcon} />
      </div>
      <div className={darkMode ? styles.inactiveIcon : styles.activeLight}>
        <BsFillSunFill className={styles.themeIcon} />
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
