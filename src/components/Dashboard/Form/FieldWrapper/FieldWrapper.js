import React from "react";
import { Field } from "react-final-form";
import appContent from "../../../../appContent";
import Error from "./ErrorField/ErrorField";
import PropTypes from "prop-types";

const required = value => (value ? undefined : "Required");

const FieldWrapper = ({ name, componentSize, component, label }) => {
  const data = appContent;

  return (
    <div className={componentSize}>
      <label>{label ? label : data[name]}</label>
      <Field
        name={name}
        component={component}
        type="text"
        validate={required}
      />
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
