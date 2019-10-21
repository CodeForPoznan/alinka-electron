import React from "react";
import PropTypes from "prop-types";

const Opts = props => {
  return (
    <select name={props.name} onChange={props.onChange}>
      {props.options.map(x => {
        return (
          <option key={x.key} value={x.value}>
            {x.text}
          </option>
        );
      })}
    </select>
  );
};

Opts.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  options: PropTypes.array
};

export default Opts;
