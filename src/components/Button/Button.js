import React from "react";
import styles from "./Button.scss";
import PropTypes from "prop-types";

const Button = props => (
  <button type={props.type} className={styles.Button} onClick={props.onClick}>
    {props.children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  type: PropTypes.oneOf(["button", "submit"])
};

Button.defaultProps = {
  type: "button"
};
export default Button;
