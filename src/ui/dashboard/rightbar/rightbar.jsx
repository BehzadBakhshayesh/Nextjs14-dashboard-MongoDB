import React from "react";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { MdDashboard } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.jpg" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Available Now</span>
          <h3 className={styles.title}>
            GitHub is a developer platform that allows developers to create
          </h3>
          <span className={styles.subtitle}>
            GitHub is a developer platform that
          </span>
          <p className={styles.descriptiom}>
            GitHub is a developer platform that allows developers to create
            GitHub is a developer platform that allows developers to create
            GitHub is a developer platform that allows developers to
            createGitHub is a developer platform that allows developers to
            create
          </p>
          <button className={styles.button}>
            <MdDashboard />
            watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.jpg" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Available Now</span>
          <h3 className={styles.title}>
            GitHub is a developer platform that allows developers to create
          </h3>
          <span className={styles.subtitle}>
            GitHub is a developer platform that
          </span>
          <p className={styles.descriptiom}>
            GitHub is a developer platform that allows developers to create
            GitHub is a developer platform that allows developers to create
            GitHub is a developer platform that allows developers to
            createGitHub is a developer platform that allows developers to
            create
          </p>
          <button className={styles.button}>
            <MdDashboard />
            watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
