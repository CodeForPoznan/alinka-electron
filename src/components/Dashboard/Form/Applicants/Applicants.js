import React from "react";
import PropTypes from "prop-types";

import { useState, useFormState } from "react-final-form";

import FieldWrapper from "../FieldWrapper/FieldWrapper";
import styles from "./Applicants.scss";

const Applicants = ({ reasonsList, disabilityList }) => {
  /**
   * Calculate if second disable select is enabled
   * Select should be enabled if - user want decision of special education
   * and as a reason choose disability that can be engage with other
   * @returns {bool}
   */
  const [chosenParent, setChosenParent] = useState("WYBIERZ_WNIOSEK");

  const getOptions = () =>
    reasonsList.find(el => el.value === chosenParent).disabilityListItems;

  const getSecondReasonDisabled = () => {
    const actualValues = useFormState().values;
    const joinableDisabilitylist = Array.from(
      disabilityList.filter(disability => disability.multiple),
      disability => disability.value
    );
    const issuesAllowingMultipleDisablity = Array.from(
      reasonsList.filter(issue => issue.allowMultiple),
      issue => issue.value
    );
    return !(
      joinableDisabilitylist.includes(actualValues.applicant.reason) &&
      issuesAllowingMultipleDisablity.includes(actualValues.applicant.issue)
    );
  };

  return (
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
        onChange={e => setChosenParent(e.target.value)}
      />
      <FieldWrapper
        name={`applicant.reason`}
        componentSize="extraLarge"
        component="select"
        options={getOptions()}
      />
      <FieldWrapper
        name={`applicant.secondReason`}
        componentSize="extraLarge"
        component="select"
        options={getOptions()}
        disabled={getSecondReasonDisabled()}
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
