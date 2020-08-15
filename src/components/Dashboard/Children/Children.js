import React from "react";

import Button from "../../Button/Button";
import HeaderIcon from "../../../assets/icons/profile.svg";

import styles from "./Children.scss";

const ChildrenHeader = () => (
  <div className={styles.ChildrenHeader}>
    <HeaderIcon />
    <h2 className={styles.Heading}>
      <span>Wyszukaj dzieci</span>
    </h2>
  </div>
);

const Children = () => (
  <div className={`${styles.Children}`}>
    <ChildrenHeader />
    <div className={`${styles.ChildrenFilterContainer}`}>
      <input type="text" name="childName" />
      <Button>Szukaj</Button>
    </div>
  </div>
);

export default Children;
