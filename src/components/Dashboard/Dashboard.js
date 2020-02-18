import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import styles from "./Dashboard.scss";
import routes from "../../routing/routes";

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <div className={styles.Wrapper}>
        <Switch>
          {Object.keys(routes).map(key => (
            <Route
              key={routes[key].id}
              path={routes[key].path}
              render={() => routes[key].component}
              exact={routes[key].exact}
            />
          ))}
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(Dashboard);
