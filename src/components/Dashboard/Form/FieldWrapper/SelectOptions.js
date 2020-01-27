import React from "react";
import PropTypes from "prop-types";

const OptionList = props => {
  const { value, name, onChange, options, onFocus, disabled } = props;

  return (
    <select
      value={value}
      name={name}
      onChange={onChange}
      onFocus={onFocus}
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
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  onFocus: PropTypes.func,
  disabled: PropTypes.bool
};

export default OptionList;
