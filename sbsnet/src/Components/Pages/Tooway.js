import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../Styles/Tooway.module.css";

const Tooway = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await axios("http://localhost:5000/paketi");
    let paketi = [...result.data];
    setData(paketi);
  }, []);
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <tr>
          <th>
            <p style={{ color: "white" }}>Ime paketa</p>
          </th>
          <th>
            <p style={{ color: "white" }}>Cijena paketa</p>
          </th>
          <th>
            <p style={{ color: "white" }}>karakteristike</p>
          </th>
        </tr>

        {data.map((paket) => {
          console.log(paket);
          return (
            <tr>
              <td>
                {" "}
                <p style={{ color: "white" }}>{paket.imePaketa}</p>
              </td>
              <td>
                <p style={{ color: "white" }}> {paket.cijenaPaketa} </p>
              </td>
              <td>
                <p style={{ color: "white" }}>{paket.opisPaketa}</p>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Tooway;
