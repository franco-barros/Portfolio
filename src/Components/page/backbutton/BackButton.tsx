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
      <FaArrowLeft className={styles.icon} />
      <span className={styles.buttonText}>Back to Projects</span>
    </button>
  );
};

export default BackButton;
