import React from "react";
import styles from "./Layout.scss";
import Header from "./Header/Header";
import Dashboard from "./Dashboard/Dashboard";
import Sidebar from "./Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className={styles.Layout}>
      <Sidebar>
        <Header />
      </Sidebar>
      <Dashboard />
    </div>
  );
};

export default Layout;
