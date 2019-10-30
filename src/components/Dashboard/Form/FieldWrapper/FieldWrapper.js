import React from "react";
import { Field } from "react-final-form";
import Error from "./ErrorField/ErrorField";
import fieldLabel from "../../../../appContent.js";
import styles from "./FieldWrapper.scss";
import PropTypes from "prop-types";

const required = value => (value ? undefined : "Required");

const FieldWrapper = ({ name, componentSize, component, label }) => {
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
        <Field className={styles.Input} name={name} component={component}>
          <option value="optionA">A</option>
          <option value="optionB">B</option>
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
  label: PropTypes.string
};

FieldWrapper.defaultProps = {
  label: null
};

export default FieldWrapper;
