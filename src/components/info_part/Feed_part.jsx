import React from "react";
import styles from "./feed_part.module.css";

export default function Feed_part(props) {
  return (
    <div>
      <p className={styles.info}>{props.info}</p>
      <p className={styles.time}>{props.time}</p>
    </div>
  );
}
