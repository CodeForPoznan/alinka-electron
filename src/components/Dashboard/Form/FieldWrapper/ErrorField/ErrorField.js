import React from "react";
import { Field } from "react-final-form";
import PropTypes from "prop-types";

const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
);

Error.propTypes = {
  name: PropTypes.string
};

export default Error;
