"use client";
import React from "react";
import styles from "../../../styles/utils/WhatsAppButton.module.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5492645878987", "_blank");
  };

  return (
    <div
      className={styles.whatsappButton}
      onClick={handleWhatsAppClick}
      title="Contáctanos por WhatsApp"
    >
      <FaWhatsapp className={styles.whatsappIcon} />
    </div>
  );
};

export default WhatsAppButton;
