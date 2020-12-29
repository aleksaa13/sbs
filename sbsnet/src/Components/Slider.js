import React from "react";
import "antd/dist/antd.css";
import styles from "./Styles/Slider.module.css";
import { Carousel } from "antd";
import CardComponent from "./Card";
import image from "../images/connecion.png";
import image2 from "../images/shake.png";

const Slider = () => {
  return (
    <Carousel autoplay>
      <div>
        <div className={styles.small}>
          Izaberite paket koji zadovoljava vaše potrebe i obezbjedite sebi
          stabilnu internet konekciju bilo gdje
          <br />
          <p className={styles.paragraph}>Najpopularniji paketi:</p>
          <br />
          <div className={styles.karte}>
            <CardComponent title="Paket 1" content="20£/m" />
            <CardComponent title="Paket 1" content="20£/m" />
            <CardComponent title="Paket 1" content="20£/m" />
          </div>
          <a href="" className={styles.listaPaketa}>
            Lista svih paketa
          </a>
        </div>
      </div>
      <div>
        <div className={styles.small}>
          Izaberite paket koji zadovoljava vaše potrebe i obezbjedite sebi
          stabilnu internet konekciju bilo gdje
        </div>
        <div className={styles.imageContainer}>
          <img src={image} alt="slika" />
        </div>
      </div>
      <div>
        <div className={styles.small}>
          500+ zadovoljnih kupaca sirom Crne Gore
        </div>
        <div className={styles.imageContainer}>
          <img src={image2} alt="slika" />
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
