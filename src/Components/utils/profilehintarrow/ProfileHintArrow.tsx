import React from "react";
import { TbArrowDownRight } from "react-icons/tb";
import styles from "../../../styles/utils/ProfileHintArrow.module.css";

const ProfileHintArrow: React.FC = () => (
  <div className={styles.arrowContainer}>
    <span className={styles.arrowText}>
      Tap here for my profile
      <TbArrowDownRight className={styles.iconArrow} />
    </span>
  </div>
);

export default ProfileHintArrow;
