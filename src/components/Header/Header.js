import React from "react";
import styles from "./Header.scss";

const Header = () => {
  return (
    <header className={styles.Header}>
      <img className={styles.Image} src="test-image.jpg" />
      <h1>Alinka</h1>
    </header>
  );
};

export default Header;
