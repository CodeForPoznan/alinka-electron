import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import styles from "./Dashboard.scss";
<<<<<<< HEAD
import FormSteps from "./Form/FormSteps";
=======
import routes from "../../routing/routes";
>>>>>>> master

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <div className={styles.Wrapper}>
<<<<<<< HEAD
       <FormSteps />
=======
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
>>>>>>> master
      </div>
    </div>
  );
};

export default withRouter(Dashboard);
