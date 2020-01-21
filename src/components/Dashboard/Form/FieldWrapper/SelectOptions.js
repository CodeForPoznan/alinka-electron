import React from "react";
import PropTypes from "prop-types";

const OptionList = props => {
  const { name, onChange, options, onFocus, disabled} = props;

  return (
    <select name={name} onChange={onChange} onFocus={onFocus} disabled={disabled}>
      {options.map(item => (
        <option key={item.key} value={item.value}>
          {item.text}
        </option>
      ))}
    </select>
  );
};

OptionList.propTypes = {
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  name: PropTypes.string,
  options: PropTypes.array,
  disabled: PropTypes.bool
};

export default OptionList;
