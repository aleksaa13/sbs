import React from "react";
import "antd/dist/antd.css";
import styles from "./Styles/Card.module.css";
import { Card } from "antd";

const CardComponent = (props) => {
  return (
    <div className={styles.karta}>
      <Card
        size="small"
        title={props.title}
        extra={<button className={styles.cardButton}>Vise</button>}
        style={{ width: 200, height: 100 }}
      >
        <p>{props.content}</p>
      </Card>
    </div>
  );
};

export default CardComponent;
