import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo_sbs.png" alt="SBS" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/kontakt"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Kontakt
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/tooway"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Tooway
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/novosti"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Novosti
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
