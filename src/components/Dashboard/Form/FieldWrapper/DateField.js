import React from "react";
import { Field } from "react-final-form";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";

import Error from "./ErrorField/ErrorField";
import fieldLabel from "../../../../appContent.js";

import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./FieldWrapper.scss";

const DateField = props => {
  const { name, componentSize } = props;
  const [mainKey, subKey] = name.split(".");

  return (
    <div className={styles[componentSize]}>
      <label className={styles[componentSize]}>
        {fieldLabel[mainKey][subKey]}
      </label>
      <Field name={name}>
        {({ input }) => (
          <DatePicker
            className={styles.Input}
            onChange={date => {
              console.log(
                date,
                input.value,
                date.toLocaleDateString(),
                new Date(date.toLocaleDateString()),
                new Date(input.value)
              );
              input.onChange({ target: { value: date.toLocaleDateString() } });
            }}
            dateFormat="dd.MM.yyyy"
            selected={input.value}
            todayButton="Dzisiejsza data"
          />
        )}
      </Field>
      <Error name={name} />
    </div>
  );
};

DateField.propTypes = {
  name: PropTypes.string.isRequired,
  componentSize: PropTypes.oneOf(["extraLarge", "large", "medium", "small"])
};

DateField.defaultProps = {
  componentSize: "large"
};

export default DateField;
