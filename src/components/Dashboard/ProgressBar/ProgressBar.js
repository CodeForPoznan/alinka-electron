import React from "react";
import styles from "./ProgressBar.scss";
import PropTypes from "prop-types";

const ProgressBar = props => {
  const isActive = stepNumber => {
    if (props.pageCounter >= stepNumber) {
      return styles.active;
    } else {
      return styles.menu;
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

ProgressBar.propTypes = {
  pageCounter: PropTypes.number
};

export default ProgressBar;
