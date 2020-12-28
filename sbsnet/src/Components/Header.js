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
                to="/"
                activeStyle={{
                  fontWeight: "bold",
                  textDecoration: "underlined",
                }}
              >
                Početna
              </NavLink>
            </li>

            <li className={styles.dropdown}>
              <p className={styles.usluge}>
                Usluge
                <FontAwesomeIcon icon={faSortDown} />
              </p>
              <div className={styles.dropdownContent}>
                <NavLink
                  exact
                  to="/pravnalica"
                  activeStyle={{
                    fontWeight: "bold",
                    textDecoration: "underlined",
                  }}
                >
                  Pravna Lica
                </NavLink>
                <NavLink
                  exact
                  to="/fizickalica"
                  activeStyle={{
                    fontWeight: "bold",
                  }}
                >
                  Fizička Lica
                </NavLink>

                <NavLink
                  exact
                  to="/opstiuslovi"
                  activeStyle={{
                    fontWeight: "bold",
                  }}
                >
                  Opšti Uslovi
                </NavLink>
              </div>
            </li>
            <li className={styles.link}>
              <NavLink
                exact
                to="/tooway"
                activeStyle={{
                  fontWeight: "bold",
                  textDecoration: "underlined",
                }}
              >
                Tooway
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink
                exact
                to="/novosti"
                activeStyle={{
                  fontWeight: "bold",
                  textDecoration: "underlined",
                }}
              >
                Novosti
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink
                exact
                to="/kontakt"
                activeStyle={{
                  fontWeight: "bold",
                  textDecoration: "underlined",
                }}
              >
                Kontakt
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
