import React from "react";
import styles from "./card.module.css";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <img className={styles.card_img} src={props.image} alt="a image" />
      <h6 className={styles.heading}>{props.heading}</h6>
      <p className={styles.information}>{props.info}</p>
      <button className={styles.btn}>MORE INFO</button>
    </div>
  );
}
