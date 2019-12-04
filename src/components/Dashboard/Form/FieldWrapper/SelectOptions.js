import React from "react";
import PropTypes from "prop-types";

const OptionList = props => {
  const { name, onChange, options, onFocus } = props;

  return (
    <select name={name} onChange={onChange} onFocus={onFocus}>
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
  options: PropTypes.array
};

export default OptionList;
