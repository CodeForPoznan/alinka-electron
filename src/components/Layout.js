import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styles from "./Layout.scss";
import Header from "./Header/Header";
import Dashboard from "./Dashboard/Dashboard";
import Sidebar from "./Sidebar/Sidebar";
import Navigation from "./Navigation/Navigation";

const Layout = () => {
  return (
    <Router>
      <div className={styles.Layout}>
        <Sidebar>
          <React.Fragment>
            <Header />
            <Navigation />
          </React.Fragment>
        </Sidebar>
        <Dashboard />
      </div>
    </Router>
  );
};

export default Layout;
