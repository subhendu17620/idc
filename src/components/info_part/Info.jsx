import React from "react";
import styles from "./info.module.css";
import bg from "../../assets/bg.PNG";

import Feed_part from "./Feed_part";

export default function Info() {
  return (
    <div className={styles.info_part}>
      <div className={styles.left_part}>
        <h1 className={styles.heading}>Libero voulpat Kdajin</h1>
        <h6 className={styles.sub_heading}>
          Lorem ipsum dolor, sit amet consectetur
        </h6>
        <img className={styles.bg_image} src={bg} alt="" />
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          voluptatibus dicta necessitatibus repellendus impedit. Quasi, impedit,
          ad ipsum rerum quaerat aspernatur consectetur dignissimos quisquam
          dolor temporibus numquam obcaecati est facilis! Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Sunt corporis enim excepturi
          possimus quia? Quaerat fuga dolorem dolor nemo nulla neque laborum ab
          cumque, asperiores perspiciatis eius, minima inventore et?
        </p>
        <button className={styles.btn}>MORE INFO</button>
      </div>
      <div className={styles.right_part}>
        <h2>Categories</h2>
        <div className={styles.feed_part}>
          <Feed_part
            info={
              "asperiores aspernatur perspiciatis eius, aspernatur minima inventore et."
            }
            time={"8 day ago"}
          />
          <hr />
          <Feed_part
            info={
              " ipsum rerum quaerat aspernatur consectetur  aspernatur dignissimos quisquam"
            }
            time={"1 day ago"}
          />
          <hr />
          <Feed_part
            info={
              "asperiores perspiciatis eius, minima inventore perspiciatis eius, minima inventor perspiciatis eius, minima inventorperspiciatis eius, minima inventor et."
            }
            time={"4 days ago"}
          />
        </div>

        <button className={styles.btn}>MORE INFO</button>
      </div>
    </div>
  );
}
