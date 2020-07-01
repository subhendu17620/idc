import React from "react";

import styles from "./footer.module.css";
export default function Footer() {
  return (
    <div className={styles.footer + " " + styles.zigzag}>
      <p className={styles.copyright_text}>2020 copyright</p>
    </div>
  );
}
