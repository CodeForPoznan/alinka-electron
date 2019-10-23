import React from "react";
import FieldWrapper from "../FieldWrapper/FieldWrapper";
import styles from "./Applicants.scss";

const Applicants = () => (
  <div className={`FormContent ${styles.ChildData}`}>
    <FieldWrapper name={`test`} componentSize="medium" component="input" />
    <FieldWrapper name={`test`} componentSize="large" component="input" />
    <FieldWrapper name={`test`} componentSize="medium" component="input" />
    <FieldWrapper name={`test`} componentSize="large" component="select" />
  </div>
);

export default Applicants;
