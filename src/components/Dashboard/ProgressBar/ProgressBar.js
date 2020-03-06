import React from "react";
import styles from "./ProgressBar.scss";

const ProgressBar = props => {
  const isActive = stepNumber => {
    if (props.pageCounter >= stepNumber) {
      return styles.active;
    }
  };
  return (
    <div className={styles.ProgressBar}>
      <ul className={styles.List}>
        <li className={isActive(0)}>Dane</li>
        <li className={isActive(1)}>Wnioskodawcy</li>
        <li className={isActive(2)}>Zespół</li>
      </ul>
    </div>
  );
};

export default ProgressBar;
