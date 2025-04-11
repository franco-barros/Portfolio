"use client";
import React from "react";
import styles from "../../../styles/utils/WhatsAppButton.module.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5492645878987"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      title="Contact me by whatsapp"
    >
      <FaWhatsapp className={styles.whatsappIcon} />
    </a>
  );
};

export default WhatsAppButton;
