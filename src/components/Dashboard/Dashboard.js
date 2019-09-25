import React from "react";
import styles from "./Dashboard.scss";
import ProgressBar from "./ProgressBar/ProgressBar";
import FormSteps from "./Form/FormSteps";

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <div className={styles.Wrapper}>
        <ProgressBar />
        <FormSteps />
      </div>
    </div>
  );
};

export default Dashboard;
