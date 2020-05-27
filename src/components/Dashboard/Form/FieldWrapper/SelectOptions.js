import React from "react";
import PropTypes from "prop-types";

import styles from "./FieldWrapper.scss";

const OptionList = props => {
  const { name, onChange, options, onFocus, disabled, value } = props;
  return (
    <select
      className={styles.Input}
      name={name}
      onChange={event => onChange(event)}
      onFocus={onFocus}
      value={value}
      disabled={disabled}
    >
      {options.map(item => (
        <option key={item.key} value={item.value}>
          {item.text}
        </option>
      ))}
    </select>
  );
};

OptionList.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  onFocus: PropTypes.func,
  value: PropTypes.any,
  disabled: PropTypes.bool
};

export default OptionList;
