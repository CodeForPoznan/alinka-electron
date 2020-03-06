import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import styles from "./Dashboard.scss";
import routes from "../../routing/routes";

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <div className={styles.Wrapper}>

        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              index={route.id}
              path={route.path}
              render={() => route.component}
              exact={route.exact}
            />
          ))}
        </Switch>

      </div>
    </div>
  );
};

export default withRouter(Dashboard);
