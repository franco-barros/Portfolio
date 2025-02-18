"use client";

import { useCallback } from "react";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <nav className={styles.navbar}>
      <button onClick={() => scrollToSection("inicio")}></button>
      <ul className={styles.navList}>
        <li>
          <button onClick={() => scrollToSection("about")}>Sobre mí</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("footer")}>Contacto</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
