import React from "react";
import styles from "./Button.scss";
import PropTypes from "prop-types";

// const Button = props => (
//   <button type={props.type} className={styles.Button} onClick={props.onClick}>
//     {props.label}
//   </button>
// );

const Button = props => {
  // console.table(props)
  console.log(props.onClick, typeof props.onClick)
  return (<button type={props.type} className={styles.Button} onClick={props.onClick}>
    {props.label}
  </button>);
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit"])
};
