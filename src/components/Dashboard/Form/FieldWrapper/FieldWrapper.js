import React from "react";
import { Field } from "react-final-form";
import appContent from "../../../../appContent";
import Error from "./ErrorField/ErrorField";
import PropTypes from "prop-types";

import Opts from "./SelectOptions";

const required = value => (value ? undefined : "Required");

const FieldWrapper = ({ name, componentSize, component, options, label }) => {
  const fieldLabels = appContent;
  return (
    <div className={componentSize}>
      <label>{fieldLabels[name]}</label>
      {component !== "select" ? (
        <Field
          name={name}
          component={component}
          type="text"
          validate={required}
          label={label}
        />
      ) : (
        <Field name={name} component={component} options={options}>
          {({ input, options }) => {
            return (
              <Opts
                options={options}
                name={input.name}
                onChange={value => input.onChange(value)}
              />
            );
          }}
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
  options: PropTypes.array,
  label: PropTypes.string
};

FieldWrapper.defaultProps = {
  label: null
};

export default FieldWrapper;
