import React from "react";
import styles from "./ProgressBar.scss";

const ProgressBar = () => {
  return (
    <ul className={styles.ProgressBar}>
      <li>Dane dziecka</li>
      <li>Wnioskodawcy</li>
      <li>Zespół</li>
      <li>Podsumowanie</li>
    </ul>
  );
};

export default ProgressBar;
