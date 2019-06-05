import React, { Component } from "react";
import styles from "./Layout.scss";
import Header from "./Header/Header";
import Dashboard from "./Dashboard/Dashboard";
import Sidebar from "./Sidebar/Sidebar";
// import SaveButton from "./SaveButton/SaveButton";

class Layout extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <Sidebar />
        {/* <SaveButton /> */}
        <Dashboard />
      </div>
    );
  }
}

export default Layout;
