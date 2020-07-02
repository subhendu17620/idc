import React from "react";
import Card from "./Card";
import img1 from "./../../assets/img1.PNG";
import img2 from "./../../assets/img2.PNG";
import img3 from "./../../assets/img3.PNG";

import styles from "./cards.module.css";
import { Row, Col } from "react-bootstrap";

export default function Cards() {
  return (
    <div className={styles.cards}>
      <Row>
        <Col sm>
          <Card
            image={img1}
            heading={"Lorem ipsum dolor sit amet "}
            info={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint obcaecati sequi quod, aliquid, facere"
            }
          />
        </Col>
        <Col sm>
          <Card
            image={img2}
            heading={"consectetur adipisicing elit"}
            info={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint obcaecati sequi quod, aliquid, facere"
            }
          />
        </Col>
        <Col sm>
          <Card
            image={img3}
            heading={"Sint obcaecati sequi quod"}
            info={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint obcaecati sequi quod, aliquid, facere"
            }
          />
        </Col>
      </Row>
    </div>
  );
}
