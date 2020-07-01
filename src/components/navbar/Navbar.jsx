import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>
        <Link className={styles.logo} to="/">
          TEST
        </Link>
      </div>
      <div className={styles.options}>
        <Link to="/homepage" className={styles.option}>
          HOMEPAGE
        </Link>
        <Link to="/our_clients" className={styles.option}>
          OUR CLIENTS
        </Link>
        <Link to="/about" className={styles.option}>
          ABOUT US
        </Link>
        <Link to="/career" className={styles.option}>
          CAREER
        </Link>
        <Link to="/contact" className={styles.option}>
          CONTACT US
        </Link>
      </div>
    </div>
  );
}
