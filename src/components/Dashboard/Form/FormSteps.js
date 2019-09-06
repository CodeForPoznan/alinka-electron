import React from "react";
import DocumentForm from "./DocumentForm";
import FieldWrapper from "./FieldWrapper/FieldWrapper";
import Team from "./Team";

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
          name="childBirthplace"
          componentSize="medium"
          component="input"
        />
        <FieldWrapper
          name="childPesel"
          componentSize="medium"
          component="input"
        />
      </DocumentForm.Step>
      <Team />
    </DocumentForm>
  </React.Fragment>
);

export default FormSteps;
