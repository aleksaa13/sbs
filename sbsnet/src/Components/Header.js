import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import image from "../images/logo_sbs.png";

const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={image} alt="SBS" />
        </div>
        <nav>
          <ul>
            <li className={styles.link}>
              <NavLink
                exact
                to="/kontakt"
                activeStyle={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                Kontakt
              </NavLink>
            </li>

            <li className={styles.link}>
              <NavLink
                exact
                to="/usluge"
                activeStyle={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                Usluge
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink
                exact
                to="/novosti"
                activeStyle={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                Novosti
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink
                exact
                to="/"
                activeStyle={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                Početna
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default Header;
