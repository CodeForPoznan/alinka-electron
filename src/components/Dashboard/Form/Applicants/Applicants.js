import React, { useState } from "react";
import PropTypes from "prop-types";
import { useFormState } from "react-final-form";
import FieldWrapper from "../FieldWrapper/FieldWrapper";
import styles from "./Applicants.scss";
import Applicant from "./Applicant";

const Applicants = ({ reasonsList, disabilityList }) => {
  /**
   * Calculate if second disable select is enabled
   * Select should be enabled if - user want decision of special education
   * and as a reason choose disability that can be engage with other
   * @returns {bool}
   */

  const [chosenParent, setChosenParent] = useState("WYBIERZ_WNIOSEK");
  const [chosenFirstReason, setFirstReason] = useState("");
  const [chosenSecondReason, setSecondReason] = useState("");

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

  const getOptions = () => {
    const parentItem = reasonsList.find(el => el.value === chosenParent);
    return disabilityList.filter(
      disability => !parentItem.excludedDisabilities.includes(disability.value)
    );
  };

  return (
    <div className={`FormContent ${styles.Applicants}`}>
      <FieldWrapper
        name={`applicant.firstName1`}
        componentSize="large"
        component="input"
      />
      <FieldWrapper
        name={`applicant.lastName1`}
        componentSize="large"
        component="input"
      />
      <FieldWrapper
        name={`applicant.street1`}
        componentSize="large"
        component="input"
      />
      <FieldWrapper
        name={`applicant.postalCode1`}
        componentSize="large"
        component="input"
      />
      <FieldWrapper
        name={`applicant.city1`}
        componentSize="large"
        component="input"
      />
      <Applicant />
      <FieldWrapper
        name={`applicant.issue`}
        componentSize="large"
        component="select"
        options={reasonsList}
        onChange={event => {
          setChosenParent(event.target.value);
          setFirstReason(null);
          setSecondReason(null);
        }}
      />
      <FieldWrapper
        name={`applicant.reason`}
        componentSize="extraLarge"
        component="select"
        options={getOptions()}
        value={chosenFirstReason}
        onChange={event => setFirstReason(event.target.value)}
      />
      <FieldWrapper
        name={`applicant.secondReason`}
        componentSize="extraLarge"
        component="select"
        disabled={getSecondReasonDisabled()}
        options={getOptions()}
        value={chosenSecondReason}
        onChange={event => setSecondReason(event.target.value)}
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
