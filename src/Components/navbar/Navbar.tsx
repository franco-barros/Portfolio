"use client";
import { useState, useEffect } from "react";
import AnimatedMenuOverlay from "../animatedmenuoverlay";
import ThemeToggle from "../themetoggle/ThemeToggle";
import styles from "../../styles/Navbar.module.css";
import { motion } from "framer-motion";

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

  // Agregar clase al body cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menuOpen");
    } else {
      document.body.classList.remove("menuOpen");
    }
  }, [menuOpen]);

  // Función para hacer scroll suave a las secciones
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
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
    </motion.nav>
  );
};

export default Navbar;
