"use client";

import { useState, useEffect } from "react";
import AnimatedMenuOverlay from "../animatedmenuoverlay";
import ThemeToggle from "../themetoggle/ThemeToggle"; // Agregado para el botón de tema
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detecta el scroll para cambiar el fondo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para hacer scroll suave a las secciones
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        {/* Logo del navbar */}
        <div className={styles.logo}>Fb</div>

        {/* Botón de menú y toggle de tema */}
        <div className={styles.menuWrapper}>
          <ThemeToggle /> {/* Agregando el botón de cambio de tema */}
          {/* Botón de menú en escritorio */}
          <button
            className={styles.desktopMenuButton}
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            Menu
          </button>
          {/* Botón de menú en móvil */}
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

      {/* Menú desplegable en mobile */}
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
