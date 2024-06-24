"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { MdDashboard, Md10Mp, MdAddLocation, MdSearch } from "react-icons/md";
import styles from "./navbar.module.css";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdDashboard size={20} />
          <Md10Mp size={20} />
          <MdAddLocation size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
