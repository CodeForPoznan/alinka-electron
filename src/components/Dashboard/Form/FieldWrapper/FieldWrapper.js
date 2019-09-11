import React from "react";
import { Field } from "react-final-form";
import appContent from "../../../../appContent";
import Error from "./ErrorField/ErrorField";
import PropTypes from "prop-types";

const required = value => (value ? undefined : "Required");

const FieldWrapper = ({ name, componentSize, component }) => {
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
  componentSize: PropTypes.string,
  component: PropTypes.string
};

export default FieldWrapper;
