"use client";
import React from "react";
import styles from "../../../styles/utils/WhatsAppButton.module.css";
import { FaWhatsapp } from "react-icons/fa"; // Usaremos react-icons para el ícono

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/1234567890", // Reemplaza con tu número de WhatsApp (código internacional incluido)
      "_blank"
    );
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
