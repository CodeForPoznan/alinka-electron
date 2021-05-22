import React from "react";
import { useLocation } from 'react-router-dom';
import DocumentForm from "./DocumentForm";
import ChildData from "./ChildData/ChildData";
import Applicants from "./Applicants/Applicants";
import Team from "./Team";
import commonData from "../../../docx/fixtures";
import { reasonsList, disabilityList } from "../../../staticData";

const { ipcRenderer } = require("electron");

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  try {
    await sleep(300);
    ipcRenderer.send("print:value", values);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Something went wrong: ", error);
  }
};

const FormSteps = () => {
  const location = useLocation();
  const { state } = location;

  // Note: It is a temporary solution - it will be changed when
  // we successfully connect to DB.
  Object.assign(commonData.child, state?.child)

  return (
    <React.Fragment>
      <DocumentForm initialValues={commonData} onSubmit={onSubmit}>
        <DocumentForm.Step>
          <ChildData />
        </DocumentForm.Step>
        <DocumentForm.Step>
          <Applicants reasonsList={reasonsList} disabilityList={disabilityList} />
        </DocumentForm.Step>
        <DocumentForm.Step>
          <Team />
        </DocumentForm.Step>
      </DocumentForm>
    </React.Fragment>
  );
}

export default FormSteps;
