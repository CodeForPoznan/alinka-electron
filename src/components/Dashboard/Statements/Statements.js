import React from "react";

import HeaderIcon from "../../../assets/icons/profile.svg";

import styles from "./Statements.scss";

const StatementsHeader = () => (
  <div className={styles.StatementsHeader}>
    <HeaderIcon />
    <h2 className={styles.Heading}>
      <span>Wyszukaj orzeczenia</span>
    </h2>
  </div>
);

const Statements = () => (
  <div className={`${styles.Statements}`}>
    <StatementsHeader />
  </div>
);

export default Statements;
