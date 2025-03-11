// src/Components/chatbot/ChatbotModal.tsx
import React, { useState } from "react";
import Chatbot from "./ChatBot";
import styles from "./ChatbotModal.module.css";
import { BsRobot } from "react-icons/bs";

const ChatbotModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {isOpen && (
        <div className={styles.modalOverlay} onClick={handleToggle}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={handleToggle}>
              &times;
            </button>
            <Chatbot />
          </div>
        </div>
      )}
      <button className={styles.floatingButton} onClick={handleToggle}>
        <BsRobot size={24} color="#fff" />
      </button>
    </>
  );
};

export default ChatbotModal;
