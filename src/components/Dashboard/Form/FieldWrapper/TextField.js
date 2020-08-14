import React from "react";
import { Field } from "react-final-form";
import PropTypes from "prop-types";

import Error from "./ErrorField/ErrorField";
import fieldLabel from "../../../../appContent.js";

import styles from "./FieldWrapper.scss";

const { composeValidators } = require("./../../../../../src/utils/validators");

const TextField = props => {
  const { name, componentSize, validator } = props;
  const [mainKey, subKey] = name.split(".");
  const validators = composeValidators(validator);

  return (
    <div className={styles[componentSize]} data-testid="textField">
      <label className={styles[componentSize]}>
        {fieldLabel[mainKey][subKey]}
      </label>
      <Field
        className={styles.Input}
        name={name}
        component="input"
        validate={validators}
      />
      <Error name={name} />
    </div>
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  componentSize: PropTypes.oneOf(["extraLarge", "large", "medium", "small"]),
  validator: PropTypes.func
};

TextField.defaultProps = {
  componentSize: "large"
};

export default TextField;
