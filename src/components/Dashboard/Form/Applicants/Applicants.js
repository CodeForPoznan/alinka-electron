import React, {useState, useEffect} from "react";
import FieldWrapper from "../FieldWrapper/FieldWrapper";
import styles from "./Applicants.scss";

import { reasonsList, disabilityList } from "../../../../staticData";

const Applicants = () => {
  const [chosenParent, setChosenParent] = useState("x");
  const [chosenChild1, setChosenChild1] = useState();
  const [chosenChild2, setChosenChild2] = useState();

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
      {/* <FieldWrapper
        name={`applicant.reason`}
        componentSize="extraLarge"
        component="select"
        options={typeof chosenParent.disabilityListItems !== "undefined" ? chosenParent.disabilityListItems : []}
      /> */}
      <span>{chosenParent}</span>
      {/* <FieldWrapper
        name={`applicant.secondReason`}
        componentSize="extraLarge"
        component="select"
        options={chosenParent.disabilityListItems.filter(el => !chosenChild2)}
      /> */}
      <FieldWrapper
        name={`applicant.period`}
        componentSize="medium"
        component="input"
      />
    </div>
  );
}

export default Applicants;
