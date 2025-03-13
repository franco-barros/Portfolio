"use client";
import React, { useState } from "react";
import Chatbot from "./ChatBot";
import styles from "../../styles/ChatBotModal.module.css";
import { BsRobot } from "react-icons/bs";
import { motion } from "framer-motion";

const ChatbotModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {isOpen && (
        <div className={styles.chatbotContainer}>
          <button className={styles.closeButton} onClick={handleToggle}>
            &times;
          </button>
          <Chatbot />
        </div>
      )}
      <button className={styles.floatingButton} onClick={handleToggle}>
        <BsRobot size={24} color="#fff" />
      </button>
    </motion.div>
  );
};

export default ChatbotModal;
