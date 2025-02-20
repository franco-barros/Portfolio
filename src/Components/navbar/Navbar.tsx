"use client";

import { useState } from "react";
import ThemeToggle from "../themetoggle"; // Ajusta la ruta según tu estructura
import AnimatedMenuOverlay from "../animatedmenuoverlay"; // Ajusta la ruta según tu estructura
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo a la izquierda */}
        <div className={styles.logo}>Fb</div>

        {/* ThemeToggle en el centro */}
        <div className={styles.themeToggleWrapper}>
          <ThemeToggle />
        </div>

        {/* Menú a la derecha */}
        <div className={styles.menuWrapper}>
          {/* Desktop: muestra la palabra "Menu" */}
          <button
            className={styles.desktopMenuButton}
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            Menu
          </button>

          {/* Mobile: muestra el icono hamburguesa */}
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Overlay animado del menú */}
      {menuOpen && (
        <AnimatedMenuOverlay
          onClose={() => setMenuOpen(false)}
          scrollToSection={scrollToSection}
        />
      )}
    </nav>
  );
};

export default Navbar;
