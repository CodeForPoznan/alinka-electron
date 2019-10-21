import React from "react";
import DocumentForm from "./DocumentForm";
import FieldWrapper from "./FieldWrapper/FieldWrapper";
import Team from "./Team";

import commonData from "../../../docx/fixtures";
import { reasonsList, disabitilyList } from "../../../staticData";

const { ipcRenderer } = require("electron");

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  try {
    await sleep(300);
    ipcRenderer.send("print:value", values);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Something went wrong: ", error);
  }
};

const FormSteps = () => (
  <React.Fragment>
    <DocumentForm
      initialValues={commonData}
      reasonsList={reasonsList}
      onSubmit={onSubmit}
    >
      <DocumentForm.Step>
        <FieldWrapper
          name="child.name"
          componentSize="large"
          component="input"
        />
        <FieldWrapper
          name="child.nameGenetiv"
          componentSize="large"
          component="input"
        />
      </DocumentForm.Step>
      <DocumentForm.Step>
        <FieldWrapper
          name="applicant.name"
          componentSize="medium"
          component="input"
        />
        <FieldWrapper
          name="applicant.nameGenetive"
          componentSize="medium"
          component="input"
        />
        <FieldWrapper
          name="applicant.address"
          componentSize="medium"
          component="input"
        />
        <FieldWrapper
          name="applicant.postalCode"
          componentSize="medium"
          component="input"
        />
        <FieldWrapper
          name="typeOfApplication"
          componentSize="medium"
          component="select"
          options={reasonsList}
        />
        <FieldWrapper
          name="firstReason"
          componentSize="medium"
          component="select"
          options={disabitilyList}
        />
        <FieldWrapper
          name="secondReason"
          componentSize="medium"
          component="select"
          options={disabitilyList}
        />
        <FieldWrapper name="period" componentSize="medium" component="input" />
      </DocumentForm.Step>
      <Team />
    </DocumentForm>
  </React.Fragment>
);

export default FormSteps;
