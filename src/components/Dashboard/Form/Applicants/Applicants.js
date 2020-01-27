import React from "react";
import PropTypes from "prop-types";

import { useFormState } from "react-final-form";

import FieldWrapper from "../FieldWrapper/FieldWrapper";
import styles from "./Applicants.scss";


const Applicants = ({ reasonsList, disabilityList}) => {
  /**
   * Calculate if second disable select is enabled
   * Select should be enabled if - user want decision of special education
   * and as a reason choose disability that can be engage with other
   * @returns {bool}
   */
  const getSecondReasonDisabled = () => {
    const actualValues = useFormState().values
    const canBeMultipleDisability = Array.from(disabilityList.slice(1,11), disability => disability.value)
    const issuesManyDisable = reasonsList[1].value != actualValues.applicant.issue
    return !canBeMultipleDisability.includes(actualValues.applicant.reason) || issuesManyDisable
  }

  return (
    <div className={`FormContent ${styles.Applicants}`}>
      <FieldWrapper
        name={`applicant.names`}
        componentSize="large"
        component="input"
      />
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
        disabled={getSecondReasonDisabled()}
        options={disabilityList}
      />
      <FieldWrapper
        name={`applicant.period`}
        componentSize="medium"
        component="input"
      />
    </div>
  );
};

export default Applicants;

Applicants.propTypes = {
  reasonsList: PropTypes.array,
  disabilityList: PropTypes.array
};
