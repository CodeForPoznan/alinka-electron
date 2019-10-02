import React from "react";
import { Field } from "react-final-form";
import appContent from "../../../../appContent";
import Error from "./ErrorField/ErrorField";
import styles from "./FieldWrapper.scss";
import PropTypes from "prop-types";

const required = value => (value ? undefined : "Required");

const FieldWrapper = ({ name, componentSize, component, label }) => {
  const data = appContent;

  return (
    <div className={componentSize}>
      <label>{data[name]}</label>
      {component !== "select" ? (
        <Field
          name={name}
          component={component}
          type="text"
          validate={required}
        />
      ) : (
        <Field name={name} component={component}>
          <option />
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
  componentSize: PropTypes.oneOf(["large", "medium"]).isRequired,
  component: PropTypes.string,
  label: PropTypes.string
};

FieldWrapper.defaultProps = {
  label: null
};

export default FieldWrapper;
