import React from "react";
import { Field } from "react-final-form";
import Error from "./ErrorField/ErrorField";
import fieldLabels from "../../../../appContent.js";
import styles from "./FieldWrapper.scss";
import PropTypes from "prop-types";

import OptionList from "./SelectOptions";

const { composeValidators } = require("./../../../../../src/utils/validators");

const FieldWrapper = ({
  name,
  componentSize,
  component,
  disabled,
  onFocus,
  options,
  onChange,
  validator,
  value,
  label
}) => {
  const dataKeys = name.split(".");
  const mainKey = dataKeys[0];
  const subKey = dataKeys[1];
  const fieldLabel = fieldLabels[mainKey][subKey] || label;
  return (
    <div className={styles[componentSize]}>
      <label className={styles.Label}>{fieldLabel}</label>
      {component !== "select" ? (
        <Field
          className={styles.Input}
          name={name}
          component={component}
          type="text"
          validate={composeValidators(validator)}
          disabled={disabled}
        />
      ) : (
        <Field name={name} options={options}>
          {({ input, options }) => (
            <OptionList
              options={options}
              name={input.name}
              value={value === null ? "" : input.value}
              onFocus={onFocus}
              onChange={event => {
                input.onChange(event);
                onChange && onChange(event);
              }}
              disabled={disabled}
            />
          )}
        </Field>
      )}

      <Error name={name} />
    </div>
  );
};

FieldWrapper.propTypes = {
  name: PropTypes.string,
  componentSize: PropTypes.oneOf(["extraLarge", "large", "medium", "small"])
    .isRequired,
  component: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
  label: PropTypes.string,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  validator: PropTypes.func,
  value: PropTypes.any
};

FieldWrapper.defaultProps = {
  label: null
};

export default FieldWrapper;
