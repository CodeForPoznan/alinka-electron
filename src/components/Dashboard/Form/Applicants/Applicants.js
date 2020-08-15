import React, { useState } from "react";
import PropTypes from "prop-types";
import { useFormState } from "react-final-form";
import Applicant from "./Applicant";
import TextField from "../FieldWrapper/TextField";
import SelectField from "../FieldWrapper/SelectField";

import styles from "./Applicants.scss";

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

  const issueOnChange = event => {
    setChosenParent(event.target.value);
    setFirstReason(null);
    setSecondReason(null);
  };

  const selectOptions = getOptions();
  const isSecondReasonDisabled = getSecondReasonDisabled();

  return (
    <div className={`FormContent ${styles.Applicants}`}>
      <TextField name="applicant.firstName1" />
      <TextField name="applicant.lastName1" />
      <TextField name="applicant.address1" />
      <TextField name="applicant.postalCode1" />
      <TextField name="applicant.city1" />
      <Applicant />
      <SelectField
        name="applicant.issue"
        options={reasonsList}
        onChange={issueOnChange}
      />
      <SelectField
        name="applicant.reason"
        options={selectOptions}
        value={chosenFirstReason}
        onChange={event => setFirstReason(event.target.value)}
        componentSize="extraLarge"
      />
      <SelectField
        name="applicant.secondReason"
        options={selectOptions}
        disabled={isSecondReasonDisabled}
        value={chosenSecondReason}
        onChange={event => setSecondReason(event.target.value)}
        componentSize="extraLarge"
      />
      <TextField name="applicant.period" componentSize="medium" />
    </div>
  );
};

export default Applicants;
Applicants.propTypes = {
  reasonsList: PropTypes.array,
  disabilityList: PropTypes.array
};
