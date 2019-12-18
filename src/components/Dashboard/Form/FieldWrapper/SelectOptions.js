import React from "react";
import PropTypes from "prop-types";

const OptionList = props => {
  const { name, options, disabled, onChange} = props;

  return (
    <select name={name} onChange={e => onChange(e)} disabled={disabled}>
      {options.map(item => (
        <option key={item.key} value={item.key}>
          {item.text}
        </option>
      ))}
    </select>
  );
};

OptionList.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};

export default OptionList;
