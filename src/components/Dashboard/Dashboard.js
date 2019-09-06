import React from "react";
import styles from "./Dashboard.scss";
import FormSteps from "./Form/FormSteps";

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <div className={styles.Wrapper}>
        <FormSteps />
      </div>
    </div>
  );
};

export default Dashboard;
