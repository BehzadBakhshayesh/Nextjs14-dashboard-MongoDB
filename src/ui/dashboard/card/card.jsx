import React from "react";
import styles from "./card.module.css";
import { MdDashboard, Md10Mp, MdAddLocation, MdLogout } from "react-icons/md";

const Card = () => {
  return (
    <div className={styles.container}>
      <MdAddLocation size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>10.358</span>
        <span className={styles.detail}>
          <span className={styles.positive}>12%</span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
