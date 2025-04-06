"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Importamos el hook
import AnimatedMenuOverlay from "../animations/animatedmenuoverlay";
import ThemeToggle from "../utils/themetoggle/ThemeToggle";
import styles from "../../styles/Navbar.module.css";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // Obtenemos la ruta actual

  // Detectamos si estamos en una página de proyecto
  const isProjectPage = pathname.startsWith("/projects/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menuOpen");
    } else {
      document.body.classList.remove("menuOpen");
    }
  }, [menuOpen]);

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
        {/* Logo */}
        <div className={styles.logo}>Franco Barros</div>

        <div className={styles.menuWrapper}>
          <ThemeToggle />
          {/* Solo mostrar el menú si NO estamos en una página de proyecto */}
          {!isProjectPage && (
            <>
              <button
                className={styles.desktopMenuButton}
                onClick={toggleMenu}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                Menu
              </button>
              <button
                className={styles.mobileMenuButton}
                onClick={toggleMenu}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                ☰
              </button>
            </>
          )}
        </div>
      </div>

      {/* Menú desplegable solo se muestra en la página principal */}
      {menuOpen && !isProjectPage && (
        <AnimatedMenuOverlay
          onClose={() => setMenuOpen(false)}
          scrollToSection={scrollToSection}
        />
      )}
    </motion.nav>
  );
};

export default Navbar;
