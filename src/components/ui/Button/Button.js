import React from "react";
import styles from "./Button.scss";
import PropTypes from "prop-types";

const Button = props => (
  <button
    type={props.type}
    className={styles.Button}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  type: PropTypes.oneOf(["button", "submit"]),
  disabled: PropTypes.bool
};

Button.defaultProps = {
  type: "button"
};
export default Button;
