import React from "react";
import styles from "./Layout.scss";
import Header from "./Header/Header";
import Dashboard from "./Dashboard/Dashboard";
import Sidebar from "./Sidebar/Sidebar";
import SaveButton from "./SaveButton/SaveButton";

const Layout = () => {
  return (
    <div className={styles.Layout}>
      <Header />
      <Sidebar />
      {/*<SaveButton />*/}
      <Dashboard />
    </div>
  );
};

export default Layout;
