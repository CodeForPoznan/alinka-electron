import React from "react";
import { Route, withRouter, useHistory } from "react-router-dom";
import styles from "./Dashboard.scss";
import ProgressBar from "./ProgressBar/ProgressBar";
import Home from "./Home/Home";
import FormSteps from "./Form/FormSteps";

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <div className={styles.Wrapper}>
        <Route exact path="/" component={Home} />
        <Route
          path="/create-document"
          render={() => (
            <React.Fragment>
              <ProgressBar />
              <FormSteps />
            </React.Fragment>
          )}
        />
      </div>
    </div>
  );
};

export default withRouter(Dashboard);
