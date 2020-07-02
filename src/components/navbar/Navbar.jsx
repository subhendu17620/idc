import React from "react";

import styles from "./navbar.module.css";
import { Nav, Navbar } from "react-bootstrap";
export default function Nabvari() {
  return (
    // <div className={styles.navbar}>
    //   <div>
    //     <Link className={styles.logo} to="/">
    //       TEST
    //     </Link>
    //   </div>
    //   <div className={styles.options}>
    //     <Link to="/homepage" className={styles.option}>
    //       HOMEPAGE
    //     </Link>
    //     <Link to="/our_clients" className={styles.option}>
    //       OUR CLIENTS
    //     </Link>
    //     <Link to="/about" className={styles.option}>
    //       ABOUT US
    //     </Link>
    //     <Link to="/career" className={styles.option}>
    //       CAREER
    //     </Link>
    //     <Link to="/contact" className={styles.option}>
    //       CONTACT US
    //     </Link>
    //   </div>
    // </div>
    <Navbar className={styles.navbar} expand="lg">
      <div>
        <Navbar.Brand className={styles.logo} href="#home">
          TEST
        </Navbar.Brand>
      </div>
      <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="mr-auto" inline>
            <Nav.Link className={styles.option} href="#home">
              HOMEPAGE
            </Nav.Link>
            <Nav.Link className={styles.option} href="#link">
              OUR CLIENTS
            </Nav.Link>
            <Nav.Link className={styles.option} href="#link">
              ABOUT US
            </Nav.Link>
            <Nav.Link className={styles.option} href="#link">
              CAREER
            </Nav.Link>
            <Nav.Link className={styles.option} href="#link">
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
