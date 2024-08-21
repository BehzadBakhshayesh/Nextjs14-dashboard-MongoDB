import React from "react";
import styles from "@/ui/login/login.module.css";
import { authenticate } from "@/lib/actions";

const page = () => {
  return (
    <div className={styles.container}>
      <form action={authenticate} className={styles.form}>
        <h1>Login</h1>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default page;
