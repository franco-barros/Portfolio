"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import styles from "../../../styles/page/BackButton.module.css";

const BackButton: React.FC = () => {
  const router = useRouter();

  return (
    <button className={styles.backButton} onClick={() => router.back()}>
      <FaArrowLeft className={styles.icon} />
      Back to home
    </button>
  );
};

export default BackButton;
