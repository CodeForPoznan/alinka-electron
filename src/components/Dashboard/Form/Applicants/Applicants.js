import React from "react";
import PropTypes from "prop-types";

import FieldWrapper from "../FieldWrapper/FieldWrapper";
import styles from "./Applicants.scss";

const Applicants = ({ reasonsList, disabilityList }) => (
  <div className={`FormContent ${styles.Applicants}`}>
    <FieldWrapper
      name={`applicant.names`}
      componentSize="large"
      component="input"
    />
    <FieldWrapper
      name={`applicant.city`}
      componentSize="large"
      component="input"
    />
    <FieldWrapper
      name={`applicant.postalCode`}
      componentSize="medium"
      component="input"
    />
    <FieldWrapper
      name={`applicant.street`}
      componentSize="large"
      component="input"
    />
    <FieldWrapper
      name={`applicant.houseNumber`}
      componentSize="medium"
      component="input"
    />
    <FieldWrapper
      name={`applicant.issue`}
      componentSize="large"
      component="select"
      options={reasonsList}
    />
    <FieldWrapper
      name={`applicant.reason`}
      componentSize="extraLarge"
      component="select"
      options={disabilityList}
    />
    <FieldWrapper
      name={`applicant.secondReason`}
      componentSize="extraLarge"
      component="select"
      options={disabilityList}
    />
    <FieldWrapper
      name={`applicant.period`}
      componentSize="medium"
      component="input"
    />
  </div>
);

export default Applicants;

Applicants.propTypes = {
  reasonsList: PropTypes.array,
  disabilityList: PropTypes.array
};
