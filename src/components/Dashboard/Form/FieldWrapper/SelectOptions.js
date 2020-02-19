import React from "react";
import PropTypes from "prop-types";

const OptionList = props => {
  const { name, onChange, options, onFocus, disabled } = props;

  return (
    <select
      name={name}
      onChange={event => onChange(event)}
      onFocus={onFocus}
      disabled={disabled}
      required
    >
      {options.map(item => (
        <option key={item.key} disabled={item.disable} value={item.value}>
          {item.text}
        </option>
      ))}
    </select>
  );
};

OptionList.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  onFocus: PropTypes.func,
  disabled: PropTypes.bool
};

export default OptionList;
