import React, { Component } from "react";
import styles from "./ProgressBar.scss";

class ProgressBar extends Component {
  render() {
    let menuStep1;
    let menuStep2;
    let menuStep3;
    let menuStep4;


    switch (this.props.pageCounter) {
      case 0:
        menuStep1 = styles.active;
        break;
      case 1:
        menuStep2 = styles.active;
        menuStep1 = styles.active;
        break;
      case 2:
        menuStep3 = styles.active;
        menuStep2 = styles.active;
        menuStep1 = styles.active;
        break;
      case 3:
        menuStep4 = styles.active;
        menuStep3 = styles.active;
        menuStep2 = styles.active;
        menuStep1 = styles.active;
        break;
    }


    return (
      <div className={styles.ProgressBar}>
        <ul className={styles.ProgressBar__list}>
          <li className={menuStep1}>Dane dziecka</li>
          <li className={menuStep2}>Wnioskodawcy</li>
          <li className={menuStep3}>Zespół</li>
          <li className={menuStep4}>Podsumowanie</li>

        </ul>
      </div>
    );
  }
}

export default ProgressBar;
