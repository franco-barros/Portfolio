"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import LinkedInIcon from "../../../public/assets/icons/LinkedIn_icon.svg.png";
import GmailIcon from "../../../public/assets/icons/Gmail_icon_(2020).svg.webp";
import GitHubIcon from "../../../public/assets/icons/github.png";
import styles from "../../styles/Footer.module.css";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <motion.footer
      id="footer"
      className={`${styles.footer} ${className || ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <p>
        &copy; {new Date().getFullYear()} Franco Barros. Todos los derechos
        reservados.
      </p>
      <div className={styles.iconContainer}>
        <a
          href="https://www.linkedin.com/in/francobarros08/"
          target="_blank"
          aria-label="linkedin"
          className={styles.iconLink}
        >
          <Image
            src={LinkedInIcon}
            alt="LinkedIn logo"
            width={24}
            height={24}
          />
        </a>
        <a
          href="mailto:francobarrosdaniel@gmail.com"
          target="_blank"
          aria-label="gmail"
          className={styles.iconLink}
        >
          <Image src={GmailIcon} alt="Gmail logo" width={24} height={24} />
        </a>
        <a
          href="https://github.com/franco-barros"
          target="_blank"
          aria-label="github"
          className={styles.iconLink}
        >
          <Image src={GitHubIcon} alt="GitHub logo" width={24} height={24} />
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
