import React from "react";
import FieldWrapper from "../FieldWrapper/FieldWrapper";
import styles from "./ChildData.scss";

const ChildData = () => (
  <div className={`FormContent ${styles.ChildData}`}>
    <FieldWrapper name={`child.name`} componentSize="large" component="input" />
    <FieldWrapper name={`child.name`} componentSize="large" component="input" />
    <FieldWrapper
      name={`child.birthPlace`}
      componentSize="large"
      component="input"
    />
    <FieldWrapper
      name={`child.name`}
      componentSize="medium"
      component="input"
    />
    <FieldWrapper
      name={`child.pesel`}
      componentSize="large"
      component="input"
    />
    <FieldWrapper name={`city`} componentSize="medium" component="input" />
    <FieldWrapper name={`city`} componentSize="large" component="input" />
    <FieldWrapper name={`city`} componentSize="medium" component="input" />
    <FieldWrapper name={`city`} componentSize="large" component="select" />
    <FieldWrapper
      name={`child.name`}
      componentSize="medium"
      component="input"
    />
    <FieldWrapper name={`child.name`} componentSize="small" component="input" />
    <FieldWrapper
      name={`school`}
      componentSize="extraLarge"
      component="input"
    />
  </div>
);

export default ChildData;
