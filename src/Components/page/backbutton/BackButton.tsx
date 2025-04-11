"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import styles from "../../../styles/page/BackButton.module.css";

const BackButton: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    sessionStorage.setItem("scrollToProjects", "true");
    router.push("/");
  };

  return (
    <button
      className={styles.backButton}
      onClick={handleBack}
      aria-label="Back to Projects section"
    >
      <svg
        className={styles.borderSvg}
        viewBox="0 0 300 80"
        preserveAspectRatio="none"
      >
        {[0, 0.2, 0.4, 0.6].map((delay, i) => (
          <rect
            key={i}
            x="1"
            y="1"
            width="298"
            height="78"
            rx="50"
            ry="50"
            className={styles.neonStroke}
            style={{ animationDelay: `${delay}s` }}
          />
        ))}
      </svg>
      <FaArrowLeft className={styles.icon} />
      <span className={styles.buttonText}>Back to Projects</span>
    </button>
  );
};

export default BackButton;
