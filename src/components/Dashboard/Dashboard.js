import React from "react";
import styles from "./Dashboard.scss";
import Drop from "../Dropdown/Dropdown";


const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <p>Dashboard</p>

          <Drop />
      <div className={styles.Wrapper}>test</div>
     
    </div>
  );
};

export default Dashboard;
