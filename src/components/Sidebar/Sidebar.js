import React from "react";
import styles from "./Sidebar.scss";
import PropTypes from "prop-types";

const Sidebar = props => {
  return <div className={styles.Sidebar}>{props.children}</div>;
};

Sidebar.propTypes = {
  children: PropTypes.element
};

export default Sidebar;
