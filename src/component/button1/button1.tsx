import React from "react";
import styles from "./button1.module.scss";

export default function Button1() {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button}>
        <span className={styles.label}>Continue</span>
        <span className={styles.arrow}></span>
      </button>
    </div>
  );
}

