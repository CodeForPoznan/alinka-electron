import React from "react";
import styles from "./Header.scss";
import logo from "../../../assets/test.jpg";

const Header = () => (
  <header className={styles.Header}>
    <img className={styles.Image} src={logo} />
    <h1>Alinka</h1>
  </header>
);

export default Header;
