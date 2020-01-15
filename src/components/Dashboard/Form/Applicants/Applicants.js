import React, { useState } from "react";
import FieldWrapper from "../FieldWrapper/FieldWrapper";
import styles from "./Applicants.scss";

import { reasonsList } from "../../../../staticData";

const Applicants = () => {
  const [chosenParent, setChosenParent] = useState("WYBIERZ_WNIOSEK");

  const getOptions = () =>
    reasonsList.find(el => el.value === chosenParent).disabilityListItems;

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
