import React from "react";
import DocumentForm from "./DocumentForm";
import FieldWrapper from "./FieldWrapper/FieldWrapper";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  try {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Something went wrong: ", error);
  }
};

const FormSteps = () => (
  <React.Fragment>
    <DocumentForm
      initialValues={{ schoolType: "Szkoła Podstawowa", profession: false }}
      onSubmit={onSubmit}
    >
      <DocumentForm.Step>
        <FieldWrapper
          name="childfullName"
          componentSize="large"
          component="input"
        />
        <FieldWrapper
          name="childfullNameGenetiv"
          componentSize="large"
          component="input"
        />
      </DocumentForm.Step>
      <DocumentForm.Step>
        <FieldWrapper
          name="applicantName"
          componentSize="medium"
          component="input"
        />
        <FieldWrapper
          name="applicantSurname"
          componentSize="medium"
          component="input"
        />
        <FieldWrapper name="adress" componentSize="medium" component="input" />
        <FieldWrapper
          name="postalCode"
          componentSize="medium"
          component="input"
        />
        <FieldWrapper
          name="typeOfApplication"
          componentSize="medium"
          component="input"
        />
        <FieldWrapper
          name="firstReason"
          componentSize="medium"
          component="select"
        />
        <FieldWrapper
          name="secondReason"
          componentSize="medium"
          component="select"
        />
        <FieldWrapper
          name="timePeriod"
          componentSize="medium"
          component="input"
        />
      </DocumentForm.Step>
    </DocumentForm>
  </React.Fragment>
);

export default FormSteps;
