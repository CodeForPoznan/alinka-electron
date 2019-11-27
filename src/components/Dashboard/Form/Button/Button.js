import React from "react";
import styles from "./Button.scss";
import PropTypes from "prop-types";

const Button = props => (
  <div>
    <button type={props.type} className={styles.Button} onClick={props.onClick}>
      {props.label}
    </button>
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit"])
};

Button.defaultProps = {
  type: "button"
};
export default Button;
