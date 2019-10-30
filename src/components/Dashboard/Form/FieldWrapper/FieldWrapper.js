import React from "react";
import { Field } from "react-final-form";
import Error from "./ErrorField/ErrorField";
import fieldLabel from "../../../../appContent.js";
import styles from "./FieldWrapper.scss";
import PropTypes from "prop-types";

import OptionList from "./SelectOptions";

const required = value => (value ? undefined : "Required");

const FieldWrapper = ({ name, componentSize, component, options }) => {
  const dataKeys = name.split(".");
  const mainKey = dataKeys[0];
  const subKey = dataKeys[1];
  return (
    <div className={styles[componentSize]}>
      <label className={styles.Label}>{fieldLabel[mainKey][subKey]}</label>
      {component !== "select" ? (
        <Field
          className={styles.Input}
          name={name}
          component={component}
          type="text"
          validate={required}
        />
      ) : (
        <Field
          className={styles.Input}
          name={name}
          component={component}
          options={options}
        >
          {({ input, options }) => (
            <OptionList
              options={options}
              name={input.name}
              onChange={value => input.onChange(value)}
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
  options: PropTypes.array,
  label: PropTypes.string
};

FieldWrapper.defaultProps = {
  label: null
};

export default FieldWrapper;
