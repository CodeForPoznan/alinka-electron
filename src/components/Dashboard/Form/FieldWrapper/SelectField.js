import React from "react";
import { Field } from "react-final-form";
import PropTypes from "prop-types";

import Error from "./ErrorField/ErrorField";
import fieldLabel from "../../../../appContent.js";

import styles from "./FieldWrapper.scss";

const Options = ({ options }) =>
  options &&
  options.map(({ key, value, text }) => (
    <option key={key} value={value}>
      {text}
    </option>
  ));

const SelectField = props => {
  const { name, componentSize, options, onChange, value, disabled } = props;
  const [mainKey, subKey] = name.split(".");

  return (
    <div className={styles[componentSize]}>
      <label className={styles.Label}>{fieldLabel[mainKey][subKey]}</label>
      <Field name={name}>
        {({ input }) => (
          <select
            className={styles.Input}
            disabled={disabled}
            {...input}
            onChange={event => {
              input.onChange(event);
              onChange && onChange(event);
            }}
            value={value === null ? "" : input.value}
          >
            <Options options={options} />
          </select>
        )}
      </Field>
      <Error name={name} />
    </div>
  );
};

Options.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.any,
      value: PropTypes.string,
      text: PropTypes.string
    })
  ).isRequired
};

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  componentSize: PropTypes.oneOf(["extraLarge", "large", "medium", "small"]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.any,
      value: PropTypes.string,
      text: PropTypes.string
    })
  ).isRequired,
  onChange: PropTypes.func,
  value: PropTypes.any,
  disabled: PropTypes.bool
};

SelectField.defaultProps = {
  componentSize: "large"
};

export default SelectField;
