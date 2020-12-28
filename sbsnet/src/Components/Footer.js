import React, { useState } from "react";
import styles from "./Styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [subject, setSubject] = useState("");
  const [poruka, setPoruka] = useState("");
  let ref = "mailto:sbsnetmontenegro@gmail.com?subject="
    .concat("", subject)
    .concat("&body=")
    .concat(poruka);

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <p>
          <FontAwesomeIcon icon={faEnvelopeOpen} style={{ color: "white" }} />{" "}
          sbsnetmontenegro@gmail.com
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} style={{ color: "white" }} />{" "}
          +38269182727
        </p>
      </div>
      <div className={styles.container}>
        <label htmlFor="subject">Predmet</label>
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          type="text"
          maxLength="20"
          id="subject"
        ></input>

        <label htmlFor="poruka">Poruka</label>
        <textarea
          value={poruka}
          onChange={(e) => setPoruka(e.target.value)}
          id="poruka"
        ></textarea>

        <a href={ref} className={styles.send}>
          <FontAwesomeIcon icon={faPaperPlane} />
          Pošaljite nam email!{" "}
        </a>
      </div>
    </div>
  );
};

export default Footer;
