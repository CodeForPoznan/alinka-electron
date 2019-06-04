import React from "react";
import styles from "./Header.scss";

const Header = () => (
  <div className={styles.container}>
    <img className={styles.image} src="test-image.jpg" />
    <h1 className={styles.heading}>Alinka</h1>
  </div>
);

export default Header;
