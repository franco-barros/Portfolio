"use client";
import {
  createContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
  ReactNode,
} from "react";

interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const isDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // Memoriza la función para que no cambie en cada render
  const toggleTheme = useCallback(() => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.documentElement.classList.toggle("dark", newMode);
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  }, []);

  // Memoriza el objeto para evitar renders innecesarios
  const contextValue = useMemo(
    () => ({ darkMode, toggleTheme }),
    [darkMode, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
